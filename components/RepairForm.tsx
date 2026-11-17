"use client";

import { Button } from "@/components/Button";
import {
  CONTACT_METHOD_OPTIONS,
  DEVICE_TYPE_OPTIONS,
  REPAIR_CATEGORY_OPTIONS,
  repairInquirySchema,
  type RepairInquiryFormData,
} from "@/lib/validation";
import {
  buildWhatsAppUrl,
  formatRepairInquiryMessage,
} from "@/lib/whatsapp";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";

const fieldClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-silver/40 focus:border-cyan/50 focus:ring-1 focus:ring-cyan/40";

export function RepairForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ready">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RepairInquiryFormData>({
    resolver: zodResolver(repairInquirySchema),
    defaultValues: {
      fullName: "",
      phone: "",
      deviceType: "",
      deviceBrand: "",
      deviceModel: "",
      repairCategory: "",
      problem: "",
      preferredContact: "",
    },
  });

  const onSubmit = async (data: RepairInquiryFormData) => {
    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 600));
    const message = formatRepairInquiryMessage(data);
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    setStatus("ready");
    reset();
    window.setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="glass glow-blue grid gap-5 rounded-3xl p-6 sm:p-8 md:grid-cols-2"
      noValidate
    >
      <Field
        label="Full Name"
        error={errors.fullName?.message}
        className="md:col-span-1"
      >
        <input
          {...register("fullName")}
          className={fieldClass}
          placeholder="Your full name"
          autoComplete="name"
        />
      </Field>

      <Field label="Phone Number" error={errors.phone?.message}>
        <input
          {...register("phone")}
          className={fieldClass}
          placeholder="+971 ..."
          autoComplete="tel"
        />
      </Field>

      <Field label="Device Type" error={errors.deviceType?.message}>
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
      </Field>

      <Field label="Device Brand" error={errors.deviceBrand?.message}>
        <input
          {...register("deviceBrand")}
          className={fieldClass}
          placeholder="e.g. Apple, Dell, Samsung"
        />
      </Field>

      <Field label="Device Model" error={errors.deviceModel?.message}>
        <input
          {...register("deviceModel")}
          className={fieldClass}
          placeholder="e.g. MacBook Pro, Galaxy S24"
        />
      </Field>

      <Field label="Repair Category" error={errors.repairCategory?.message}>
        <select
          {...register("repairCategory")}
          className={fieldClass}
          defaultValue=""
        >
          <option value="" disabled>
            Select repair category
          </option>
          {REPAIR_CATEGORY_OPTIONS.map((option) => (
            <option key={option} value={option} className="bg-midnight">
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field
        label="Preferred Contact Method"
        error={errors.preferredContact?.message}
        className="md:col-span-2"
      >
        <select
          {...register("preferredContact")}
          className={fieldClass}
          defaultValue=""
        >
          <option value="" disabled>
            Select contact method
          </option>
          {CONTACT_METHOD_OPTIONS.map((option) => (
            <option key={option} value={option} className="bg-midnight">
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field
        label="Describe the Problem"
        error={errors.problem?.message}
        className="md:col-span-2"
      >
        <textarea
          {...register("problem")}
          className={`${fieldClass} min-h-32 resize-y`}
          placeholder="Tell us what is happening with your device..."
        />
      </Field>

      <div className="md:col-span-2 space-y-3">
        <Button type="submit" className="w-full sm:w-auto" disabled={status === "loading"}>
          {status === "loading" ? "Preparing WhatsApp Inquiry..." : "Send Repair Inquiry via WhatsApp"}
        </Button>
        {status === "ready" ? (
          <p className="text-sm text-cyan" role="status">
            Your inquiry message is ready in WhatsApp. Please review and send it to Tech971.
          </p>
        ) : (
          <p className="text-xs text-silver/60">
            Submitting opens WhatsApp with your inquiry details. No booking is confirmed until Tech971 responds.
          </p>
        )}
      </div>
    </motion.form>
  );
}

function Field({
  label,
  error,
  children,
  className = "",
}: {
  label: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`block space-y-2 ${className}`}>
      <span className="text-xs font-semibold tracking-[0.14em] text-silver">
        {label}
      </span>
      {children}
      {error ? (
        <span className="block text-xs text-red-400" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}
