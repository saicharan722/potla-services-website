import { Mail } from 'lucide-react';

export default function HeaderBar({ onNavigate }) {
  return (
    <header className="bg-[#b6396c] py-2.5 text-white">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
          {/* Left Email */}
          <ul className="flex items-center">
            <li>
              <a
                href="mailto:email@potlaservices.com"
                className="inline-flex items-center gap-2 text-[14px] font-bold text-white transition-all hover:-translate-y-0.5 hover:text-white/75"
              >
                <Mail className="h-4 w-4" />
                <span>email@potlaservices.com</span>
              </a>
            </li>
          </ul>

          {/* Right Links */}
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[14px] font-semibold md:justify-end">
            <li>
              <button
                type="button"
                onClick={() => onNavigate('blog')}
                className="cursor-pointer text-white transition-colors hover:text-white/70"
              >
                Blog
              </button>
            </li>
            <li className="relative pl-4 before:absolute before:top-1 before:left-0 before:h-3.5 before:w-[2px] before:bg-white/30">
              <button
                type="button"
                onClick={() => onNavigate('testimonials')}
                className="cursor-pointer text-white transition-colors hover:text-white/70"
              >
                Testimonials
              </button>
            </li>
            <li className="relative pl-4 text-center before:absolute before:top-1 before:left-0 before:h-3.5 before:w-[2px] before:bg-white/30 sm:text-left">
              <span>815, Manjeera Majestic Commercial - KPHB, Hyderabad-500072</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
