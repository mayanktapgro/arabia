"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { OpenContactButton } from "../contact/open-contact-button";

export function SlideOne({ isActive }) {
  const videoRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  // ▶️ Initial autoplay (muted, only once)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;

    if (!hasPlayed) {
      video.play().catch(() => { });
    }

    const handleEnded = () => {
      setHasPlayed(true);
      video.pause();
      video.currentTime = video.duration; // stay at last frame
      video.muted = true;
    };

    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, [hasPlayed]);

  // 🎯 Control based on slide active
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive && !hasPlayed) {
      video.play().catch(() => { });
    } else {
      video.pause();
    }
  }, [isActive, hasPlayed]);

  // 🔊 Enable sound manually
  const enableSound = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    video.play().catch(() => { });
  };

  return (
    <section className="relative h-[100svh] w-full overflow-hidden">

      {/* VIDEO */}
      <video
        ref={videoRef}
        src="/arviaData/arvia-about.mp4"
        autoPlay
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* SOUND BUTTON */}
      <button
        onClick={enableSound}
        className="absolute bottom-26 left-6 z-20 cursor-pointer bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur"
      >
        🔊 Enable Sound
      </button>

      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-[var(--english-blue)]">
            Welcome to Luxury Wellness Clinic
          </p>

          <h1 className="font-display mt-6 text-4xl text-white sm:text-5xl lg:text-6xl">
            Luxury Aesthetic &{" "}
            <span className="bg-gradient-to-r from-[var(--english-blue)] to-[var(--english-blue)] bg-clip-text text-transparent">
              Wellness Experience
            </span>
          </h1>

          <p className="mt-6 text-[var(--english-blue)]">
            Where advanced dermatology meets refined care.
          </p>

          <div className="mt-8 flex justify-center">
            <OpenContactButton className="bg-[var(--english-blue)] hover:bg-[#B8962E]">
              Book Consultation
            </OpenContactButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}





// "use client";

// import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { OpenContactButton } from "../contact/open-contact-button";

// export function SlideOne({ isActive }) {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     // Always try to autoplay muted first (this works)
//     video.muted = true;
//     video.play().catch(() => { });

//     // Function to unmute after interaction
//     const enableSound = () => {
//       video.muted = false;
//       video.play().catch(() => { });
//       window.removeEventListener("click", enableSound);
//       window.removeEventListener("scroll", enableSound);
//     };

//     // Listen for user interaction
//     window.addEventListener("click", enableSound);
//     window.addEventListener("scroll", enableSound);

//   }, []);

//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     if (isActive) {
//       video.play().catch(() => { });
//     } else {
//       video.pause();
//       video.muted = true;
//     }
//   }, [isActive]);

//   return (
//     <section className="relative h-[100svh] w-full overflow-hidden">
//       {/* VIDEO */}
//       <video
//         ref={videoRef}
//         src="/arviaData/arvia-about.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 h-full w-full object-cover"
//       />

//       <button
//         onClick={() => {
//           const video = videoRef.current;
//           if (!video) return;
//           video.muted = false;
//           video.play();
//         }}
//         className="absolute bottom-26 left-6 z-20 cursor-pointer bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur"
//       >
//         🔊 Enable Sound
//       </button>

//       {/* OVERLAY */}
//       {/* <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,0,0,0.75),rgba(19,40,85,0.6),rgba(0,0,0,0.7))]" />
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,194,122,0.25),transparent_40%)]" /> */}

//       {/* CONTENT */}
//       <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl"
//         >
//           <p className="text-sm uppercase tracking-[0.4em] text-[var(--english-blue)]">
//             Welcome to Luxury Wellness Clinic
//           </p>

//           <h1 className="font-display mt-6 text-4xl text-white sm:text-5xl lg:text-6xl">
//             Luxury Aesthetic &{" "}
//             <span className="bg-gradient-to-r from-[var(--english-blue)] to-[var(--english-blue)] bg-clip-text text-transparent">
//               Wellness Experience
//             </span>
//           </h1>

