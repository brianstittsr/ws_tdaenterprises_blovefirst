"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface RotatingHeroSlide {
  id: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

interface RotatingHeroProps {
  slides: RotatingHeroSlide[];
  interval?: number;
  heightClass?: string;
  overlayClass?: string;
  className?: string;
}

export function RotatingHero({
  slides,
  interval = 6000,
  heightClass = "min-h-[600px] md:min-h-[720px]",
  overlayClass = "bg-black/60",
  className,
}: RotatingHeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [slides.length, interval, nextSlide]);

  const slide = slides[currentIndex];

  if (!slide) return null;

  return (
    <section
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        heightClass,
        className
      )}
      aria-label="Hero carousel"
    >
      {/* Background images */}
      {slides.map((s, index) => (
        <div
          key={s.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            index === currentIndex ? "opacity-100 z-0" : "opacity-0 z-[-1]"
          )}
          aria-hidden={index !== currentIndex}
        >
          <Image
            src={s.image}
            alt={s.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className={cn("absolute inset-0 z-10", overlayClass)} />

      {/* Content */}
      <div className="container relative z-20 px-4 py-20 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl mb-6 drop-shadow-lg">
            {slide.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl drop-shadow">
            {slide.description}
          </p>
          <div className="flex flex-wrap gap-4">
            {slide.primaryCta && (
              <Button size="lg" asChild>
                <Link href={slide.primaryCta.href}>{slide.primaryCta.label}</Link>
              </Button>
            )}
            {slide.secondaryCta && (
              <Button size="lg" variant="outline" className="border-white/40 bg-white/10 hover:bg-white/20 text-white" asChild>
                <Link href={slide.secondaryCta.href}>{slide.secondaryCta.label}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur-sm transition hover:bg-black/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur-sm transition hover:bg-black/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 flex gap-2">
            {slides.map((s, index) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "h-2 w-2 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
                  index === currentIndex
                    ? "w-8 bg-white"
                    : "bg-white/50 hover:bg-white/80"
                )}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentIndex}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
