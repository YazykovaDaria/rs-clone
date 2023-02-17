import { ReactComponent as Loader } from '../assets/icons/loader.svg';

const Preloader = () => {
  return (
    <div className="bg-slate-300 fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50 opacity-50">
      <Loader />
    </div>
  );
};

export default Preloader;
