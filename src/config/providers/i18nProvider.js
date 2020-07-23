import spanishMessages from '@blackbox-vision/ra-language-spanish';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import merge from 'lodash/merge';

import { spanishResources } from '../translations/es';

const messages = {
  es: merge(spanishMessages, spanishResources)
};

export const i18nProvider = polyglotI18nProvider(locale => messages[locale], 'es');
