"use client";

import { useState } from "react";
import { FranchiseModal } from "./FranchiseModal";

export function OpenFranchiseModal({ children }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div onClick={() => setOpen(true)} className="cursor-pointer">
                {children}
            </div>

            <FranchiseModal isOpen={open} onClose={() => setOpen(false)} />
        </>
    );
}