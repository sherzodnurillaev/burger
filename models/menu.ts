type Translation = {
    ru: string;
    en: string;
}

export type User = {
    _id: string;
    title: Translation;
    description: Translation;
    price: number;
    width: string;
    category: string;
    images: string[];
    composition: string;
};
