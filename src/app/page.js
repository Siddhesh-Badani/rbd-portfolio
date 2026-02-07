"use client";

import HomeImageLoad from "@/components/homeImage";


export default function Home() {
  const mounted = true;

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[4rem_4rem]" />

      {/* Gradient orb - subtle and mysterious */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />

      {/* Dither shader demo */}
      <HomeImageLoad />

      {/* Main content */}
      <div
        className={`relative z-10 text-center px-6 transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-6">
          Rinku Das
        </h1>

        {/* Subtitle */}
        <p className="text-sm text-gray-400 tracking-[0.3em] mb-12 font-light">
          <span className="font-bold">Director</span> of Nrtiyajyoti Dance Academy USA 
          <br></br> 
          <span className="font-bold">Empaneled Artist</span> of ICCR, Ministry of Culture, Govt. of India
        </p>

        {/* Coming Soon */}
        <div className="inline-block">
          <div className="text-xs md:text-sm text-gray-500 tracking-[0.2em] uppercase mb-2">
            Full Portfolio Coming Soon
          </div>
          <div className="h-px w-full bg-linear-to-r from-transparent via-gray-700 to-transparent" />
        </div>

        {/* Contact/social links */}
        <div className="mt-16 flex gap-8 justify-center text-gray-600 text-sm">
          <a
            href="mailto:rbdas1@asu.edu"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Email
          </a>
          <a
            href="https://www.instagram.com/rinkubdas123/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/rinku.b.das/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Facebook
          </a>
        </div>
      </div>

      {/* Bottom corner accent */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-linear-to-tl from-white/3 to-transparent" />
    </div>
  );
}
