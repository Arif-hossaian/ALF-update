/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState, useEffect } from 'react';
import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation(['header']);

  const handleLanguageChange = (event: any) => {
    i18n.changeLanguage(event.target.value);
  };

  useEffect(() => {
    let offset = 50;
    function onScroll() {
      if (!isSticky && window.scrollY > offset) {
        setIsSticky(true);
      } else if (isSticky && window.scrollY <= offset) {
        setIsSticky(false);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [isSticky]);

  return (
    <div
      id="navbar"
      className={clsx(
        'fixed inset-x-0 top-0 z-40 h-26 transition-colors duration-300',
        isSticky || location.pathname !== '/'
          ? 'border-b border-slate-200 bg-[#f95820]'
          : 'bg-[#f95820]'
      )}
    >
      <Helmet>
        <title>{t('appHeader.header')}</title>
      </Helmet>
      <div className="mx-auto max-w-screen-xl py-4 px-4 md:px-8">
        <div className="relative flex items-center">
          <Link to="/">
            <div className="flex-none">
              <span
                className={
                  i18n.language === 'en'
                    ? 'en-font sr-only'
                    : 'bd-font-title sr-only'
                }
              >
                {t('appTitle.value')}
              </span>
              <span className="flex items-center space-x-2">
                {/* <CompactLogo className="h-[28px] w-[28px]" />
                <TextLogo className="h-[22px] w-auto fill-gray-900 dark:fill-gray-50" /> */}
                {/* <img
                  src="https://res.cloudinary.com/arifscloud/image/upload/v1658298168/alf-images/b36edaz32rmqcojkbygg.jpg"
                  alt=""
                  className="h-[28px] w-[28px]"
                /> */}

                <span
                  className={
                    i18n.language === 'en'
                      ? 'en-font text-white md:text-3xl sm:text-sm'
                      : 'bd-font-title text-white md:text-3xl sm:text-sm'
                  }
                >
                  {t('appTitle.value')}
                </span>
              </span>
            </div>
          </Link>

          <div className="relative ml-auto items-center md:flex">
            <nav className="hidden font-semibold leading-6 text-white md:block">
              <ul className="flex space-x-10 text-lg">
                <li className="relative">
                  <Link to="/musics">
                    <div
                      className={
                        i18n.language === 'en'
                          ? 'en-font peer transition-all duration-150 hover:text-gray-400'
                          : 'bd-font-subTitle peer transition-all duration-150 hover:text-gray-400'
                      }
                    >
                      {t('appMenu.music')}
                    </div>
                  </Link>
                </li>
                <li className="relative">
                  <Link to="/events">
                    <div
                      className={
                        i18n.language === 'en'
                          ? 'en-font peer transition-all duration-150 hover:text-gray-400'
                          : 'bd-font-subTitle peer transition-all duration-150 hover:text-gray-400'
                      }
                    >
                      {t('appMenu.event')}
                    </div>
                  </Link>
                </li>
                <li className="relative">
                  <Link to="/about">
                    <div
                      className={
                        i18n.language === 'en'
                          ? 'en-font peer transition-all duration-150 hover:text-gray-400'
                          : 'bd-font-subTitle peer transition-all duration-150 hover:text-gray-400'
                      }
                    >
                      {t('appMenu.about')}
                    </div>
                  </Link>
                </li>
                <li className="relative">
                  <Link to="/contact_us">
                    <div
                      className={
                        i18n.language === 'en'
                          ? 'en-font peer transition-all duration-150 hover:text-gray-400'
                          : 'bd-font-subTitle peer transition-all duration-150 hover:text-gray-400'
                      }
                    >
                      {t('appMenu.contact_us')}
                    </div>
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center space-x-4 pl-6 md:space-x-6">
              <select
                id="select"
                className={
                  i18n.language === 'en'
                    ? 'en-font mt-1 block w-14 py-1 px-2 border text-orange-500 border-gray-300 bg-white  rounded-md shadow-sm focus:outline-none sm:text-sm'
                    : 'bd-font-subTitle mt-1 block w-14 py-1 px-2 border border-gray-300 bg-white text-orange-500  rounded-md shadow-sm focus:outline-none sm:text-sm'
                }
                name="language"
                onChange={handleLanguageChange}
              >
                <option value="en">EN</option>
                <option value="bd">BD</option>
              </select>
              {/* <ToggleBUtton /> */}

              <MenuPopOver display="flex md:hidden" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const MenuPopOver = React.memo(({ display }: { display: string }) => {
  let [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation(['header']);

  return (
    <div className={display}>
      <button aria-label="Navigation Menu" onClick={() => setIsOpen(!isOpen)}>
        <svg
          className="h-6 w-6 hover:stroke-red-600 dark:hover:stroke-red-400"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <Transition
        show={isOpen}
        appear
        as={Fragment}
        enter="transform transition ease-in-out duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition ease-in-out duration-300 delay-200"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <Dialog
          as="div"
          className={clsx('fixed inset-0 z-50 ', display)}
          onClose={setIsOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300 delay-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed top-0 bottom-0 left-0 w-full max-w-xs rounded-r-2xl bg-white p-6 shadow-lg dark:bg-gray-800 ">
            <a className="mx-auto mt-4">
              <span className="flex items-center space-x-2">
                {/* <CompactLogo className="h-[32px] w-[32px]" />
                <TextLogo className="h-[22px] w-auto fill-gray-900 dark:fill-gray-50" /> */}
                <span
                  className={
                    i18n.language === 'en'
                      ? 'en-font text-white'
                      : 'bd-font-title text-white'
                  }
                >
                  {t('appTitle.value')}
                </span>
              </span>
            </a>

            <ul className="mt-16 space-y-6">
              <li className="relative">
                <Link to="/musics">
                  <div
                    className={
                      i18n.language === 'en'
                        ? 'en-font peer block text-lg font-semibold transition-all duration-150 hover:text-gray-400'
                        : 'bd-font-title peer block text-lg font-semibold transition-all duration-150 hover:text-gray-400'
                    }
                  >
                    {t('appMenu.music')}
                  </div>
                </Link>
              </li>
              <li className="relative">
                <Link to="/events">
                  <div
                    className={
                      i18n.language === 'en'
                        ? 'en-font peer block text-lg font-semibold transition-all duration-150 hover:text-gray-400'
                        : 'bd-font-title peer block text-lg font-semibold transition-all duration-150 hover:text-gray-400'
                    }
                  >
                    {t('appMenu.event')}
                  </div>
                </Link>
              </li>
              <li className="relative">
                <Link to="/about">
                  <div
                    className={
                      i18n.language === 'en'
                        ? 'en-font peer block text-lg font-semibold transition-all duration-150 hover:text-gray-400'
                        : 'bd-font-title peer block text-lg font-semibold transition-all duration-150 hover:text-gray-400'
                    }
                  >
                    {t('appMenu.about')}
                  </div>
                </Link>
              </li>
              <li className="relative">
                <Link to="/contact_us">
                  <div
                    className={
                      i18n.language === 'en'
                        ? 'en-font peer block text-lg font-semibold transition-all duration-150 hover:text-gray-400'
                        : 'bd-font-title peer block text-lg font-semibold transition-all duration-150 hover:text-gray-400'
                    }
                  >
                    {t('appMenu.contact_us')}
                  </div>
                </Link>
              </li>
            </ul>

            <button
              aria-label="Close Navigation Menu"
              className="absolute top-5 right-5"
              onClick={() => setIsOpen(false)}
            >
              <svg viewBox="0 0 10 10" className="h-4 w-4" aria-hidden="true">
                <path
                  d="M0 0L10 10M10 0L0 10"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
});
