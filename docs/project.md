

### **Project 1: Interactive Product Showcase**

**Document Version:** 1.1
**Date:** June 22, 2025
**Author:** Gemini
**Tech Baseline:** Next.js 15, React 19, Latest Animation Libraries

-----

### **Part 1: Product Requirements Document (PRD)**

#### **1. Introduction & Vision**

**1.1. Project Name:** "Aura" - The Smart Air Purifier Showcase

**1.2. Vision Statement:** To create a visually stunning, single-page marketing website for a fictional smart air purifier named "Aura." The experience will captivate potential customers through fluid, scroll-driven animations and interactive elements that highlight the product's key features and sleek design. The primary goal is to create a "wow" factor that demonstrates cutting-edge front-end development skills and a keen eye for modern UX/UI.

**1.3. Target Audience:**

  * **Primary:** Recruiters, hiring managers, and tech leads at design-forward tech companies and creative agencies.
  * **Secondary:** Design-savvy consumers interested in smart home technology.

**1.4. Key Goals & Success Metrics:**

  * **Goal 1: Showcase Technical Proficiency:** Demonstrate mastery of Next.js 15, React 19's new features (like the `<Asset>` tag), modern animation libraries, and responsive design.
      * **Metric:** The project is fully functional, bug-free, and performs smoothly across modern browsers and devices, achieving a Core Web Vitals score in the "Good" threshold.
  * **Goal 2: Create a Visually Impressive Experience:** Leverage the latest UX/UI trends to create an eye-catching and memorable portfolio piece.
      * **Metric:** The project receives positive feedback on its design and user experience. Animations are exceptionally smooth (consistently at or near native screen refresh rates).
  * **Goal 3: Deliver a Compelling Product Narrative:** Effectively communicate the value proposition of the fictional "Aura" air purifier.
      * **Metric:** A user can easily understand the product's main features within the first 30 seconds of interaction.

#### **2. Research & UX/UI Plan**

