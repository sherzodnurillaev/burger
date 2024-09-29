import 'server-only'; // Указывает, что этот код должен выполняться только на сервере

const dictionaries = {
  en: () => import('../../lang/en.json').then((module) => module.default),
  ru: () => import('../../lang/ru.json').then((module) => module.default),
};

export async function getDictionary(lang) {
  return dictionaries[lang]();
}