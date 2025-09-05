import { Webhook } from "svix";
import connectDB from "@/config/db";
import User from "@/models/User";
import { headers } from "next/headers";

export async function POST(req){
    try {
        if (!process.env.SIGNIN_SECRET) {
            console.error("Missing SIGNIN_SECRET environment variable");
            return new Response("Server configuration error", { status: 500 });
        }

        const wh = new Webhook(process.env.SIGNIN_SECRET)
        const headerPayload = await headers()
        const svixHeaders = {
            "svix-id": headerPayload.get("svix-id"),
            "svix-timestamp": headerPayload.get("svix-timestamp"),
            "svix-signature": headerPayload.get("svix-signature"),
        }

        // Validate required headers
        if (!svixHeaders["svix-id"] || !svixHeaders["svix-timestamp"] || !svixHeaders["svix-signature"]) {
            console.error("Missing required svix headers");
            return new Response("Missing required headers", { status: 400 });
        }

        // Get the payload and verify it.
        const payload = await req.json();
        const body = JSON.stringify(payload);
        
        let data, type;
        try {
            const verified = wh.verify(body, svixHeaders);
            data = verified.data;
            type = verified.type;
        } catch (error) {
            console.error("Webhook verification failed:", error);
            return new Response("Webhook verification failed", { status: 400 });
        }

    // Prepeare the user data to be saved in the database
    const userData = {
        _id: data.id,
        email: data.email_addresses[0].email_address,
        name: `${data.first_name} ${data.last_name}`,
        image: data.image_url,
    };

        // Validate user data
        if (!data.id || !data.email_addresses || data.email_addresses.length === 0) {
            console.error("Invalid user data received:", data);
            return new Response("Invalid user data", { status: 400 });
        }

        await connectDB();

        switch (type) {
            case 'user.created':
                await User.create(userData);
                console.log("✅ User created:", userData._id);
                break;

            case 'user.updated':
                await User.findByIdAndUpdate(data.id, userData);
                console.log("✅ User updated:", userData._id);
                break;

            case 'user.deleted':
                await User.findByIdAndDelete(data.id);
                console.log("✅ User deleted:", data.id);
                break;

            default:
                console.log("🔄 Unhandled webhook event:", type);
                break;
        }

        return new Response(JSON.stringify({message: "Event received."}), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
        
    } catch (error) {
        console.error("❌ Webhook error:", error);
        return new Response("Internal server error", { status: 500 });
    }
}