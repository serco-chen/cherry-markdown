import locales from '@/locales/index';

/**
 * translate by key
 * @param {string} key
 * @param {string} [lang='zh_CN']
 * @returns
 */
export function t(key, lang = 'en_US') {
  return locales[lang]?.[key] ?? key;
}
