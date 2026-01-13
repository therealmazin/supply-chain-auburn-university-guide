import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="relative flex flex-col justify-center items-center text-center flex-1 px-4">
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(128,128,128,0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(128,128,128,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      {/* Fade overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-fd-background" />

      <Image
        src="/auburn_logo.png"
        alt="Auburn University"
        width={80}
        height={80}
        className="mb-6"
      />

      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        AI for Supply Chain
      </h1>
      <p className="text-xl md:text-2xl text-fd-muted-foreground mb-2">
        Learn how to use AI tools for real-world supply chain problems
      </p>
      <p className="text-md text-fd-muted-foreground mb-8 max-w-2xl">
        A hands-on guide for Auburn University students to analyze data, build predictive models, and generate business insights using Claude Code.
      </p>
      <Link
        href="/docs"
        className="px-6 py-3 bg-fd-primary text-fd-primary-foreground rounded-lg font-medium text-lg hover:opacity-90 transition-opacity"
      >
        Get Started
      </Link>

      <p className="absolute bottom-8 text-sm text-fd-muted-foreground">
        Created by <a href="https://www.linkedin.com/in/mazinsalim1/" target="_blank" rel="noopener noreferrer" className="underline hover:text-fd-foreground">Mazin Salim</a>
      </p>
    </div>
  );
}
