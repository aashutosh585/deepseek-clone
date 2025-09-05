# Vercel Deployment Guide

## 🚀 Deploying to Vercel

### Step 1: Environment Variables Setup

In your Vercel dashboard, go to your project settings and add these environment variables:

#### Production Environment Variables:

```bash
# Clerk Authentication (PRODUCTION KEYS)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_your_production_key
CLERK_SECRET_KEY=sk_live_your_production_key

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database

# Gemini API
GEMINI_API_KEY=your_gemini_api_key

# Webhooks
SIGNIN_SECRET=whsec_your_production_webhook_secret

# Application URL (replace with your actual domain)
NEXT_PUBLIC_BASE_URL=https://your-app.vercel.app
```

### Step 2: Clerk Production Setup

1. Go to [Clerk Dashboard](https://clerk.com)
2. Switch to **Production** environment
3. Get your production keys:
   - Publishable Key: `pk_live_...`
   - Secret Key: `sk_live_...`
4. Update your domain settings in Clerk to include your Vercel domain

### Step 3: MongoDB Atlas Configuration

1. Whitelist Vercel's IP addresses (or use 0.0.0.0/0 for all IPs)
2. Ensure your MongoDB URI is correct and accessible from Vercel

### Step 4: Gemini API

1. Ensure your Gemini API key has proper quotas and billing setup
2. Verify the API key works in production environment

### Step 5: Deploy

```bash
# Build and deploy
npm run build
vercel --prod
```

## 🔧 Troubleshooting Common Issues

### 1. CORS Errors
- Ensure `next.config.mjs` has proper headers configuration
- Check that your domain is whitelisted in all services

### 2. Clerk Development Keys Warning
- Replace `pk_test_...` with `pk_live_...` in production
- Replace `sk_test_...` with `sk_live_...` in production

### 3. Database Connection Issues
- Verify MongoDB URI is correct
- Check IP whitelist in MongoDB Atlas
- Ensure database user has proper permissions

### 4. API Rate Limits
- Monitor Gemini API usage and quotas
- Implement proper error handling for rate limits

## 📝 Pre-deployment Checklist

- [ ] All environment variables are set in Vercel dashboard
- [ ] Using production Clerk keys (pk_live_, sk_live_)
- [ ] MongoDB Atlas is configured for production
- [ ] Gemini API key is valid and has quota
- [ ] Domain is configured in Clerk settings
- [ ] NEXT_PUBLIC_BASE_URL points to your Vercel domain
