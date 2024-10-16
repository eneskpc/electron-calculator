import style from "./App.module.scss";
import { ButtonGrid } from "./components/ButtonGrid";
import { Header } from "./components/Header";

function App() {
  return (
    <div className={style.mainContainer}>
      <Header />
      <ButtonGrid />
    </div>
  );
}

export default App;
