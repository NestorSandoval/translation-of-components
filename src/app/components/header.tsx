"use client";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Header");

  return <header>{t("text")}</header>;
}
