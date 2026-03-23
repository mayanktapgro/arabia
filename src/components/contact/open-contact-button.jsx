"use client";

import { Button } from "@/components/ui/button";
import { useContactModal } from "@/components/contact/contact-modal-provider";

export function OpenContactButton({
  children,
  variant = "primary",
  className = "",
}) {
  const { openModal } = useContactModal();

  return (
    <Button
      as="button"
      type="button"
      onClick={openModal}
      variant={variant}
      className={className}
    >
      {children}
    </Button>
  );
}
