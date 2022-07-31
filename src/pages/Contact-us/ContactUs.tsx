/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react';
import ImageAnimation from '../../shared/Animation/ImageAnimation';
import Card from '../../shared/Card/Card';
import ContactWithUs from './icons/81732-contact-us.json';
import ContactForm from './ContactForm';
import CallIcon from './icons/lottieflow-ecommerce-14-18-f95820-easey.json';
import MailIcon from './icons/lottieflow-social-networks-16-9-f95820-easey.json';
import AddressIcon from './icons/lottieflow-ecommerce-14-15-f95820-easey.json';
import Animation from '../../shared/Animation/Animation';
import { useTranslation } from 'react-i18next';

const ContactUs: FC = () => {
  const { t } = useTranslation(['contact-us']);
  return (
    <div className="py-16 mt-16">
      <Animation animateIn="fadeInUp">
        <h1 className="text-center lg:text-5xl text-2xl main-text">
          {t('appContactUs.title')}
        </h1>
      </Animation>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <Card className="lg:px-10 lg:col-span-2 rounded-lg shadow-lg items-center">
            <div className="w-70 h-70">
              <ImageAnimation animationData={ContactWithUs} />
            </div>
            <div className="space-y-2">
              <Card className="flex justify-start items-center space-x-3 border-l-4 border-yellow-300 bg-gray-50 group">
                <div className="w-16 h-16">
                  <ImageAnimation animationData={AddressIcon} />
                </div>
                <div>
                  <h1 className="font-semibold text-lg main-text">
                    {t('appContactUs.subTitle1')}
                  </h1>
                  <p className="font-semi text-sm">
                    {t('appContactUs.subTitle2')}
                  </p>
                </div>
              </Card>
              <Card className="flex justify-start items-center space-x-3 border-l-4 border-yellow-300 bg-gray-50 group">
                <div className="w-16 h-16">
                  <ImageAnimation animationData={CallIcon} />
                </div>
                <div>
                  <h1 className="font-semibold text-lg main-text">
                    {t('appContactUs.subTitle3')}
                  </h1>
                  <p className="font-semi text-sm">
                    <a href="tel:+880 1712121212">
                      {t('appContactUs.subTitle4')}
                    </a>
                  </p>
                </div>
              </Card>
              <Card className="flex justify-start items-center space-x-3 border-l-4 border-yellow-300  group">
                <div className="w-16 h-16">
                  <ImageAnimation animationData={MailIcon} />
                </div>
                <div>
                  <h1 className="font-semibold text-lg main-text">
                    {t('appContactUs.subTitle5')}
                  </h1>
                  <p className="font-semi text-sm">
                    <a href="mailto:abdulalimfoundationbd@gmail.com">
                      {t('appContactUs.subTitle6')}
                    </a>
                  </p>
                </div>
              </Card>
            </div>
          </Card>

          <Card className=" rounded-lg shadow-lg lg:p-12 lg:col-span-3 items-center">
            <ContactForm />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
