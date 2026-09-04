"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface ServiceHeroProps {
  title: string;
  tagline?: string;
  description?: string;
  image: string;
  imageAlt: string;
  children?: React.ReactNode;
  className?: string;
}

export function ServiceHero({
  title,
  tagline,
  description,
  image,
  imageAlt,
  children,
  className,
}: ServiceHeroProps) {
  return (
    <section
      className={cn(
        "relative flex items-center overflow-hidden py-24 md:py-32",
        className
      )}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      <div className="container relative z-10 px-4 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-4 drop-shadow-lg">
            {title}
          </h1>
          {tagline && (
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium mb-4">
              {tagline}
            </p>
          )}
          {description && (
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl drop-shadow">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}

