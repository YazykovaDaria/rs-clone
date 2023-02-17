import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { useAuth } from '../../entities/user/Auth/authContext';
import { getInitValues } from './lib/getInitValues';
import { useUpdateUserMutation } from '../../entities/user/Profile/userProfileApi';

function EditProfile() {
  const { t } = useTranslation();
  const [update] = useUpdateUserMutation();
  const auth = useAuth();
  const initValues = getInitValues(auth.user);

  const f = useFormik({
    initialValues: initValues,
    onSubmit: async (values) => {
      try {
        await update({ user: auth?.user.username, body: values });
        auth?.updateUserData(values);
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div>
      <form onSubmit={f.handleSubmit} className="flex flex-col gap-5 p-2">
        <div>
          <button
            type="submit"
            disabled={!f.dirty || f.isSubmitting}
            className="disabled:bg-slate-500 bg-sky-400 font-bold hover:bg-cyan-500 rounded-full text-white px-5 py-1 transition-colors duration-200"
          >
            {t('save')}
          </button>
        </div>
        <div className="relative">
          <label htmlFor="name" className="edit-label">
            {t('authLoginForm.name')}
          </label>
          <input
            className="edit-input"
            name="name"
            type="text"
            id="name"
            placeholder=" "
            onChange={f.handleChange}
            onBlur={f.handleBlur}
            value={f.values.name}
          />
        </div>

        <div className="relative">
          <label htmlFor="about" className="edit-label">
            {t('about you')}
          </label>
          <textarea
            className="edit-input"
            name="about"
            id="about"
            placeholder=" "
            onChange={f.handleChange}
            onBlur={f.handleBlur}
            value={f.values.about}
          />
        </div>

        <div className="relative">
          <label htmlFor="location" className="edit-label">
            {t('location')}
          </label>
          <input
            className="edit-input"
            name="location"
            type="text"
            id="location"
            placeholder=" "
            onChange={f.handleChange}
            onBlur={f.handleBlur}
            value={f.values.location}
          />
        </div>

        <div className="relative">
          <label htmlFor="site" className="edit-label">
            {t('site')}
          </label>
          <input
            className="edit-input"
            name="site"
            type="text"
            id="site"
            placeholder=" "
            onChange={f.handleChange}
            onBlur={f.handleBlur}
            value={f.values.site}
          />
        </div>
        {/* {f.isSubmitting && <Preloader />} */}
        {/* {authFailed ? <p className="text-red-500">{t(authMes)}</p> : null} */}
      </form>
    </div>
  );
}

export default EditProfile;
