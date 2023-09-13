import { useRouter } from "next/router";

import en from "@/locales/en.json";
import az from "@/locales/az.json";
import ru from "@/locales/ru.json";

export const useLocale = () => {
  const { locale } = useRouter();
  const resource: any = locale === "en" ? en : locale === "ru" ? ru : az;

  const t = (key: string) => {
    return resource[key] || key;
  };

  return { t };
};
