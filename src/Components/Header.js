import "../App.css";
import LOGO from "../Media/logo.svg";

export default function Header() {
  return (
    <header className="d-flex justify-content-between">
      <img src={LOGO} alt="logo" />
      <div className="header-buttons d-flex">
        <button className="header-btn">Главная</button>
        <button className="header-btn">Вакансии</button>
        <button className="header-btn">О нас</button>
        <button className="header-btn apply-btn">Подать Заявку</button>
      </div>
    </header>
  );
}
