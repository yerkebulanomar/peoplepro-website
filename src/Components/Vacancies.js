import "../App.css";
import CLIP_IMG from "../Media/Скрепка.svg";

export default function Vacancies() {
  return (
    <section>
      <h1 className="section-title">Создание нового резюме</h1>
      <div className="cv-add">
        <h4 className="cv-description">
          Для поиска подходящих вакансии для вас, вы должны заполнить подробное
          резюме о себе, либо загрузить готовое резюме в форматах pdf, doc,
          docx. Для начала, ответьте на следущие вопросы и выберите дальнейщее
          действие.
        </h4>
        <div className="cv-questionnary">
          <div>
            <p className="question-title">Имя</p>
            <input className="question-input" type="text" placeholder="Имя" />
          </div>
          <div>
            <p className="question-title">Фамилия</p>
            <input
              className="question-input"
              type="text"
              placeholder="Фамилия"
            />
          </div>
          <div>
            <p className="question-title">Пол</p>
            <select className="question-input" name="sex">
              <option value="male" selected>
                Мужской
              </option>
              <option value="female">Женский</option>
            </select>
          </div>
          <div>
            <p className="question-title">Опыт работы</p>
            <select className="question-input" name="experience">
              <option value="noExp" selected>
                Без опыта
              </option>
              <option value="lvl1">1-3 года</option>
              <option value="lvl2">4-7 года</option>
              <option value="lvl3">7-10 года</option>
            </select>
          </div>
          <div>
            <p className="question-title">Желаемая должность</p>
            <input
              className="question-input"
              type="text"
              placeholder="Введите данные"
            />
          </div>
          <div>
            <p className="question-title">Зарплата</p>
            <input
              className="question-input"
              type="text"
              placeholder="Введите данные"
            />
          </div>
          <div>
            <p className="question-title">Город</p>
            <select className="question-input" name="city">
              <option value="Astana selected">Астана</option>
              <option value="Almaty">Алматы</option>
            </select>
          </div>
          <div>
            <p className="question-title">Телефон</p>
            <input
              className="question-input"
              type="text"
              placeholder="Введите данные"
            />
          </div>
          <div>
            <p className="question-title">Электронная почта</p>
            <input
              className="question-input"
              type="text"
              placeholder="Введите данные"
            />
          </div>
        </div>
        <div className="vacancies-bottom-buttons d-flex align-items-center">
          <button className="clip-button">
            <img src={CLIP_IMG} alt="clip" />
            Прикрепить резюме<span style={{ color: "red" }}>*</span>
          </button>
          <button className="send-button">Отправить</button>
        </div>
      </div>
    </section>
  );
}
