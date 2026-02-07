"use client";
import { DitherShader } from "@/components/ui/dither-shader";

export default function HomeImageLoad() {
  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <div className="relative overflow-hidden rounded-2xl shadow-2xl dark:border-neutral-800">
        <DitherShader
          src="/rdasHome.jpg"
          gridSize={1}
          ditherMode="bayer"
          colorMode="grayscale"
          threshold={0.78}
          className="h-72 w-72 sm:h-80 sm:w-80"
        />
      </div>
    </div>
  );
}
