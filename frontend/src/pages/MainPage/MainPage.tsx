import TwitCreator from '../../features/twit-creator/Twit-creator';
import Twit from '../../features/twit/twit';

function Main() {
  return (
    <>
      <h1 className="font-bold text-xl w-full py-2 pl-4 border-b">Home</h1>
      <TwitCreator />
      <Twit />
      <Twit />
      <Twit />
    </>
  );
}

export default Main;
