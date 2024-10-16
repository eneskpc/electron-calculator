import { createContext } from "react";

export const StackContext = createContext<{
  stack: (number | string)[];
  setStack: React.Dispatch<React.SetStateAction<(string | number)[]>>;
}>({ stack: [], setStack: () => {} });
