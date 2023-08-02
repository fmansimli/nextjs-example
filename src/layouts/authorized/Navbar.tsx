import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useRecoilState } from "recoil";
import { authState } from "@/store/auth.state";
import { useLocale } from "@/hooks";

import { LINKS } from "@/constants/menu";

interface IProps {}

const Navbar: FC<IProps> = (props) => {
  const [auth, setAuth] = useRecoilState(authState);
  const { push, locale, pathname, asPath } = useRouter();

  const { t } = useLocale();

  const logoutHandler = () => {
    setAuth({ user: null, initialized: true });
    localStorage.removeItem("token");
  };

  const changeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    push(pathname, asPath, { locale: e.target.value });
  };

  return (
    <nav className="w-full bg-gray-800">
      <div className="container flex items-center justify-between text-white">
        <div>
          <Link href="/">LOGO</Link>
        </div>
        <ul className="flex items-center gap-4 text-lg">
          {LINKS.map((link, key) => (
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
            <Link href="#" className="inline-block py-3" locale={locale}>
              {auth.user?.username}
            </Link>
          </li>
          <li>
            <Link onClick={logoutHandler} href="#" className="inline-block py-4">
              {t("logout-link")}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
