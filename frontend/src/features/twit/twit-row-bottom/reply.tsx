import './style.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SameModal from '../../../shared/IU/modal/SameModal';
import TwitCreator from '../../twit-creator/Twit-creator';
import ButtonCloseSvg from '../../../shared/IU/ButtonCloseSvg/ButtonCloswSvg';
import Avatar from '../../../shared/types/avatar';
import UserImg from '../user-img';
import UserName from '../twit-row-top/user-name';
import UserAlias from '../twit-row-top/user-alias';
import TwitDate from '../twit-row-top/twit-date';
import TwitContent from '../twit-content';
import TwitImages from '../twitImages';

export default function Reply({
  replies,
  id,
  parentId,
  thisName,
  thisUsername,
  thisAvatar,
  thisCreatedAt,
  text,
  likes,
  retweets,
  views,
  images,
}: {
  replies: number;
  id: number;
  parentId: number | null;
  thisName: string;
  thisUsername: string | undefined;
  thisAvatar: Avatar;
  thisCreatedAt: string;
  text: string;
  likes: number;
  retweets: number;
  views: number;
  images: {
    type: string;
    name: string;
    data: string;
  }[];
}) {
  const { t } = useTranslation();
  const [isOpenModal, setModal] = useState(false);
  const isReply = true;
  const thisId = parentId || id;

  return (
    <>
      <div
        onClick={() => setModal(true)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            setModal(true);
          }
        }}
        role="button"
        tabIndex={0}
        title="Reply"
        className="twit__reply text-gray-350 flex flex-nowrap items-center transition-colors duration-200 sm:mr-5 md:mr-10"
      >
        <div className="w-9 h-9 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-5 h-5 stroke-none transition-colors duration-200 fill-gray-350"
          >
            <g>
              <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z" />
            </g>
          </svg>
        </div>
        <span className="p-2">{replies}</span>
      </div>
      <SameModal isOpen={isOpenModal} onClose={() => setModal(false)}>
        <div className="relative z-40 outline-none md:w-[50vw] w-[70vw] dark:bg-slate-300">
          <ButtonCloseSvg close={() => setModal(false)} />

          <div className="flex items-center nowrap">
            <UserImg thisUsername={thisUsername} thisAvatar={thisAvatar} />
            <UserName
              thisName={thisName}
              thisUsername={thisUsername || 'username'}
            />
            <UserAlias thisUsername={thisUsername || 'username'} />
            <TwitDate thisCreatedAt={thisCreatedAt} />
          </div>
          <div className="p-2">
            <TwitContent text={text} />
            {images.length > 0 && <TwitImages images={images} />}
          </div>
          <div className="flex items-center nowrap">
            <span className="p-3 text-gray-350 dark:text-slate-500">
              <span className="mr-2 text-black font-bold">{retweets}</span>
              {t('Retweets')}
            </span>
            <span className="p-3 text-gray-350 dark:text-slate-500">
              <span className="mr-2 text-black font-bold">{likes}</span>
              {t('Likes')}
            </span>
            <span className="p-3 text-gray-350 dark:text-slate-500">
              <span className="mr-2 text-black font-bold">{views}</span>
              {t('Views')}
            </span>
          </div>
          <TwitCreator
            close={() => setModal(false)}
            isReply={isReply}
            id={thisId}
          />
        </div>
      </SameModal>
    </>
  );
}
