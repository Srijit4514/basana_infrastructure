import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="section-kicker">Page not found</p>
      <h1 className="section-title">This page is not available.</h1>
      <p className="mt-4 max-w-xl text-slate-600">
        The link may have changed, or the page may be added in a future update.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Return home</Link>
      </Button>
    </section>
  );
}
