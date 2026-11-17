"use client";

import { Button } from "@/components/Button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import type { ServiceItem } from "@/data/services";
import { serviceInquiryMessage } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import Image from "next/image";

type ServiceCardProps = {
  service: ServiceItem;
  index: number;
};

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group glass glow-blue overflow-hidden rounded-3xl"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/20 to-transparent" />
      </div>

      <div className="space-y-4 p-6">
        <h3 className="text-xl font-semibold text-white">{service.title}</h3>
        <p className="text-sm leading-relaxed text-silver/85">
          {service.description}
        </p>
        <ul className="space-y-2">
          {service.points.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm text-silver">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
              {point}
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <Button href="#repair-inquiry" variant="secondary" className="flex-1">
            Learn More
          </Button>
          <WhatsAppButton
            message={serviceInquiryMessage(service.title)}
            label="Contact for Repair"
            className="flex-1"
          />
        </div>
      </div>
    </motion.article>
  );
}
