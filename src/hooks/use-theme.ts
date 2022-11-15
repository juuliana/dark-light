import { useState } from "react";
import { DefaultTheme } from "styled-components";

import { dark } from "../themes";

export function useTheme() {
  const [theme, setTheme] = useState<DefaultTheme>(dark);

  function handleTheme(newTheme: DefaultTheme) {
    setTheme(newTheme);
  }

  return { theme, handleTheme };
}
