import type { LogoProps } from '@ircsignpost/signpost-base/dist/src/header';
import type { Locale } from '@ircsignpost/signpost-base/dist/src/locale';

import logo from '../public/settlein-logo.png';

export const getHeaderLogoProps = (currentLocale: Locale): LogoProps => {
  let imgSrc: string;
  let logoLink: string;
  switch (currentLocale.url) {
    case 'en-us':
    default:
      imgSrc = logo.src;
      logoLink = 'https://settleinus.org';
      break;
  }
  return {
    src: imgSrc,
    link: logoLink,
  };
};
