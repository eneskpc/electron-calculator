import clsx from "clsx";
import style from "./ButtonGrid.module.scss";
import { useContext, useState } from "react";
import { StackContext } from "../../store/StackContext";

export const ButtonGrid = () => {
  const [number, setNumber] = useState<number>(0);
  const { setStack } = useContext(StackContext);

  const addToStack = (operator: string) => () => {
    setStack((prev) => {
      if (operator === "C") {
        return [0];
      }
      if (operator === "=") {
        return [eval([...prev, number].join(""))];
      }
      return [...prev, number, operator];
    });
    setNumber(0);
  };

  const increaseNumber = (currNumber: number) => () => {
    if (number === 0) {
      setNumber(currNumber);
    } else {
      console.log(number);
      setNumber(Number(`${number}${currNumber}`));
    }
  };

  return (
    <div className={style.gridContainer}>
      <div className={style.buttonContainer}>
        <button type="button" className={style.clear} onClick={addToStack("C")}>
          C
        </button>
      </div>
      <div className={style.buttonContainer}>
        <button type="button" onClick={addToStack("(")}>
          (
        </button>
      </div>
      <div className={style.buttonContainer}>
        <button type="button" onClick={addToStack(")")}>
          )
        </button>
      </div>
      <div className={style.buttonContainer}>
        <button
          type="button"
          className={style.operator}
          onClick={addToStack("/")}
        >
          /
        </button>
      </div>
      <div className={style.buttonContainer}>
        <button type="button" onClick={increaseNumber(7)}>
          7
        </button>
      </div>
      <div className={style.buttonContainer}>
        <button type="button" onClick={increaseNumber(8)}>
          8
        </button>
      </div>
      <div className={style.buttonContainer}>
        <button type="button" onClick={increaseNumber(9)}>
          9
        </button>
      </div>
      <div className={style.buttonContainer}>
        <button
          type="button"
          className={style.operator}
          onClick={addToStack("x")}
        >
          &times;
        </button>
      </div>
      <div className={style.buttonContainer}>
        <button type="button" onClick={increaseNumber(4)}>
          4
        </button>
      </div>
      <div className={style.buttonContainer}>
        <button type="button" onClick={increaseNumber(5)}>
          5
        </button>
      </div>
      <div className={style.buttonContainer}>
        <button type="button" onClick={increaseNumber(6)}>
          6
        </button>
      </div>
      <div className={style.buttonContainer}>
        <button
          type="button"
          className={style.operator}
          onClick={addToStack("-")}
        >
          &minus;
        </button>
      </div>
      <div className={style.buttonContainer}>
        <button type="button" onClick={increaseNumber(1)}>
          1
        </button>
      </div>
      <div className={style.buttonContainer}>
        <button type="button" onClick={increaseNumber(2)}>
          2
        </button>
      </div>
      <div className={style.buttonContainer}>
        <button type="button" onClick={increaseNumber(3)}>
          3
        </button>
      </div>
      <div className={style.buttonContainer}>
        <button
          type="button"
          className={style.operator}
          onClick={addToStack("+")}
        >
          +
        </button>
      </div>
      <div className={clsx(style.buttonContainer, style.zeroContainer)}>
        <button type="button" className={style.zero} onClick={addToStack("0")}>
          0
        </button>
      </div>
      <div className={style.buttonContainer}>
        <button type="button">.</button>
      </div>
      <div className={style.buttonContainer}>
        <button
          type="button"
          className={style.operator}
          onClick={addToStack("=")}
        >
          =
        </button>
      </div>
    </div>
  );
};
