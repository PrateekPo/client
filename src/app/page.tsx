import Link from "next/link";
import { Dumbbell, Zap, TrendingUp, Music, Camera, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />

        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse delay-1000" />

        <div className="relative container mx-auto px-6 py-24 md:py-32">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Logo/Brand */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
              <Dumbbell className="w-6 h-6 text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                FITVORA
              </span>
            </div>

            {/* Hero Title */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl">
              <span className="bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
                AI-Powered Fitness
              </span>
              <br />
              <span className="text-foreground">Tracking Revolution</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
              Your all-in-one fitness companion for gym and home workouts.
              Track progress, get AI-driven suggestions, and crush your goals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/register"
                className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,65,0.5)]"
              >
                <span className="relative z-10">Get Started Free</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              <Link
                href="/login"
                className="px-8 py-4 border-2 border-primary/30 text-foreground rounded-full font-semibold text-lg hover:bg-primary/10 hover:border-primary transition-all"
              >
                Sign In
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 w-full max-w-2xl">
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Exercises</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-secondary">AI</div>
                <div className="text-sm text-muted-foreground">Powered</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">PWA</div>
                <div className="text-sm text-muted-foreground">Offline Ready</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 border-t border-border/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            {[
              {
                icon: Zap,
                title: "AI Workout Plans",
                description: "Personalized workout recommendations based on your goals and progress",
                color: "primary"
              },
              {
                icon: Music,
                title: "Integrated Music Player",
                description: "Stay motivated with built-in music controls during your workouts",
                color: "secondary"
              },
              {
                icon: TrendingUp,
                title: "Progress Tracking",
                description: "Visualize your journey with detailed charts and analytics",
                color: "primary"
              },
              {
                icon: Camera,
                title: "Photo Progress",
                description: "Upload and track your physique transformation over time",
                color: "secondary"
              },
              {
                icon: FileText,
                title: "PDF Reports",
                description: "Export your monthly progress as professional PDF reports",
                color: "primary"
              },
              {
                icon: Dumbbell,
                title: "Video Guidance",
                description: "Watch exercise demonstrations to perfect your form",
                color: "secondary"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(0,255,65,0.1)]"
              >
                <div className={`inline-flex p-3 rounded-xl bg-${feature.color}/10 mb-4`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-border/50">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© 2025 Fitvora. Built with Next.js, NestJS, and AI.</p>
        </div>
      </footer>
    </div>
  );
}

