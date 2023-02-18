/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './style.css';
import { useState, useRef } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import useAutosizeTextArea from './lib/autoHeight';
import MAX_TWIT_MSG_LEN from '../../shared/constants/MAX_TWIT_MSG_LEN';
import PreviewImage from '../../shared/IU/PreviewImg';
import { ReactComponent as Picture } from '../../shared/assets/icons/picture.svg';
import { OptionalCloseProps } from '../../shared/types/props';
import { useAddTweetMutation } from '../../entities/API/TwitApi';

// баг при открытии твита в модалке на главной странице - картинка не добавляется

export default function TwitCreator({ close }: OptionalCloseProps) {
  const [messageLength, setMessageLength] = useState(MAX_TWIT_MSG_LEN);
  const { t } = useTranslation();

  const [value, setValue] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, value);

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;
    const newLength = MAX_TWIT_MSG_LEN - val.length;
    setMessageLength(newLength);

    setValue(val);
  };

  const [addTweet] = useAddTweetMutation();

  const f = useFormik({
    initialValues: {
      text: '',
      img: null,
    },
    onSubmit: async (values, { resetForm }) => {
      if (values) {
        try {
          await addTweet({ text: values.text }).unwrap();
          values.text = '';
          values.img = null;
          setMessageLength(MAX_TWIT_MSG_LEN);
        } catch (err) {
          throw new Error(err);
        }
      }
      resetForm();
      if (close) {
        close();
      }
    },
  });

  return (
    <div className="flex flex-row flex-nowrap w-full p-4 border-b pb-10">
      <div className="mr-3 h-12 relative cursor-pointer flex items-center justify-center">
        <img
          src="https://randomuser.me/api/portraits/lego/3.jpg"
          alt="user"
          className="rounded-full object-contain w-12"
        />
        <div className="absolute w-12 hover:bg-black/10 top-0 bottom-0 right-0 left-0 rounded-full transition-colors duration-200" />
      </div>
      <div className="w-full">
        <form onSubmit={f.handleSubmit} className="w-full">
          <textarea
            className="w-full focus:border-b-2 outline-none block p-2 md:text-xl overflow-hidden resize-none max-h-[600px]"
            id="review-text"
            name="text"
            onChange={(e) => {
              handleChange(e);
              f.handleChange(e);
            }}
            placeholder={t('whatHappening') || "What's happening?"}
            ref={textAreaRef}
            maxLength={MAX_TWIT_MSG_LEN}
            rows={1}
            value={f.values.text}
          />

          {f.values.img && (
            <div className="relative">
              <button
                type="button"
                onClick={() => f.setFieldValue('img', null)}
                className="absolute right-1 top-1 w-5 h-5 hover:bg-zinc-400 hover:rounded-full"
              >
                ❌
              </button>
              <PreviewImage file={f.values.img} />
            </div>
          )}

          <input
            id="img"
            name="img"
            onChange={(e) => {
              const target = e.currentTarget as HTMLInputElement;
              if (target.files) {
                f.setFieldValue('img', target.files[0]);
              }
            }}
            type="file"
            accept=".jpg, .jpeg, .png"
            className="invisible w-[1px] h-[1px]"
          />

          <div className="flex justify-between items-center mt-2">
            <label
              htmlFor="img"
              className="w-8 h-8 flex items-center justify-center"
            >
              <Picture className="w-6 h-6 cursor-pointer hover:stroke-cyan-500 stroke-sky-400 hover:stroke-2" />
            </label>
            <div
              className="mr-4 rounded-full border-2 border-sky-400 w-8 h-8 flex justify-center items-center"
              style={{
                borderColor: messageLength > 15 ? 'rgb(56 189 248)' : 'red',
              }}
            >
              {messageLength}
            </div>
          </div>

          <button
            type="submit"
            className="twit-create__btn md:mr-5 rounded-full text-white cursor-pointer font-bold hover:bg-cyan-500 bg-sky-400 py-1 px-4 transition-colors duration-200 disabled:opacity-50 mt-5"
            disabled={!f.dirty || f.isSubmitting}
          >
            {t('tweet')}
          </button>
        </form>
      </div>
    </div>
  );
}
