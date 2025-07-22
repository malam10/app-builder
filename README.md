# AI Website Builder

*Build & Deploy AI-Powered Full-Stack Apps*

This project is a AI Website Builder, enabling users to generate full-stack applications from simple natural language prompts using programmable AI agents. The builder automates code generation, deployment, and live previews with a modern AI-first development toolchain.

---

## 🚀 About

This app lets users quickly create websites and apps by describing what they want, powered by multiple AI models and orchestrated with background jobs and sandboxed execution environments.

It uses cutting-edge technologies such as Next.js, React, Prisma, Inngest, and Tailwind CSS to provide a seamless, scalable, and developer-friendly experience.

---

## 🔑 Key Features (Completed So Far)

* User authentication with Clerk
* Background job orchestration using Inngest
* AI-powered code and component generation from prompts
* Live project previews with URL sharing
* Database integration with Prisma + Neon
* Real-time messaging and notifications UI
* Basic project dashboard and header components
* AI model integration for code generation
* Credit system with usage tracking
* Modular React UI with Tailwind and Shadcn/ui

*(More features are in progress covering advanced AI agent tools, billing, deployment, and theme customization.)*

---

## 📚 Tech Stack

* **Framework:** Next.js 15 + React 19
* **Styling:** Tailwind CSS v4 + Shadcn/ui
* **API:** tRPC for full-stack type safety
* **Background Jobs:** Inngest
* **Authentication & Billing:** Clerk
* **AI Models:** Supports OpenAI, Anthropic, Grok
* **Database:** Prisma ORM with Neon (PostgreSQL)
* **Execution:** E2B cloud sandboxes and Docker templates

---

## 🛠️ Setup Instructions

1. Clone the repo

   ```bash
   git clone https://github.com/your-username/ai-website-builder.git
   cd ai-website-builder
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Configure environment variables
   Create `.env` file with keys for:

   * Choose OpenAI, Anthropic, or Grok API key
   * Clerk client ID and secret
   * Neon database URL
   * Inngest API keys

4. Run database migrations

   ```bash
   npx prisma migrate deploy
   ```

5. Start development server

   ```bash
   npm run dev
   ```

6. Access app at `http://localhost:3000`

---

## 🚧 Current Progress

* Steps 1 to 10 completed
* Core app functionality including auth, messaging, projects UI, AI generation, and background jobs are functional
* Remaining steps focus on sandbox deployment, billing integration, advanced agent tools, theming, and final bug fixes

---

## 📺 Video Tutorial & Resources

Inspired by Code With Antonio:
[Build and Deploy a SaaS AI Website Builder]([https://www.youtube.com/watch?v=example](https://www.youtube.com/watch?v=xs8mWnbMcmc&ab_channel=CodeWithAntonio))
