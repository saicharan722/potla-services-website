import { ExternalLink } from 'lucide-react';
import { IMAGES } from '../assets/imageRegistry.js';

export default function PageTitleBanner({
  title,
  breadcrumb,
  logoSrc,
  externalLinkHref,
  externalLinkLabel,
  compact = false,
  onNavigate,
}) {
  return (
    <div
      className={`relative overflow-hidden bg-[#b6396c] text-center text-white ${
        compact ? 'py-8 sm:py-10' : 'py-20'
      }`}
    >
      {/* Subtle geometric pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{ backgroundImage: `url(${IMAGES.bgPattern2})` }}
      />

      <div className="relative z-10 mx-auto max-w-[1140px] px-4">
        {logoSrc ? (
          <div className="flex justify-center">
            <img
              src={logoSrc}
              alt={title}
              className={
                compact
                  ? 'max-h-36 w-auto object-contain sm:max-h-44'
                  : 'max-h-24 w-auto rounded bg-white/95 px-6 py-3 shadow-md'
              }
            />
          </div>
        ) : (
          <>
            <h3 className="text-[32px] font-extrabold text-white sm:text-[38px]">
              {title}
            </h3>

            {breadcrumb && (
              <ul className="mt-3 flex items-center justify-center gap-2.5 text-[16px] font-semibold text-white">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('home')}
                    className="cursor-pointer text-white transition-colors hover:text-white/75"
                  >
                    Home
                  </button>
                </li>
                <li className="h-1.5 w-1.5 rounded-full bg-white" />
                <li className="text-white/90">{breadcrumb}</li>
              </ul>
            )}
            {externalLinkHref && externalLinkLabel && (
              <a
                href={externalLinkHref}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/10 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/20"
              >
                {externalLinkLabel}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
}
