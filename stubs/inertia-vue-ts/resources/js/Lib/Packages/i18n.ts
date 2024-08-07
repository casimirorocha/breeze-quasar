import { createI18n } from 'vue-i18n'

// Import translation phrases from => laravel root directory => lang
// @ts-ignore
import EN_US_LANG from '@/../../lang/en-US'
// @ts-ignore
import PT_BR_LANG from '@/../../lang/pt-BR'

// Make a messages array object
const messages = {
  en: EN_US_LANG,
  'pt-BR': PT_BR_LANG
}

// Creating i18n instance
export default createI18n({
  locale: 'pt-BR',
  fallbackLocale: 'en',
  ...messages
})
