import { useContext } from "react";
import { StackContext } from "../../../store/StackContext";
import style from "../Header.module.scss";

export const Stack = () => {
  const { stack } = useContext(StackContext);

  return (
    <div className={style.stackContainer}>
      <span>{stack.join("")}</span>
    </div>
  );
};
