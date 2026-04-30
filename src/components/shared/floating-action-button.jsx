import { Button } from "@/components/ui/button";
import { OpenContactButton } from "@/components/contact/open-contact-button";
import { OpenFranchiseModal } from "../franchise/OpenFranchiseModal";

export function FloatingActionButton({ href, label, mode = "link" }) {
  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-8 sm:right-8">
      {mode === "modal" ? (
        <OpenContactButton className="gold-ring">{label}</OpenContactButton>
      ) : (
        <OpenFranchiseModal>
          <button className="inline-flex items-center justify-center rounded-full px-5 py-3 cursor-pointer text-sm font-semibold transition duration-200 bg-[var(--gold)] text-[#ffffff] shadow-[0_14px_40px_rgba(212,175,55,0.22)] hover:-translate-y-0.5 hover:brightness-105">
            {label}
          </button>
        </OpenFranchiseModal>
      )}
    </div>
  );
}
