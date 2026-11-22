// Facts of the page, all from veon/client.json (company.contacts, geography, B-F007, B-F008). Nothing invented.
export const phones = [
  { label: "(066) 116-33-11", href: "tel:+380661163311" },
  { label: "(068) 073-47-97", href: "tel:+380680734797" },
] as const;

export const hours = "Щоденно 09:00–21:00";
export const email = "koks7100@gmail.com";
export const address = "Одеса, Дніпропетровська дорога, 123";
export const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Україна, Одеса, Дніпропетровська дорога, 123")}`;
export const youtube = "https://www.youtube.com/channel/UCsXyePQsqhEWQmGyDzdd51g";

const vinSubject = "Запит запчастини за VIN";
const vinBody = "VIN-код:\nМарка й модель авто:\nНазва деталі:\nТелефон для зв'язку:\n";
export const vinMailto = `mailto:${email}?subject=${encodeURIComponent(vinSubject)}&body=${encodeURIComponent(vinBody)}`;

export const nav = [
  { label: "Каталог", href: "#katalog" },
  { label: "Під замовлення", href: "#pid-zamovlennia" },
  { label: "Доставка і оплата", href: "#yak-zamovyty" },
  { label: "Про нас", href: "#chomu-my" },
  { label: "Контакти", href: "#kontakty" },
] as const;

export const models = ["Aveo", "Lacetti", "Lanos", "LADA 110", "Mondeo", "Passat", "Octavia", "Omega"] as const;

export const groups = [
  "Гальмівна система",
  "Підвіска та ходова",
  "Трансмісія",
  "Рульове управління",
  "Двигун",
  "Ремені та ролики",
  "Система охолодження",
  "Система очищення вікон",
  "Паливна система",
  "Фільтри",
  "Кузов",
  "Система запалювання",
  "Електроустаткування",
  "Автохімія",
] as const;

export const notes = {
  picker: "Підбір з'явиться в повній версії сайту",
  catalog: "Каталог з'явиться в повній версії сайту",
  search: "Пошук з'явиться в повній версії сайту",
  section: "Розділ у розробці",
} as const;
