"use client";

import { WhatsAppButton } from "@/components/WhatsAppButton";
import type { DeviceCategory } from "@/data/devices";
import { deviceInquiryMessage } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import Image from "next/image";

type DeviceCardProps = {
  device: DeviceCategory;
  index: number;
};

export function DeviceCard({ device, index }: DeviceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-midnight"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={device.image}
          alt={device.imageAlt}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/50 to-transparent" />
      </div>
      <div className="relative -mt-16 space-y-3 p-5">
        <h3 className="text-lg font-semibold text-white">{device.title}</h3>
        <p className="text-sm text-silver/85">{device.description}</p>
        <WhatsAppButton
          message={deviceInquiryMessage(device.title)}
          label="Repair Inquiry"
          className="w-full"
        />
      </div>
    </motion.article>
  );
}