//           <p className="mt-6 text-[var(--english-blue)]">
//             Where advanced dermatology meets refined care.
//           </p>

//           <div className="mt-8 flex justify-center">
//             <OpenContactButton className="bg-[var(--english-blue)] hover:bg-[#B8962E]">
//               Book Consultation
//             </OpenContactButton>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



// "use client";

// import { motion } from "framer-motion";
// import { OpenContactButton } from "../contact/open-contact-button";

// export function SlideOne() {
//   return (
//     <section className="relative h-[100svh] w-full overflow-hidden">

//       {/* ✅ BACKGROUND VIDEO */}
//       <video
//         src="/arviaData/hero-intro.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 h-full w-full object-cover"
//       />

//       {/* ✅ DARK + GOLD OVERLAY */}
//       <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,0,0,0.75),rgba(19,40,85,0.6),rgba(0,0,0,0.7))]" />

//       {/* GOLD GLOW */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,194,122,0.25),transparent_40%)]" />

//       {/* ✅ CONTENT */}
//       <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl"
//         >
//           <p className="text-sm uppercase tracking-[0.4em] text-[#EAC27A]">
//             Luxury Wellness Clinic
//           </p>

//           <h1 className="font-display mt-6 text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
//             Luxury Aesthetic &{" "}
//             <span className="bg-gradient-to-r from-[#EAC27A] to-[#C9A646] bg-clip-text text-transparent">
//               Wellness Experience
//             </span>
//           </h1>

//           <p className="mt-6 text-base leading-7 text-white/80 sm:text-lg">
//             Where advanced dermatology meets refined care in a serene,
//             hospitality-led clinic environment.
//           </p>

//           <div className="mt-8 flex justify-center">
//             <OpenContactButton className="bg-[#C9A646] hover:bg-[#B8962E]">
//               Book Consultation
//             </OpenContactButton>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { OpenContactButton } from "../contact/open-contact-button";

// export function SlideOne() {
//   return (
//     <div className="relative grid min-h-[calc(100svh-5rem)] items-center gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-14">
//       <motion.div
//         initial={{ opacity: 0, y: 28 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
//         className="relative z-10 max-w-3xl"
//       >
//         <p className="text-sm uppercase tracking-[0.34em] text-[#EAC27A]">
//           Luxury Wellness Clinic
//         </p>
//         <h1 className="font-display mt-5 text-4xl leading-[1.03] text-white sm:text-5xl lg:text-6xl">
//           Luxury Aesthetic &{" "}
//           <span className="text-[#EAC27A]">Wellness Experience</span>
//         </h1>
//         <p className="mt-5 max-w-2xl text-base leading-7 text-white/78 sm:text-lg">
//           Where advanced dermatology meets refined care in a serene,
//           hospitality-led clinic environment.
//         </p>
//         <div className="mt-7 flex flex-wrap gap-3">
//           <OpenContactButton > Book Consulation </OpenContactButton>
//           {/* <Button href="#contact">Book Consultation</Button> */}
//           {/* <Button href="/services" variant="secondary" className="text-white">
//             Explore Treatments
//           </Button> */}
//         </div>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, x: 36 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.65, delay: 0.06 }}
//         className="relative z-10"
//       >
//         <div className="overflow-hidden rounded-[32px] border border-white/18 bg-white/10 p-3 shadow-[0_24px_60px_rgba(15,23,42,0.25)] backdrop-blur-md">
//           <video
//             src="/arviaData/intro.mp4"
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="h-[300px] w-full rounded-[24px] object-cover sm:h-[380px] lg:h-[430px]"
//           />

//           {/* <Image
//             src="/arviaData/reception2.jpeg"
//             alt="Luxury clinic reception"
//             width={1200}
//             height={900}
//             priority
//             className="h-[300px] w-full rounded-[24px] object-cover sm:h-[380px] lg:h-[430px]"
//           /> */}
//         </div>
//       </motion.div>
//     </div>
//   );
// }
