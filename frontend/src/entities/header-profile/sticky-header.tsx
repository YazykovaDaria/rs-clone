import './style.css';
import { useTranslation } from 'react-i18next';

function scrollUp() {
  const top = Math.max(
    document.body.scrollTop,
    document.documentElement.scrollTop
  );
  const t = setTimeout(scrollUp, 20);
  if (top > 0) {
    window.scrollBy(0, (top + 100) / -10);
  } else clearTimeout(t);
  return false;
}

export default function StickyHeader({ name }: { name: string }) {
  const { t } = useTranslation();
  return (
    <div className="w-full fixed z-40 top-0 flex items-center h-[53px] px-4 justify-between cursor-pointer backdrop-blur-md bg-white/60">
      <div className="arrow-back min-w-[56px] min-h-[32px] flex items-start">
        <button
          onClick={() => window.history.back()}
          type="button"
          className="w-9 h-9 rounded-full flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </button>
      </div>
      <div
        onClick={scrollUp}
        onKeyUp={scrollUp}
        role="button"
        tabIndex={0}
        className="flex flex-col w-full items-start"
      >
        <h2 className="text-black font-bold text-xl">{name}</h2>
        <div className="text-gray-350">10 {t('profile.tweets')}</div>
      </div>
    </div>
  );
}
