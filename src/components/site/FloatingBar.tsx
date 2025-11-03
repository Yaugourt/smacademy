"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function FloatingBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/90 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-screen-sm items-center justify-between gap-2 px-4 py-3">
        <Button asChild size="sm" variant="outline" className="rounded-full">
          <a href="tel:+33982774444"><Phone className="mr-1 h-4 w-4" /> Appeler</a>
        </Button>
        <Button asChild size="sm" variant="cta" className="rounded-full">
          <Link href="#contact">Être rappelé</Link>
        </Button>
      </div>
    </div>
  );
}


