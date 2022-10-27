/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useTranslation } from 'react-i18next';
import Animation from '../Animation/Animation';

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation(['footer']);
  return (
    <div className="mt-12">
      <hr />
      <footer style={{ backgroundColor: 'rgba(251, 75, 6, 0.2)' }}>
        <div className="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="flex justify-center sm:justify-start">
                <img
                  src="https://i.ibb.co/tKPs42d/ALF-logo-updated.png"
                  alt=""
                  className="h-[96px] w-[96px]"
                />
              </div>
              <Animation animateIn="fadeInLeft">
                <p
                  className={
                    i18n.language === 'en'
                      ? 'en-font max-w-md mx-auto text-2xl mt-6 leading-relaxed text-center main-text sm:max-w-xs sm:mx-0 sm:text-left'
                      : 'bd-font-title max-w-md mx-auto text-2xl mt-6 leading-relaxed text-center main-text sm:max-w-xs sm:mx-0 sm:text-left'
                  }
                >
                  {t('appFooterTitle.footerTitle')}
                </p>
              </Animation>

              <ul className="flex justify-center gap-6 mt-8 md:gap-8 sm:justify-start">
                <li>
                  <a
                    href="/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="main-text transition hover:text-red-300"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="w-7 h-7 fill-current"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="main-text transition hover:text-red-300"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      className="w-7 h-7"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="main-text transition hover:text-red-300"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="w-7 h-7"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 lg:col-span-2 md:grid-cols-2">
              <div className="text-center md:ml-28 lg:ml-28 sm:text-left">
                <Animation animateIn="fadeInUp">
                  <p
                    className={
                      i18n.language === 'en'
                        ? 'en-font text-2xl font-medium main-text'
                        : 'bd-font-title text-2xl font-medium main-text'
                    }
                  >
                    {t('appFooterTitle.HelpfulLinks')}
                  </p>

                  <nav className="mt-5">
                    <ul className="space-y-4 text-lg">
                      <li>
                        <a
                          className={
                            i18n.language === 'en'
                              ? 'en-font text-gray-700 transition hover:text-gray-700/75'
                              : 'bd-font-subTitle text-gray-700 transition hover:text-gray-700/75'
                          }
                          href="/"
                        >
                          {t('appFooterTitle.HelpfulLinksSubTitle1')}
                        </a>
                      </li>

                      <li>
                        <a
                          className={
                            i18n.language === 'en'
                              ? 'en-font text-gray-700 transition hover:text-gray-700/75'
                              : 'bd-font-subTitle text-gray-700 transition hover:text-gray-700/75'
                          }
                          href="/"
                        >
                          {t('appFooterTitle.HelpfulLinksSubTitle2')}
                        </a>
                      </li>

                      <li>
                        <a
                          className="flex group justify-center gap-1.5 sm:justify-start"
                          href="/"
                        >
                          <span
                            className={
                              i18n.language === 'en'
                                ? 'en-font text-gray-700 transition hover:text-gray-700/75'
                                : 'bd-font-subTitle text-gray-700 transition hover:text-gray-700/75'
                            }
                          >
                            {t('appFooterTitle.HelpfulLinksSubTitle3')}
                          </span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </Animation>
              </div>

              <div className="text-center sm:text-left">
                <Animation animateIn="fadeInUp">
                  <p
                    className={
                      i18n.language === 'en'
                        ? 'en-font text-2xl font-medium main-text'
                        : 'bd-font-title text-2xl font-medium main-text'
                    }
                  >
                    {t('appFooterTitle.Contact_us')}
                  </p>

                  <ul className="mt-5 space-y-4 text-lg">
                    <li>
                      <a
                        className="flex items-center justify-center gap-1.5 sm:justify-start"
                        href="mailto:abdulalimfoundationbd@gmail.com"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-7 h-7 main-text shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>

                        <span
                          className={
                            i18n.language === 'en'
                              ? 'en-font text-gray-700 ml-1'
                              : 'bd-font-subTitle text-gray-700'
                          }
                        >
                          <p className="font-semibold text-lg">
                            {t('appFooterTitle.email_text')}
                          </p>
                          {t('appFooterTitle.email')}
                        </span>
                      </a>
                    </li>

                    <li>
                      <a
                        className="flex items-center justify-center gap-1.5 sm:justify-start"
                        href="tel:+880 1712121212"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-7 h-7 main-text shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>

                        <span
                          className={
                            i18n.language === 'en'
                              ? 'en-font text-gray-700 ml-1'
                              : 'bd-font-subTitle text-gray-700 ml-1'
                          }
                        >
                          <p className="font-semibold text-lg">
                            {t('appFooterTitle.phone_text')}
                          </p>
                          {t('appFooterTitle.phone')}
                        </span>
                      </a>
                    </li>

                    <li className="flex items-center justify-center gap-1.5 sm:justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-7 h-7 main-text shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>

                      <address
                        className={
                          i18n.language === 'en'
                            ? 'en-font -mt-0.5 ml-1 not-italic text-gray-700'
                            : 'bd-font-subTitle -mt-0.5 ml-1 not-italic text-gray-700'
                        }
                      >
                        <p className="font-semibold text-lg">
                          {t('appFooterTitle.location_text')}
                        </p>
                        {t('appFooterTitle.location')}
                      </address>
                    </li>
                  </ul>
                </Animation>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-12 border-t border-gray-100">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <p className="text-lg text-gray-500">
                <span className="block sm:inline">All rights reserved.</span>

                <a
                  className="inline-block text-lg ml-1 underline main-text transition hover:text-red-600 en-font"
                  href="/"
                >
                  Terms & Conditions
                </a>

                <span>&middot;</span>
              </p>

              <p className="mt-4 text-md main-text sm:order-first sm:mt-0 en-font">
                &copy; 2022 Abdul Alim Foundation
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
