# 🧠 DeepSeek Clone

<div align="center">

![DeepSeek Clone](https://img.shields.io/badge/DeepSeek-AI%20Clone-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=for-the-badge&logo=mongodb)
![Clerk](https://img.shields.io/badge/Clerk-Auth-purple?style=for-the-badge)

**A powerful AI-powered chatbot clone built with modern web technologies**

[🚀 Live Demo](#) • [📖 Documentation](#) • [🐛 Report Bug](https://github.com/GLRandula/deepseek-clone/issues) • [💡 Request Feature](https://github.com/GLRandula/deepseek-clone/issues)

</div>

---

## ✨ Features

- 🔐 **Secure Authentication** - Seamless login/signup with [Clerk.dev](https://clerk.dev)
- 🤖 **AI-Powered Chat** - Intelligent responses using [DeepSeek API](https://platform.deepseek.com)
- � **Persistent Chat History** - All conversations saved in [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- 🎨 **Modern UI/UX** - Beautiful, responsive design with Tailwind CSS
- 🚀 **Fast Performance** - Built with Next.js 15 and Turbopack
- 📱 **Mobile Responsive** - Works perfectly on all device sizes
- 🌙 **Dark Mode Support** - Easy on the eyes
- ⚡ **Real-time Updates** - Instant message rendering
- � **Data Privacy** - Secure data handling and storage
- 🌐 **Production Ready** - Optimized for deployment on Vercel

---

## 🛠️ Tech Stack

<table>
<tr>
<td>

**Frontend**
- [Next.js 15](https://nextjs.org) - React Framework
- [React 19](https://react.dev) - UI Library
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Geist Font](https://vercel.com/font) - Typography

</td>
<td>

**Backend**
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction) - Server Logic
- [Mongoose](https://mongoosejs.com) - MongoDB ODM
- [DeepSeek API](https://platform.deepseek.com) - AI Integration

</td>
</tr>
<tr>
<td>

**Database & Auth**
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Database
- [Clerk](https://clerk.dev) - Authentication

</td>
<td>

**DevOps & Tools**
- [Vercel](https://vercel.com) - Deployment
- [ESLint](https://eslint.org) - Code Linting
- [Turbopack](https://turbo.build/pack) - Fast Bundler

</td>
</tr>
</table>

---

## � Quick Start

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org) (v18 or higher)
- [npm](https://www.npmjs.com) or [yarn](https://yarnpkg.com)
- [Git](https://git-scm.com)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/GLRandula/deepseek-clone.git
   cd deepseek-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```bash
   # ===== CLERK AUTHENTICATION =====
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   # ===== MONGODB DATABASE =====
   MONGODB_URI=your_mongodb_atlas_connection_string

   # ===== DEEPSEEK API =====
   DEEPSEEK_API_KEY=your_deepseek_api_key

   # ===== APPLICATION URL =====
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the app!

---

## 🔧 Configuration Guide

### 🔐 Clerk Authentication Setup

1. Visit [Clerk.com](https://clerk.com) and create a free account
2. Create a new application
3. Copy your keys from the dashboard:
   - **Publishable Key**: `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - **Secret Key**: `CLERK_SECRET_KEY`

### 🍃 MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user
4. Whitelist your IP address
5. Get your connection string: `MONGODB_URI`

### 🤖 DeepSeek API Setup

1. Visit [DeepSeek Platform](https://platform.deepseek.com)
2. Create an account and verify your email
3. Navigate to API Keys section
4. Generate a new API key: `DEEPSEEK_API_KEY`

---

## 📁 Project Structure

```
deepseek-clone/
├── 📁 app/                     # Next.js App Router
│   ├── 📁 api/                 # API Routes
│   │   ├── 📁 chat/            # Chat-related endpoints
│   │   │   ├── ai/route.js     # AI response handler
│   │   │   ├── create/route.js # Create new chat
│   │   │   ├── delete/route.js # Delete chat
│   │   │   ├── get/route.js    # Get chat history
│   │   │   └── rename/route.js # Rename chat
│   │   └── 📁 clerk/           # Clerk webhooks
│   ├── favicon.ico             # App icon
│   ├── globals.css             # Global styles
│   ├── layout.js               # Root layout
│   ├── page.jsx                # Home page
│   └── prism.css              # Code syntax highlighting
├── 📁 assets/                  # Static assets & icons
├── 📁 components/              # Reusable React components
│   ├── ChatLabel.jsx          # Chat conversation labels
│   ├── Message.jsx            # Individual message component
│   ├── PromptBox.jsx          # Message input component
│   └── Sidebar.jsx            # Navigation sidebar
├── 📁 config/                 # Configuration files
│   └── db.js                  # MongoDB connection
├── 📁 context/                # React Context
│   └── AppContext.jsx         # Global app state
├── 📁 models/                 # Database models
│   ├── Chat.js                # Chat schema
│   └── User.js                # User schema
├── 📁 public/                 # Public static files
├── .env.local                 # Environment variables
├── .gitignore                 # Git ignore rules
├── eslint.config.mjs          # ESLint configuration
├── middleware.ts              # Next.js middleware
├── next.config.mjs            # Next.js configuration
├── package.json               # Dependencies & scripts
├── postcss.config.mjs         # PostCSS configuration
└── README.md                  # Project documentation
```

---

## 🎯 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint to check code quality |

---

## 🌟 Key Features Explained

### 💬 **Smart Chat Interface**
- Real-time message rendering with React
- Markdown support for formatted responses
- Code syntax highlighting with Prism.js
- Copy to clipboard functionality

### 🔐 **Secure Authentication**
- Social login (Google, GitHub, etc.)
- Email/password authentication
- Protected routes and API endpoints
- User session management

### 📚 **Chat Management**
- Create new conversations
- Rename existing chats
- Delete unwanted conversations
- Persistent chat history across sessions

### 🤖 **AI Integration**
- Powered by DeepSeek's advanced AI models
- Context-aware responses
- Fast response times
- Error handling and fallbacks

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/GLRandula/deepseek-clone)

1. **Connect your GitHub repository to Vercel**
2. **Add environment variables** in Vercel dashboard
3. **Deploy** - Vercel will automatically build and deploy your app

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `out` folder** to Netlify

### Environment Variables for Production

Make sure to set these environment variables in your deployment platform:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_...
CLERK_SECRET_KEY=sk_live_...
MONGODB_URI=mongodb+srv://...
DEEPSEEK_API_KEY=sk-...
NEXT_PUBLIC_BASE_URL=https://your-domain.com
```

---

## 🛠️ Development

### Code Structure

- **Components**: Reusable UI components in `/components`
- **API Routes**: Backend logic in `/app/api`
- **Database**: MongoDB models in `/models`
- **Styling**: Tailwind CSS classes throughout components

### Adding New Features

1. **Create new components** in `/components`
2. **Add API routes** in `/app/api`
3. **Update database models** if needed
4. **Test locally** before deploying

### Environment Setup for Development

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your API keys

# Start development server
npm run dev
```

---

## 📚 Learn More

### Next.js Resources
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Next.js GitHub](https://github.com/vercel/next.js) - Source code and contributions

### Integration Guides
- [Clerk Authentication Docs](https://clerk.com/docs)
- [MongoDB Atlas Setup](https://docs.atlas.mongodb.com/getting-started/)
- [DeepSeek API Documentation](https://platform.deepseek.com/api-docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation if needed

---

## 📝 License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- [DeepSeek](https://deepseek.com) for the powerful AI API
- [Clerk](https://clerk.dev) for seamless authentication
- [Vercel](https://vercel.com) for excellent hosting platform
- [MongoDB](https://mongodb.com) for reliable database services
- The open-source community for amazing tools and libraries

---

## 📞 Support

- 📧 **Email**: [your-email@example.com](mailto:your-email@example.com)
- 🐛 **Issues**: [GitHub Issues](https://github.com/GLRandula/deepseek-clone/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/GLRandula/deepseek-clone/discussions)

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

Made with ❤️ by [Your Name](https://github.com/GLRandula)

</div>
