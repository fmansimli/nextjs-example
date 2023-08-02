import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { LINKS } from "@/constants/menu";
import { useLocale } from "@/hooks";

interface IProps {}

const Navbar: FC<IProps> = (props) => {
  const { push, locale, pathname, asPath } = useRouter();

  const { t } = useLocale();

  const changeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    push(pathname, asPath, { locale: e.target.value });
  };

  return (
    <nav className="w-full bg-gray-700 text-white">
      <div className="container flex items-center justify-between">
        <div>
          <Link href="/" locale={locale}>
            LOGO
          </Link>
        </div>
        <ul className="flex items-center gap-9 text-lg">
          {LINKS.filter((link) => link.secure === false).map((link, key) => (
            <li key={key}>
              <Link className="inline-block py-4" href={link.href} locale={locale}>
                {link.title[locale as string]}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex items-center gap-6 text-lg">
          <li>
            <select
              className="bg-slate-700 py-0 ring-0"
              onChange={changeLang}
              defaultValue={locale}>
              <option value="az">AZ</option>
              <option value="en">EN</option>
              <option value="ru">RU</option>
            </select>
          </li>
          <li>
            <Link className="inline-block py-4" href="/auth/signin" locale={locale}>
              {t("login-link")}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
