import { useContext, useMemo } from "react";
import style from "../Header.module.scss";
import { StackContext } from "../../../store/StackContext";

export const Result = () => {
  const { stack } = useContext(StackContext);

  const result = useMemo(() => {
    try {
      return eval(stack.join(""));
    } catch {
      return "";
    }
  }, [stack]);


  return (
    <div className={style.resultContainer}>
      <span>{result}</span>
    </div>
  );
};
