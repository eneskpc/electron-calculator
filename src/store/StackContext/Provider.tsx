import { PropsWithChildren, useState } from "react";
import { StackContext } from ".";

export const StackProvider = ({ children }: PropsWithChildren) => {
  const [stack, setStack] = useState<(number | string)[]>([0]);

  return (
    <StackContext.Provider
      value={{
        stack,
        setStack,
      }}
    >
      {children}
    </StackContext.Provider>
  );
};
