/* eslint-disable no-param-reassign */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './style.css';
import { useState, useRef } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import useAutosizeTextArea from './lib/autoHeight';
import { MAX_TWIT_MSG_LEN } from '../../shared/constants/common';
import { ReactComponent as Picture } from '../../shared/assets/icons/picture.svg';
import PreviewImage from '../../shared/IU/PreviewImg';
import {
  useAddTweetMutation,
  useAddReplyMutation,
} from '../../entities/API/TwitApi';
import { useAuth } from '../../entities/user/Auth/authContext';
import { validationTwit } from './lib/validation';
import getFormData from './lib/getFormData';
import Preloader from '../../shared/IU/Preloader';
import { OptionalCloseProps } from '../../shared/types/props';

export default function TwitCreator({
  close,
  isReply,
  id,
}: {
  close?: OptionalCloseProps;
  isReply?: true;
  id?: number;
}) {
  const [messageLength, setMessageLength] = useState(MAX_TWIT_MSG_LEN);
  const { t } = useTranslation();
  const [imgError, setImgError] = useState('');

  const auth = useAuth();
  const src = auth?.user.avatar;

  const [value, setValue] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, value);

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;
    const newLength = MAX_TWIT_MSG_LEN - val.length;
    setMessageLength(newLength);

    setValue(val);
  };
  const [addTweet, { isLoading }] = useAddTweetMutation();
  const [addReply] = useAddReplyMutation();
  const f = useFormik({
    initialValues: {
      text: '',
      img: [],
      parentId: '',
    },
    validationSchema: validationTwit,
    onSubmit: async (values, { resetForm }) => {
      const data = getFormData(values);
      try {
        if (isReply) {
          values.parentId = id?.toString() || '';
          const dataReply = getFormData(values);
          await addReply(dataReply).unwrap();
        } else {
          await addTweet(data).unwrap();
        }
        setMessageLength(MAX_TWIT_MSG_LEN);
      } catch (err) {
        throw new Error(String(err));
      }

      resetForm();
      setImgError('');
      if (close) {
        close();
      }
    },
  });

  const delImgWithFormik = (imgName: string) => {
    const data = f.values.img.filter((img: File) => img.name !== imgName);
    f.setFieldValue('img', data);
  };
  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget as HTMLInputElement;
    if (target.files) {
      const selectedFiles = [...f.values.img, ...target.files];
      if (selectedFiles.length > 4) {
        setImgError('formErrors.maxImg');
      }
      if (target.files[0].size > 1024 * 1024) {
        setImgError('formErrors.maxImgSize');
      }
      f.setFieldValue('img', selectedFiles);
    }
  };

  if (isLoading) return <Preloader />;

  return (
    <div className="flex flex-row flex-nowrap w-full p-4 border-b pb-10 dark:border-slate-600">
      <div className="mr-3 h-12 relative cursor-pointer flex items-center justify-center">
        <img
          src={src}
          alt="user"
          className="rounded-full object-contain w-12"
        />
        <div className="absolute w-12 hover:bg-black/10 top-0 bottom-0 right-0 left-0 rounded-full transition-colors duration-200" />
      </div>
      <div className="w-full">
        <form onSubmit={f.handleSubmit} className="w-full">
          <textarea
            className="w-full focus:border-b-2 outline-none block p-2 md:text-xl overflow-hidden resize-none max-h-[600px] dark:bg-inherit"
            id="review-text"
            name="text"
            onChange={(e) => {
              handleChange(e);
              f.handleChange(e);
            }}
            placeholder={isReply ? t('replyPlaceholder')! : t('whatHappening')!}
            ref={textAreaRef}
            maxLength={MAX_TWIT_MSG_LEN}
            rows={1}
            value={f.values.text}
          />

          {f.values.img.length > 0 && (
            <PreviewImage
              files={f.values.img}
              close={delImgWithFormik}
              setImgError={setImgError}
            />
          )}

          <input
            id="img"
            name="img"
            onChange={handleImgChange}
            type="file"
            accept=".jpg, .jpeg, .png"
            className="invisible w-[1px] h-[1px]"
            multiple
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

          {imgError ? <p className="text-red-500">{t(imgError)}</p> : null}

          <button
            type="submit"
            className="twit-create__btn md:mr-5 rounded-full text-white cursor-pointer font-bold hover:bg-cyan-500 bg-sky-400 py-1 px-4 transition-colors duration-200 disabled:opacity-50 mt-5"
            disabled={!(f.isValid && f.dirty) || f.isSubmitting || !!imgError}
          >
            {isReply ? t('reply') : t('tweet')}
          </button>
        </form>
      </div>
    </div>
  );
}
