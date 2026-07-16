# 🌌 Profoliox — AI-Powered Portfolio Generator

Profoliox is a premium, state-of-the-art **AI-Powered Portfolio Generator** that enables developers, designers, and creators to design, build, and launch production-ready portfolio websites in minutes. Users can generate tailored portfolio layouts, content, and themes instantly using natural language prompts or by uploading their resume/CV.

---

## 📸 Screen Preview & Interface

### 🏠 Landing Page
![Profoliox Home](public/Home.png)
*A sleek, modern dark-themed landing page featuring rich typography, blurred background radial glows, and interactive hover states.*

### 🔐 Authentication (Login)
![Profoliox Login](public/Login.png)
*Secure email/password and single-click Google OAuth login flow with a futuristic glassmorphic design.*

### 📊 Dashboard & Workspace
![Profoliox Dashboard Workspace](public/Dash.png)
*A central workspace displaying generated templates, project statistics, and access to the AI portfolio assistant.*

![Profoliox Dashboard Customizer](public/DashTwo.png)
*The workspace sidebar and customizer allowing real-time adjustments to branding, custom themes, and templates.*

### 🎨 Live Portfolio Preview
![Profoliox Portfolio Demo](public/PortTwo.jpeg)
*An example of a responsive, high-performance portfolio generated automatically by the Profoliox AI.*

---

## ⚡ Key Features

- **🤖 Resume Parsing & AI Generation:** Upload a resume or provide a text prompt to instantly generate structured sections (About, Projects, Experience, Skills).
- **🎨 Custom Styling & Theme Engine:** Customize primary colors, accent colors, and font families in real time to match your personal brand.
- **🔐 Secure Authentication:** Seamless sign-up and login with JSON Web Token (JWT) credentials and Google OAuth integration.
- **💳 Payment Integration:** Standard/Premium tier upgrades using Razorpay payment gateway checkout.
- **🌐 Workspace & Community Hub:** Toggle between your personal workspace projects and public community portfolio templates.
- **📱 Responsive & Animated UI:** Built with Tailwind CSS and Framer Motion for smooth micro-animations, transitions, and native mobile optimization.

---

## 🛠️ Technology Stack

Profoliox is built with modern, industry-standard frontend technologies:

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Runtime:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & [HeroUI](https://heroui.com/) (formerly NextUI)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/) & [React Redux](https://react-redux.js.org/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **Notifications:** [React Hot Toast](https://react-hot-toast.com/)

---

## 📂 Project Structure

Here is an overview of the key frontend directories under `app/`:

```bash
profoliox/
├── app/
│   ├── About/                # About page component
│   ├── Components/           # Shared global components (Hero, Footer, Features, Testimonials)
│   ├── Contact/              # Contact form & information
│   ├── Dash/                 # Main user dashboard content & workspaces
│   ├── Guide/                # Onboarding guide documentation
│   ├── Help/                 # Help and customer support center
│   ├── Login/                # Login authentication page
│   ├── Navbar/               # Main navigation header
│   ├── Onboarding/           # AI setup & prompt wizard (Step 1)
│   ├── OnboardingTwo/        # AI setup & prompt wizard (Step 2)
│   ├── Pricing/              # General pricing plans
│   ├── Settings/             # Profile & account configuration
│   ├── Sidebar/              # Dashboard side navigation
│   ├── SignUp/               # SignUp registration page
│   └── layout.tsx            # Global application entry layout & providers
├── public/                   # Static assets, SVG/PNG illustrations, & logos
└── package.json              # Script definitions & npm packages
```

---

## 🚀 Getting Started

Follow these steps to run the frontend client locally on your development machine:

### 1. Prerequisites
Ensure you have [Node.js (v18+)](https://nodejs.org/) and npm installed.

### 2. Clone the Repository
```bash
git clone https://github.com/MohdAyaanSiddiqui/Profoliox.git
cd Profoliox/profoliox
```

### 3. Install Dependencies
Install all package dependencies via npm:
```bash
npm install
```

### 4. Setup Environment Variables
Create a `.env.local` file in the root of the `profoliox` directory and specify the following keys:
```env
NEXT_PUBLIC_BASE_URL=http://localhost:5000
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-google-oauth-client-id
NEXT_PUBLIC_RAZORPAY_KEY_ID=your-razorpay-test-key-id
```

### 5. Start the Development Server
Launch the local development environment:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## ⚙️ Available Scripts

In the project directory, you can run:

- `npm run dev` - Runs the app in development mode.
- `npm run build` - Builds the application for production deployment.
- `npm run start` - Starts the Next.js production server.
- `npm run lint` - Lints the codebase for code quality and style using ESLint.
