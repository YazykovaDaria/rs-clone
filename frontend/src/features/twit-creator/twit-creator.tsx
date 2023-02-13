import { useState } from 'react';
import MAX_TWIT_MSG_LEN from '../../shared/constants/MAX_TWIT_MSG_LEN';
import autoHeight from './lib/autoHeight';
import previewImage from './lib/previewImg';
import './style.css';

export default function TwitCreator() {
  // eslint-disable-next-line prefer-const
  let [messageLength, setMessageLength] = useState(MAX_TWIT_MSG_LEN);
  function calculateMessageLength() {
    messageLength = MAX_TWIT_MSG_LEN;
    const twitCreateBtn = document.querySelector('.twit-create__btn');
    const textareaLength = (
      document.getElementById('text') as HTMLTextAreaElement
    ).value.length;
    setMessageLength(messageLength - textareaLength);
    autoHeight();
    if (textareaLength <= 0) {
      twitCreateBtn?.classList.add('disabled');
    } else {
      twitCreateBtn?.classList.remove('disabled');
    }
  }
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
        <form method="POST" action="URL" encType="multipart/form-data">
          <textarea
            maxLength={140}
            id="text"
            placeholder="What's happening?"
            onChange={calculateMessageLength}
            className="w-full focus:border-b-2 outline-none block p-2 md:text-xl overflow-hidden resize-none max-h-[600px]"
          />
          <label
            htmlFor="file-input"
            className="w-8 h-8 flex items-center justify-center"
          >
            <input
              id="file-input"
              onChange={previewImage}
              type="file"
              accept=".jpg, .jpeg, .png"
              className="invisible w-[1px] h-[1px]"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer hover:stroke-cyan-500 stroke-sky-400 hover:stroke-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </label>
          <img
            id="preview"
            alt="preview"
            className="hidden max-h-[50vh] object-contain"
          />
        </form>
        <div className="flex justify-end items-center mt-2">
          <div
            className="mr-4 rounded-full border-2 border-sky-400 w-8 h-8 flex justify-center items-center"
            style={{ borderColor: messageLength ? 'rgb(56 189 248)' : 'red' }}
          >
            {messageLength}
          </div>
          <button
            type="submit"
            className="twit-create__btn disabled block md:mr-5 rounded-full text-white cursor-pointer font-bold hover:bg-cyan-500 bg-sky-400 py-1 px-4 transition-colors duration-200"
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}
