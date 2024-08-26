import {
  useTranslations,
  NextIntlClientProvider,
  useMessages,
} from "next-intl";
import Header from "../components/header";
import "../globals.css";
import pick from "lodash/pick";
import { InputText } from "../components/InputText";

export default function Home() {
  const t = useTranslations("Titulo");
  const e = useTranslations();
  const messages = useMessages();

  return (
    <div className="min-h-screen flex flex-col text-5xl justify-center items-center">
      <NextIntlClientProvider messages={pick(messages, "Header", "")}>
        <InputText label={e("FECHA NACIMIENTO")} name="" />
        <Header />
        <h1>{t("titulo")}</h1>
      </NextIntlClientProvider>
    </div>
  );
}
