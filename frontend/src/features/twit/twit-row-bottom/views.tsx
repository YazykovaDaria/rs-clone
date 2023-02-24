import { useCallback, useEffect, useRef, useState } from 'react';
import { useAddViewMutation } from '../../../entities/API/TwitApi';
import './style.css';

export default function Views({
  views,
  id,
  viewed,
}: {
  views: number;
  id: number;
  viewed: boolean;
}) {
  const [addView] = useAddViewMutation();
  const targetRef = useRef<HTMLDivElement>(null);

  // код ниже выполнится когда элемент появится в зоне видимости окна браузера но не чаще чем раз в пол секунды
  const handleAddView = useCallback(async () => {
    try {
      if (!viewed) {
        await addView({ tweetId: id }).unwrap();
      }
    } catch (err: unknown) {
      throw new Error(String(err));
    }
  }, [viewed, addView, id]);
  const [lastCallTime, setLastCallTime] = useState<number>(0);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && Date.now() - lastCallTime > 500) {
          setLastCallTime(Date.now());
          handleAddView();
        }
      });
    });
    const target = targetRef.current;
    if (target) {
      observer.observe(target);
    }
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [handleAddView, lastCallTime]);

  return (
    <div
      ref={targetRef}
      title="Views"
      className="twit__views text-gray-350 flex flex-nowrap items-center transition-colors duration-200 md:mr-10"
    >
      <div className="w-9 h-9 rounded-full flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 stroke-gray-350 transition-colors duration-200 fill-none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
          />
        </svg>
      </div>
      <span className="p-2">{views}</span>
    </div>
  );
}
