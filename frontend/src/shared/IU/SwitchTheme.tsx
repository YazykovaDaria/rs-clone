import { useEffect, useState } from 'react';
import { ReactComponent as Light } from '../assets/icons/light.svg';
import { ReactComponent as Dark } from '../assets/icons/dark.svg';

const SwitchTheme = () => {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  return (
    <div className="flex gap-2">
      <Light
        className="fill-amber-600 stroke-amber-600 hover:fill-amber-400 cursor-pointer hover:stroke-amber-400"
        onClick={() => setTheme('light')}
      />

      <Dark
        className="hover:fill-cyan-300 cursor-pointer fill-cyan-700"
        onClick={() => setTheme('dark')}
      />
    </div>
  );
};

export default SwitchTheme;
