# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, accessibility-first design, and performance optimizations.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Dark/Light Mode**: Complete theme system with smooth transitions and user preference detection
- **Profile Photo**: Animated profile image with gradient border in hero section
- **Accessibility**: WCAG 2.1 compliant with semantic HTML and proper ARIA labels
- **Performance**: Optimized images, code splitting, lazy loading, and intersection observer animations
- **Animations**: Smooth Framer Motion animations with scroll reveals and reduced motion support
- **Modern Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Contact Form**: Ready for Netlify Forms or Formspree integration

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion with intersection observer
- **Theme**: next-themes for dark/light mode
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Form Handling**: Built-in validation with toast notifications
- **Image Optimization**: Next.js Image component with blur placeholders

## 📦 Installation

1. Clone the repository:
\`\`\`bash
git clone <your-repo-url>
cd portfolio-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Netlify

1. Build the project:
\`\`\`bash
npm run build
npm run export
\`\`\`

2. Deploy the `out` folder to Netlify
3. For form handling, ensure Netlify Forms is enabled

### Other Platforms

The project exports as static files and can be deployed to any static hosting service.

## 📝 Customization

### Personal Information

Update the following files with your information:
- `components/hero.tsx` - Name, title, description, and profile photo
- `components/about.tsx` - Personal story, skills, and timeline
- `components/projects.tsx` - Your projects data
- `components/contact.tsx` - Contact information
- `app/layout.tsx` - SEO metadata

### Profile Photo

Replace `public/profile-photo.jpg` with your own photo. The component will automatically handle the styling and animations.

### Styling

The design system is defined in `app/globals.css`:
- Colors: Update CSS custom properties for both light and dark themes
- Typography: Modify font imports in `app/layout.tsx`
- Animations: Customize keyframes and transitions

### Theme System

The portfolio includes a complete dark/light mode system:
- **Theme Provider**: Configured in `app/layout.tsx`
- **Theme Toggle**: Available in navigation for both desktop and mobile
- **Default Theme**: Set to dark mode with system preference detection
- **Theme-aware Components**: All components support both themes

### Contact Form

The contact form supports multiple integration options:

**Netlify Forms** (Default):
- Form is already configured with `data-netlify="true"`
- No additional setup required when deployed to Netlify

**Formspree**:
\`\`\`tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
\`\`\`

**Custom API**:
Update the `handleSubmit` function in `components/contact.tsx`

## 🎨 Design System

The portfolio uses a carefully crafted design system:

- **Colors**: Sophisticated dark/light theme with semantic color tokens
- **Typography**: Inter for body text, JetBrains Mono for code
- **Spacing**: Consistent 8px grid system
- **Components**: Reusable UI components with theme variants
- **Animations**: Scroll-triggered reveals and smooth micro-interactions

## ⚡ Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js automatic image optimization with blur placeholders
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Images and components load on demand with intersection observer
- **Reduced Motion**: Respects user's motion preferences

## 🔧 Development

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

\`\`\`
├── app/                 # Next.js app directory
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── theme-provider.tsx  # Theme system provider
│   ├── theme-toggle.tsx    # Dark/light mode toggle
│   ├── reveal-on-scroll.tsx # Scroll animation component
│   ├── optimized-image.tsx  # Performance-optimized image component
│   └── ...             # Feature components
├── hooks/              # Custom React hooks
│   ├── use-intersection-observer.ts # Scroll reveal hook
│   └── use-toast.ts    # Toast notification hook
├── lib/                # Utility functions
└── public/             # Static assets
    └── profile-photo.jpg # Your profile photo
\`\`\`

## 🎯 Key Components

### RevealOnScroll
Intersection observer-based animation component for smooth scroll reveals:
\`\`\`tsx
<RevealOnScroll direction="up" delay={0.2}>
  <YourComponent />
</RevealOnScroll>
\`\`\`

### OptimizedImage
Performance-optimized image component with blur placeholders:
\`\`\`tsx
<OptimizedImage
  src="/your-image.jpg"
  alt="Description"
  width={400}
  height={300}
  priority={false}
/>
\`\`\`

### ThemeToggle
Dark/light mode toggle with smooth transitions:
\`\`\`tsx
<ThemeToggle />
\`\`\`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion
