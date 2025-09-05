import { Inter } from "next/font/google";
import "./globals.css";
import "./prism.css";
import { ClerkProvider } from "@clerk/nextjs";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
import ErrorBoundary from "@/components/ErrorBoundary";

const inter = Inter({
  variable: "--font-inder",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "DeepSeek - Clone",
  description: "Full Stack Project",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <AppContextProvider>
        <html lang="en">
          <body className={`${inter.className} antialiased`}>
            <ErrorBoundary>
              <Toaster toastOptions={
                {
                  success: {style: { background: "black", color: "white"}},
                  error: {style: { background: "black", color: "white"}}
                }
              } />
              {children}
            </ErrorBoundary>
          </body>
        </html>
      </AppContextProvider>
    </ClerkProvider>
  );
}
