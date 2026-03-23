import { Button } from "@/components/ui/button";
import { OpenContactButton } from "@/components/contact/open-contact-button";

export function FloatingActionButton({ href, label, mode = "link" }) {
  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-8 sm:right-8">
      {mode === "modal" ? (
        <OpenContactButton className="gold-ring">{label}</OpenContactButton>
      ) : (
        <Button href={href} className="gold-ring">
          {label}
        </Button>
      )}
    </div>
  );
}
