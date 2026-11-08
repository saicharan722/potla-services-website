import { X, MapPin, Phone, Mail } from 'lucide-react';
import { IMAGES } from '../assets/imageRegistry.js';

export default function RightInfoModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/45 transition-opacity"
        onClick={onClose}
      />

      {/* Slide-over Panel */}
      <div
        id="company-info-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Company information"
        className="animate-slide-in-right relative z-10 flex h-full w-full max-w-[420px] flex-col overflow-y-auto bg-white p-[17px] shadow-2xl sm:p-7"
      >
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close drawer"
            className="cursor-pointer rounded-full p-1.5 text-[#283a5e] transition-colors hover:bg-[#fbf9f8] hover:text-[#b6396c]"
          >
            <X className="h-7 w-7" />
          </button>
        </div>

        <div className="mt-2">
          <img
            src={IMAGES.logo}
            alt="Potla Group of Companies"
            className="mx-auto w-[220px] sm:w-[260px]"
          />

          <p className="mt-5 text-justify text-[16px] leading-[1.7] text-[#828893]">
            Potla Group has world class IT, Telecom and Consulting company with
            competence in providing strategic solutions to client’s needs &amp;
            which can spring up client business
          </p>

          <ul className="mt-8 mb-7 space-y-6">
            <li className="relative pl-12 text-[17px] text-[#828893]">
              <MapPin className="absolute top-1 left-0 h-8 w-8 text-[#5c1d36]" />
              <b className="block font-bold text-[#283a5e]">
                Manjeera Majestic Commercial, 815, KPHB Phase 3, Kukatpally,
                Hyderabad Telangana 500072
              </b>
            </li>

            <li className="relative pl-12 text-[17px] text-[#828893]">
              <Phone className="absolute top-1 left-0 h-8 w-8 text-[#5c1d36]" />
              <a
                href="tel:+914048569689"
                className="block font-bold text-[#283a5e] hover:text-[#b6396c]"
              >
                040 - 48569689
              </a>
              Give us a call
            </li>

            <li className="relative pl-12 text-[17px] text-[#828893]">
              <Mail className="absolute top-1 left-0 h-8 w-8 text-[#5c1d36]" />
              <a
                href="mailto:email@potlaservices.com"
                className="block font-bold text-[#283a5e] hover:text-[#b6396c]"
              >
                email@potlaservices.com
              </a>
              24/7 online support
            </li>
          </ul>

          <ul aria-label="Social media" className="flex items-center gap-1">
            <li>
              <a href="https://www.facebook.com/potlaservices/" target="_blank" rel="noreferrer" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#283a5e] text-[#283a5e] transition-colors hover:border-[#b6396c] hover:bg-[#b6396c] hover:text-white">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
            </li>
            <li>
              <a href="https://potlaservices.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#283a5e] text-[#283a5e] transition-colors hover:border-[#b6396c] hover:bg-[#b6396c] hover:text-white">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
              </a>
            </li>
            <li>
              <a href="https://potlaservices.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#283a5e] text-[#283a5e] transition-colors hover:border-[#b6396c] hover:bg-[#b6396c] hover:text-white">
                <svg className="h-4 w-4 stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/potla-group-of-companies-45722a166/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#283a5e] text-[#283a5e] transition-colors hover:border-[#b6396c] hover:bg-[#b6396c] hover:text-white">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
