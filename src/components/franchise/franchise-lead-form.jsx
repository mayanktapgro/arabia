"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function FranchiseLeadForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
  });

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const validateForm = () => {
    if (!form.name.trim()) return alert("Name is required");
    if (!/^[0-9]{10}$/.test(form.phone)) return alert("Enter valid phone");
    if (!form.location.trim()) return alert("City is required");
    return true;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    // ✅ WhatsApp Message
    const message = `Hi Arvia Wellness 👋,

    I'm interested in Franchise Opportunity.

    👤 Name: ${form.name}
    📞 Phone: ${form.phone}
    📍 City: ${form.location}

    Please share complete franchise details.`;

    const encoded = encodeURIComponent(message);

    const phoneNumber = "917678115756"; // your number

    const url = `https://wa.me/${phoneNumber}?text=${encoded}`;

    window.open(url, "_blank");

    // Optional reset
    setForm({
      name: "",
      phone: "",
      location: "",
    });
  };

  return (
    <Reveal
      id="franchise-form"
      className="mx-auto w-full max-w-[1440px] px-5 pb-24 sm:px-8 lg:px-14"
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading
            eyebrow="Apply Now"
            title="Share your details and our team will connect with you"
            description="Provide your basic information and our team will guide you through the next steps of your franchise journey."
            tone="light"
          />
        </div>

        <div className="bg-[linear-gradient(120deg,#000000,#1A1A1A,#C9A646,#000000)] rounded-[28px] p-6 sm:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="premium-input"
              placeholder="Name"
            />

            <input
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="premium-input"
              placeholder="Phone Number"
            />

            <input
              value={form.location}
              onChange={(e) => handleChange("location", e.target.value)}
              className="premium-input md:col-span-2"
              placeholder="City"
            />
          </div>

          <Button
            as="button"
            type="button"
            onClick={handleSubmit}
            className="premium-button mt-6 w-full hover:bg-[#B8962E]"
          >
            Request Franchise Details
          </Button>
        </div>
      </div>
    </Reveal>
  );
}





// import { Button } from "@/components/ui/button";
// import { Reveal } from "@/components/ui/reveal";
// import { SectionHeading } from "@/components/ui/section-heading";

// export function FranchiseLeadForm() {
//   return (
//     <Reveal id="franchise-form" className="mx-auto w-full max-w-[1440px] px-5 pb-24 sm:px-8 lg:px-14">
//       <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
//         <div>
//           <SectionHeading
//             eyebrow="Apply Now"
//             title="Share your details and our team will take the next step with you"
//             description="The form is simplified exactly as requested. It now keeps only the essentials needed to begin the franchise conversation."
//             tone="light"
//           />
//         </div>

//         <form className="bg-[linear-gradient(120deg,#000000,#1A1A1A,#C9A646,#000000)] rounded-[28px] p-6 sm:p-8">
//           <div className="grid gap-4 md:grid-cols-2">
//             <input className="premium-input" placeholder="Name" />
//             <input className="premium-input" placeholder="Phone Number" />
//             <input
//               name="location"
//               className="premium-input"
//               placeholder="City"
//             />
//             {/* <input
//               type="email"
//               className="premium-input"
//               placeholder="Email"
//             /> */}
//           </div>
//           <Button
//             as="button"
//             type="button"
//             className="premium-button mt-6 hover:bg-[#B8962E]"
//           >
//             Request Franchise Details
//           </Button>
//         </form>
//       </div>
//     </Reveal>
//   );
// }


