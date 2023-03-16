import "../App.css";
import MAGNIFIER from "../Media/icon.svg";

export default function SuccessEmployee() {
  return (
    <section>
      <h1 className="section-title">Создание нового резюме</h1>
      <div className="cv-add">
        <h2 className="success-title">Спасибо что доверяете нам!</h2>
        <h4 className="success-text">
          Ваши данные обрабатываются, в скором времени с Вами свяжется один из
          наших менеджеров
        </h4>
        <button className="success-button">
          <img src={MAGNIFIER} alt="magnifier" />
          Продолжить поиск
        </button>
      </div>
    </section>
  );
}
