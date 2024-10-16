import { Result } from "./Result";
import { Stack } from "./Stack";
import style from './Header.module.scss';

export const Header = () => {
  return (
    <div className={style.headerContainer}>
      <Stack />
      <Result />
    </div>
  );
};
