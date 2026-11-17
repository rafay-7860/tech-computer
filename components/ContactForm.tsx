"use client";

import { Button } from "@/components/Button";
import {
  DEVICE_TYPE_OPTIONS,
  contactSchema,
  type ContactFormData,
} from "@/lib/validation";
import { buildWhatsAppUrl, formatContactMessage } from "@/lib/whatsapp";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";

const fieldClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-silver/40 focus:border-cyan/50 focus:ring-1 focus:ring-cyan/40";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ready">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      deviceType: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 500));
    window.open(
      buildWhatsAppUrl(formatContactMessage(data)),
      "_blank",
      "noopener,noreferrer"
    );
    setStatus("ready");
    reset();
    window.setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="glass rounded-3xl p-6 sm:p-8"
      noValidate
    >
      <div className="space-y-5">
        <label className="block space-y-2">
          <span className="text-xs font-semibold tracking-[0.14em] text-silver">
            Name
          </span>
          <input
            {...register("name")}
            className={fieldClass}
            placeholder="Your name"
            autoComplete="name"
          />
          {errors.name ? (
            <span className="block text-xs text-red-400" role="alert">
              {errors.name.message}
            </span>
          ) : null}
        </label>

        <label className="block space-y-2">
          <span className="text-xs font-semibold tracking-[0.14em] text-silver">
            Phone
          </span>
          <input
            {...register("phone")}
            className={fieldClass}
            placeholder="+971 ..."
            autoComplete="tel"
          />
          {errors.phone ? (
            <span className="block text-xs text-red-400" role="alert">
              {errors.phone.message}
            </span>
          ) : null}
        </label>

        <label className="block space-y-2">
          <span className="text-xs font-semibold tracking-[0.14em] text-silver">
            Email (optional)
          </span>
          <input
            {...register("email")}
            className={fieldClass}
            placeholder="Optional email"
            autoComplete="email"
            type="email"
          />
          {errors.email ? (
            <span className="block text-xs text-red-400" role="alert">
              {errors.email.message}
            </span>
          ) : null}
        </label>

        <label className="block space-y-2">
          <span className="text-xs font-semibold tracking-[0.14em] text-silver">
            Device Type
          </span>
          <select {...register("deviceType")} className={fieldClass} defaultValue="">
            <option value="" disabled>
              Select device type
            </option>
            {DEVICE_TYPE_OPTIONS.map((option) => (
              <option key={option} value={option} className="bg-midnight">
                {option}
              </option>
            ))}
          </select>
          {errors.deviceType ? (
            <span className="block text-xs text-red-400" role="alert">
              {errors.deviceType.message}
            </span>
          ) : null}
        </label>

        <label className="block space-y-2">
          <span className="text-xs font-semibold tracking-[0.14em] text-silver">
            Message
          </span>
          <textarea
            {...register("message")}
            className={`${fieldClass} min-h-28 resize-y`}
            placeholder="How can we help?"
          />
          {errors.message ? (
            <span className="block text-xs text-red-400" role="alert">
              {errors.message.message}
            </span>
          ) : null}
        </label>

        <Button type="submit" className="w-full" disabled={status === "loading"}>
          {status === "loading" ? "Opening WhatsApp..." : "Send via WhatsApp"}
        </Button>

        {status === "ready" ? (
          <p className="text-sm text-cyan" role="status">
            WhatsApp opened with your message. Please send it to reach Tech971.
          </p>
        ) : (
          <p className="text-xs text-silver/60">
            This form prepares a WhatsApp message. Tech971 will respond directly.
          </p>
        )}
      </div>
    </motion.form>
  );
}
