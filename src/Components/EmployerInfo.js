import "../App.css";
import CLIP_IMG from "../Media/Скрепка.svg";

export default function EmployerInfo() {
  return (
    <section>
      <h1 className="section-title">Создание объявления о вакансии</h1>
      <div className="cv-add employer-info d-flex flex-column">
        <h5 className="cv-description">
          Для поиска подходящих кадров для вас, вы должны заполнить подробное
          описание позиции и предоставить информацию о компании.
        </h5>
        <div className="employer-info-div d-flex flex-column">
          <h4 className="employer-info-title">Данные о компании</h4>
          <div className="horizontal-input-boxes d-flex">
            <div>
              <p className="question-title">Название компании</p>
              <input
                className="question-input"
                type="text"
                placeholder="Введите данные"
              />
            </div>
            <div>
              <p className="question-title">
                Веб сайт компании{" "}
                <span style={{ color: "#9E9E9E" }}>(если имеется)</span>
              </p>
              <input
                className="question-input"
                type="text"
                placeholder="Введите данные"
              />
            </div>
          </div>
        </div>
        <div className="employer-info-div d-flex flex-column">
          <h4 className="employer-info-title">Информация о вакансии</h4>
          <div className="horizontal-input-boxes d-flex">
            <div>
              <p className="question-title">Должность</p>
              <input
                className="question-input"
                type="text"
                placeholder="Введите данные"
              />
            </div>
            <div>
              <p className="question-title">Тип занятости</p>
              <select className="question-input" name="occupancy">
                <option value="full-time" selected>
                  Полная
                </option>
                <option value="part-time">Частичная</option>
              </select>
            </div>
            <div>
              <p className="question-title">Город</p>
              <select className="question-input" name="city">
                <option value="Astana selected">Астана</option>
                <option value="Almaty">Алматы</option>
              </select>
            </div>
          </div>
          <div className="horizontal-input-boxes d-flex">
            <div>
              <p className="question-title">Предлагаемая зарплата</p>
              <input
                className="question-input"
                type="text"
                placeholder="Введите данные"
              />
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
          </div>
          <div>
            <p className="question-title">
              Описание позиции{" "}
              <span style={{ color: "#9E9E9E" }}>(не больше 150 символов)</span>
            </p>
            <textarea
              className="description-textarea"
              type="text"
              placeholder="Введите данные"
            />
          </div>
        </div>
        <div className="employer-info-div d-flex flex-column">
          <h4 className="employer-info-title">
            Данные контактного лица либо представителя компании
          </h4>
          <div className="horizontal-input-boxes d-flex">
            <div>
              <p className="question-title">Имя Фамилия </p>
              <input
                className="question-input"
                type="text"
                placeholder="Введите данные"
              />
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
        </div>
        <div className="vacancy-page-button d-flex align-items-center">
          <button className="clip-button">
            <img src={CLIP_IMG} alt="clip" />
            Прикрепить Логотип Компании
            <span style={{ color: "red" }}>*</span>
          </button>
          <button className="send-button">Отправить</button>
        </div>
      </div>
    </section>
  );
}
