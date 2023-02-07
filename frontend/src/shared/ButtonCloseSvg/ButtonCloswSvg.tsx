import { ReactComponent as Close } from '../assets/icons/close.svg';

type ButtonCloseSvgProps = {
  close: () => void;
};

function ButtonCloseSvg({ close }: ButtonCloseSvgProps) {
  return (
    <button
      type="button"
      className="absolute right-1 top-1 w-5 h-5 hover:bg-zinc-400 hover:rounded-full cursor-pointer js-close"
      onClick={close}
    >
      <Close className="close-svg js-close" />
    </button>
  );
}

export default ButtonCloseSvg;