**2.1. Research Plan:**

  * **Inspiration Analysis:**
      * Review high-end product websites (Apple's latest product pages, Humane, Rabbit R1, Dyson). Note the trend towards cinematic, full-screen video and less text.
      * Analyze Awwwards and FWA for "Site of the Day" winners, focusing on scroll-based storytelling, WebGL integrations, and generative UI elements.
      * Search for "Next.js 15 examples," "React 19 useAction examples," and "Valtio vs Zustand for minimal state" to ground technical choices in current best practices.
  * **UX/UI Trend Integration (Mid-2025 Focus):**
      * **Cinematic Hero:** Instead of a static image, the hero will feature a short, looping, high-quality video background (using the new React `<Asset>` tag for preloading).
      * **Physicality & Tactile Interfaces:** UI elements will have a tangible feel, using subtle gradients, shadows, and physics-based animations to mimic real-world objects.
      * **Generative AI Accents:** A small, tasteful section could feature AI-generated art or patterns that subtly shift, representing the "clean air" effect.
      * **Bento Grid 2.0:** Evolve the bento grid with hover-to-expand cells or embedded micro-visualizations.
      * **Minimalist Typography:** Use a highly legible, variable font (like Inter or Hubot Sans) to allow for fine-tuned weight adjustments and optimal performance.

**2.2. User Stories:**

  * As a visitor, I want to be immediately impressed by a cinematic hero video that sets a premium tone.
  * As a visitor, I want to scroll down and have the product's story unfold through a sequence of seamlessly connected, animated scenes.
  * As a visitor, I want to interact with a 3D model of the product by scrubbing through an animation, not just rotating it.
  * As a visitor, I want to see key features demonstrated through visual effects rather than just reading about them.
  * As a visitor, I want the experience to feel instantaneous, with no jank or layout shifts, on any of my devices.

#### **3. Functional & Non-Functional Requirements**

**3.1. Functional Requirements (Features):**

  * **FR1: Cinematic Hero Section:** Full-screen, auto-playing, muted video background. A clean, bold headline fades in over the video. An animated scroll-down indicator is present.
  * **FR2: Scroll-Driven Animated Story:** A sequence of pinned sections that transition fluidly:
      * **Scene A - Air Quality Visualization:** As the user scrolls, the product image stays locked while a particle animation around it transforms from "polluted" (murky, chaotic) to "clean" (clear, flowing).
      * **Scene B - Exploded View Scrub:** The user's scroll progress scrubs through a pre-rendered 3D animation of the product disassembling and reassembling, with labels for key components appearing as they are revealed.
      * **Scene C - Smart Connectivity:** An animation shows the product emitting a pulse that transforms into a simplified UI on a smartphone graphic. This will utilize a form and leverage React 19's `useActionState` for a seamless "Join Waitlist" submission without a page reload.
  * **FR3: Bento Grid Featurette:** A dynamic grid showcasing specs. On hover, each grid cell could reveal more detail or a subtle graphical visualization.
  * **FR4: Responsive & Adaptive Design:** The experience must be flawless on mobile, possibly using a simplified animation sequence for performance.

**3.2. Non-Functional Requirements:**

  * **NFR1: Performance:** Target a Google Lighthouse performance score of 95+. Utilize Next.js 15's compiler optimizations and React 19's `<Asset>` tag for preloading critical assets (video, 3D model, fonts).
  * **NFR2: Browser Compatibility:** Ensure consistency on the latest versions of Chrome, Firefox, Safari, and Edge.
  * **NFR3: Accessibility (A11y):** Implement `prefers-reduced-motion` to disable or simplify animations. Ensure all content is screen-reader accessible and interactions are keyboard-navigable.

-----

### **Part 2: Software Architecture Document (SAD)**

#### **1. System Overview & Architecture**

**1.1. Architectural Style:** Single-Page Application (SPA) built with a component-based architecture using the **Next.js 15 App Router**. The architecture will heavily leverage **React Server Components (RSCs)** for static content sections to minimize the client-side bundle size.

**1.2. Technology Stack (Mid-2025 Cutting-Edge):**

  * **Framework:** **Next.js 15** (leveraging its advanced compilation, partial pre-rendering, and caching capabilities).
  * **Language:** **TypeScript**.
  * **Core Library:** **React 19** (utilizing new features like Actions, `useActionState`, `<Asset>`, and `useOptimistic` for the form).
  * **Styling:** **Tailwind CSS** with the `tailwindcss-animate` plugin for simple CSS-based animations.
  * **Animation:** **GSAP (GreenSock Animation Platform)** with the **ScrollTrigger** plugin. This is the definitive choice for the required complex, timeline-based, and pinned scroll animations, offering superior control and performance over declarative libraries for this specific use case.
  * **3D Rendering:** **React Three Fiber** and **Drei**. These remain the industry standard for integrating Three.js into React. The "scrubbable" animation will be created in a 3D tool like Blender, exported as a `.glb` with animations, and controlled via GSAP in the code.
  * **State Management:** **Valtio**. A minimal, proxy-based state management library. It's an excellent choice for sharing small pieces of state between components (like the 3D animation progress) without the boilerplate of larger libraries.
  * **Deployment:** **Vercel**, the native platform for Next.js.

#### **2. Component Breakdown**

```
/app
├── layout.tsx                // Root layout, font loading via <Asset>, Tailwind styles
├── page.tsx                  // Main page component, Server Component by default
└── /components
    ├── /client
    │   ├── Experience.tsx        // Client-side orchestrator for all interactive scenes
    │   └── Scene3D.tsx           // Manages the R3F canvas and GSAP/3D model interaction
    └── /server
    │   ├── FeatureText.tsx       // Reusable server component for static text content
    │   └── SpecGridServer.tsx    // The Bento Grid, rendered on the server
    └── /ui
        ├── WaitlistForm.tsx      // Client component with React 19 Actions
        └── AnimatedIndicator.tsx // UI accent components
```

**2.1. Key Component Logic & Architecture Decisions:**

  * **`page.tsx` (Server Component):** This component will be responsible for the static layout. It will fetch any static data and render server components like text blocks and the footer. It will import the main client-side `<Experience />` component. This isolates server-rendered content from the interactive client bundle.
  * **`Experience.tsx` (Client Component):** This is the heart of the interactive application. It will be marked with `"use client";`. It will contain all the GSAP and ScrollTrigger logic, managing the timeline for the entire scroll-based story.
  * **`Scene3D.tsx` (Client Component):** This component will encapsulate the `react-three-fiber` canvas and its logic. It will load the `.glb` model using Drei's helpers and expose functions that GSAP can call to scrub the animation timeline.
  * **`WaitlistForm.tsx` (Client Component):** A showcase for React 19 Actions. The form submission logic will be defined in a server-side function and passed directly to the `<form>` element's `action` prop, with `useActionState` handling the pending/error UI states without `useEffect`.

#### **3. Data Management**

  * **Content:** All static text and configuration will be co-located with their respective Server Components or defined in a central `config.ts` file.
  * **Assets:**
      * **Critical Assets (`<Asset>`):** The hero video, the primary 3D model (`.glb`), and the variable font file will be preloaded in `layout.tsx` using `<link rel="preload">` or the new React 19 `<Asset>` tag for optimal loading performance.
      * **Other Assets:** Images will be handled by the Next.js `<Image>` component, placed in the `/public` directory.

#### **4. Development Plan & Timeline (Estimated: 5-7 Hours)**

  * **Hour 1: Setup & Asset Preparation:**
      * Initialize Next.js 15 project: `npx create-next-app@latest`.
      * Install dependencies: `gsap`, `three`, `@react-three/fiber`, `@react-three/drei`, `valtio`, `tailwindcss`.
      * Source and prepare assets: Find a suitable short video clip, a free `.glb` model, and choose a variable font.
  * **Hour 2: Static Structure (RSC First):**
      * Build the entire page structure using only Server Components.
      * Style all static sections with Tailwind CSS, ensuring perfect responsiveness.
  * **Hour 3: GSAP & ScrollTrigger Setup:**
      * Integrate GSAP and the ScrollTrigger plugin.
      * Create the main pinned scene structure within the `<Experience />` client component.
  * **Hour 4-5: Core Animation & 3D Integration:**
      * Implement the particle animation effect for the first scene.
      * Set up the `Scene3D` component, load the model, and connect GSAP's scroll timeline to the model's animation mixer to enable scrubbing.
  * **Hour 6: Actions & Final Touches:**
      * Build the `WaitlistForm` using React 19 Actions.
      * Implement the Bento Grid and any remaining micro-interactions.
  * **Hour 7: Optimization & Deployment:**
      * Implement `prefers-reduced-motion`.
      * Run Lighthouse and optimize based on its report. Pay close attention to the asset loading strategy.
      * Deploy to Vercel and perform final cross-device testing.