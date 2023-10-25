import { Inter } from "next/font/google";
import { useLocale } from "@/hooks";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { t } = useLocale();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div>{t("home-page")}...</div>
      <hr />
    </div>
  );
}
