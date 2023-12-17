"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

const Theme = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <button
      onClick={() =>
        theme === "dark" || resolvedTheme === "dark"
          ? setTheme("light")
          : setTheme("dark")
      }
    >
      {theme === "light" ? (
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/icons/moon.svg`}
          alt="moon"
          width={24}
          height={24}
          className="active-theme"
        />
      ) : (
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/icons/sun.svg`}
          alt="sun"
          width={24}
          height={24}
          className="active-theme"
        />
      )}
    </button>
  );
};

export default Theme;
