export default function Home() {
  return (
    <main className="min-h-screen dotted-background bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* Hero Section - Spans 2 columns */}
          <div className="md:col-span-2 bg-card p-8 rounded-xl border shadow-sm">
            <h1 className="text-4xl font-bold mb-4">Welcome to My Site</h1>
            <p className="text-muted-foreground">
              A beautiful landing page with a bento-style grid layout.
            </p>
          </div>

          {/* Stats Card */}
          <div className="bg-primary/5 p-8 rounded-xl border shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">Statistics</h2>
            <div className="text-4xl font-bold">100+</div>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>

          {/* Feature Card */}
          <div className="bg-card p-8 rounded-xl border shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Feature One</h3>
            <p className="text-muted-foreground">
              Describe your amazing feature here.
            </p>
          </div>

          {/* Image Card */}
          <div className="bg-accent p-8 rounded-xl border shadow-sm">
            <div className="h-full flex items-center justify-center">
              <span className="text-2xl">🎨</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-primary text-primary-foreground p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Get Started</h3>
            <p className="mb-4">Join us today and start creating!</p>
            <button className="bg-background text-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
