"use client";

import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { servicesData } from "@/data/servicesData";

export function SlideFour() {
  const featuredServices = servicesData.slice(0, 10);
  const autoplay = useRef(
    Autoplay({
      delay: 3200,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef] = useEmblaCarousel(
    { align: "start", loop: true },
    [autoplay.current]
  );

  return (
    <div className="grid min-h-[calc(100svh-5rem)] items-center gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-14">
      <motion.div
        initial={{ opacity: 0, x: -28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <p className="text-sm uppercase tracking-[0.32em] text-[#EAC27A]">
          Services Showcase
        </p>
        <h2 className="font-display mt-4 text-4xl leading-tight text-white sm:text-5xl">
          Explore our premium treatment collection
        </h2>
        {/* <p className="mt-4 text-base leading-7 text-white/78">
          Ten high-demand aesthetic services are presented in a motion-led carousel with luxurious dark cards and warm gold detail.
        </p> */}
      </motion.div>

      {/* <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-5 flex">
          {featuredServices.map((service, index) => (
            <div
              key={service.slug}
              className="min-w-0 flex-[0_0_82%] pl-5 sm:flex-[0_0_46%] xl:flex-[0_0_30%]"
            >
              <motion.a
                href={`/services/${service.slug}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.03 }}
                whileHover={{ scale: 1.04, y: -4 }}
                className="block h-full overflow-hidden rounded-[26px] border border-white/16 bg-white/12 p-3 transition duration-300 hover:shadow-[0_18px_50px_rgba(212,175,55,0.2)] backdrop-blur-md"
              >
                <div
                  className="h-44 rounded-[20px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="p-3">
                  <h3 className="font-display text-2xl text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-white/74">
                    {service.shortDescription}
                  </p>
                </div>
              </motion.a>
            </div>
          ))}
        </div>
      </div> */}

      <div className="overflow-hidden rounded-[32px] border border-white/18 bg-white/10 p-3 shadow-[0_24px_60px_rgba(15,23,42,0.25)] backdrop-blur-md">
        <video
          src="/arviaData/tour.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-[300px] w-full rounded-[24px] object-cover sm:h-[380px] lg:h-[430px]"
        />

      </div>

    </div>
  );
}
