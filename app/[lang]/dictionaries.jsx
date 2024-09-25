import 'server-only'
 
const dictionaries = {
    ru: () => import('@/lang/ru.json').then((module) => module.default),
    en: () => import('@/lang/en.json').then((module) => module.default),
}
 
export const getDictionary = async (locale) => {
    console.log('Requested locale:', locale);
    const dictFunc = dictionaries[locale];
    return dictFunc()
}
