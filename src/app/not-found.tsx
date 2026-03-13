import Link from "next/link";
import { Heart, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="relative">
        <span className="text-[10rem] font-extrabold leading-none text-primary/5 sm:text-[14rem]">
          404
        </span>
        <div className="absolute inset-0 flex items-center justify-center">
          <Heart className="h-20 w-20 text-primary/20" fill="currentColor" />
        </div>
      </div>
      <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        Page Not Found
      </h1>
      <p className="mx-auto mt-3 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        But God&apos;s love is always easy to find.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
        <Link
          href="/events"
          className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
        >
          <ArrowLeft className="h-4 w-4" />
          View Events
        </Link>
      </div>
    </section>
  );
}
