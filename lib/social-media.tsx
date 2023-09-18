// A module for handling social media.
import { SocialMediaProps } from '@ircsignpost/signpost-base/dist/src/header-banner';

import facebookImage from '../public/facebook.svg';
import messengerImage from '../public/messenger.svg';
import telegramImage from '../public/telegram.svg';
import viberImage from '../public/viber.svg';
import whatsappImage from '../public/whatsapp.svg';
import { Locale, getLocaleFromCode } from './locale';

export interface SocialMediaLink {
  title: string;
  href: string;
}

// Serializable social media links
export interface SocialMediaLinks {
  facebookLink: SocialMediaLink;
  messengerLink: SocialMediaLink;
  telegramLink: SocialMediaLink;
  whatsappLink: SocialMediaLink;
  viberLink: SocialMediaLink;
}

/**
 * Provides data for Social Media buttons, e.g. Facebook, Whatsapp, etc.
 */
export function getSocialMediaProps(
  socialMediaLinks: SocialMediaLinks,
  locale: Locale
): SocialMediaProps[] {
  let socialMediaProps: SocialMediaProps[] = [
    {
      ...socialMediaLinks.facebookLink,
      image: facebookImage,
    },

    {
      ...socialMediaLinks.messengerLink,
      image: messengerImage,
    },
  ];

  // Site specifications are that only 'ru' and 'uk' have Viber, WhatsApp and Telegram.

  if (locale.url === 'ru' || locale.url === 'uk') {
    socialMediaProps.push({
      ...socialMediaLinks.viberLink,
      image: viberImage,
    });
    socialMediaProps.push({
      ...socialMediaLinks.whatsappLink,
      image: whatsappImage,
    });
    socialMediaProps.push({
      ...socialMediaLinks.telegramLink,
      image: telegramImage,
    });
  }
  return socialMediaProps;
}
