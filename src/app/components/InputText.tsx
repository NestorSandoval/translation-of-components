"use client";
import { useTranslations } from "next-intl";

interface inputProps {
  name: string;
  label: string;
}

export const InputText: React.FC<inputProps> = ({ name, label }) => {
  const t = useTranslations("DOS");

  return (
    <div className="flex flex-col text-xl">
      <label htmlFor={name}>{label}</label>
      <input
        className="border-2 border-gray-500 rounded-sm p-1"
        type="text"
        id={label}
      />
    </div>
  );
};
