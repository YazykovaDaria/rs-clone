import { ReactComponent as Rs } from '../assets/icons/rs.svg';

export default function Footer() {
  return (
    <footer>
      <div className="text-gray-350 transition-all duration-200 flex justify-between w-full p-3 container items-center border dark:text-white dark:border-slate-600">
        <div className="flex flex-col">
          <a
            href="https://github.com/yazykovadaria"
            className="hover:underline"
          >
            YazykovaDaria
          </a>
          <a href="https://github.com/vadim001230" className="hover:underline">
            Vadim001230
          </a>
          <a
            href="https://github.com/viktorsolovyev"
            className="hover:underline"
          >
            viktorsolovyev
          </a>
        </div>
        <div className="font-bold text-black dark:text-white">2023</div>
        <a href="https://rs.school/js/" className="">
          <Rs className="fill-gray-500 hover:fill-cyan-800" />
        </a>
      </div>
    </footer>
  );
}
