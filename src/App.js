import "./App.css";
import MAN_IMG from "./Media/climbing man.svg";
import BRIEFCASE_IMG from "./Media/briefcase.svg";
import CARD_IMG from "./Media/card.svg";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { useState, useEffect } from "react";
import Card from "./Components/Card";
import LastVacancies from "./Components/LastVacancies";
import { data } from "./Components/CompaniesArray";

const employmentStat = [
  {
    id: 0,
    title:
      "Безработных в Казахстане стало больше в годовом выражении. Численность их составила 451,3 тыс. человек.",
    link: "https://kapital.kz/gosudarstvo/108217/v-kazakhstane-boleye-450-tysyach-bezrabotnykh.html",
    num1: "4,9%",
    num1Data: "уровень безработицы в Казахстане",
    num2: "215",
    num2Data:
      "тысяч человек зарегистрированы в органах занятости как безработные",
  },
  {
    id: 1,
    title:
      "Уровень безработицы в казахстане может вырасти до 13,7%, если не принять срочные меры",
    link: "https://kapital.kz/gosudarstvo/108217/v-kazakhstane-boleye-450-tysyach-bezrabotnykh.html",
    num1: "3,3 млн",
    num1Data:
      "занятых в малом бизнесе в первую очередь коснется кризис в Казахстане",
    num2: "13,7%",
    num2Data: "до этих значении может вырасти уровень безработицы",
  },
  {
    id: 2,
    title: "Молодежная безработица растет",
    link: "https://kapital.kz/gosudarstvo/108217/v-kazakhstane-boleye-450-tysyach-bezrabotnykh.html",
    num1: "3,8%",
    num1Data: "Уровень молодежной безработицы ",
    num2: "227 тыс",
    num2Data: "молодежи прибыло в 2022 году на рынок труда ",
  },
  {
    id: 3,
    title:
      "В РК ухудшается ситуация с трудоустройством женщин: женская безработица заметно превышает мужскую.",
    link: "https://kapital.kz/gosudarstvo/108217/v-kazakhstane-boleye-450-tysyach-bezrabotnykh.html",
    num1: "5,3%",
    num1Data:
      "самый высокий уровень безработицы в третьем квартале 2022 года был отмечен в Туркестанской и Мангистауской областях",
    num2: "179 тыс",
    num2Data: "Численность безработного населения в селе",
  },
];

const aboutUs = [
  {
    id: 1,
    text: "PeoplePro - это команда оказывающая услуги по подбору компетентных сотрудников компаниям. Оказываем консультативную помощь в вопросах управления персоналом.",
  },
  {
    id: 2,
    text: "Мы поможем вам сформировать уникальную кадровую стратегию, поспособствуем созданию сплочённой команды профессионалов, а также оказываем услуги по оценке персонала по методу DISC.",
  },
  {
    id: 3,
    text: "Мы помогаем малому и среднему бизнесу выстроить грамотную кадровую политику в зависимости особенностей бизнеса.",
  },
  {
    id: 4,
    text: "Наша команда недавно на рынке Алматы, но наши члены команды имеют огромный профессиональный и жизненный опыт по управлению персоналом, что способствует почувствовать проблемы руководителей компании.",
  },
  {
    id: 5,
    text: "При подборе персонала мы работаем без предоплаты.",
  },
  {
    id: 6,
    text: "Мы сопровождаем сотрудника на исполнительном сроке и даём гарантию по замене кандидата.",
  },
];

function App() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((selected) => (selected + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (event) => {
    setSelected(parseInt(event.target.value));
  };

  const handleClick = (event) => {
    setSelected(event);
  };

  return (
    <div className="App">
      <Header />
      <section className="section1 d-flex justify-content-between">
        <div className="left-text d-flex flex-column">
          <h1 className="section1-title">
            Найдите <br /> Работу мечты
          </h1>
          <h3 className="section1-subtitle">
            Вы можете найти подходящую работу или разместить свое резюме, чтобы
            работодатели могли вас найти.
          </h3>
          <div className="section1-btns d-flex">
            <button className="hire-btn d-flex align-items-center justify-content-center">
              <img src={BRIEFCASE_IMG} alt="briefcase" />
              Ищу работу
            </button>
            <button className="hire-btn d-flex align-items-center justify-content-center">
              <img src={CARD_IMG} alt="card" />
              Ищу работника
            </button>
          </div>
        </div>
        <img className="walking-man-img" src={MAN_IMG} alt="walking man" />
      </section>
      <section className="section2 d-flex flex-column">
        <div className="upper-part d-flex ">
          <div className="carousel-active-text-part d-flex flex-column justify-content-between">
            <div className="container">
              <h6 className="carousel-active-summary">Краткая статистика</h6>
              <h4 className="carousel-active-title">
                {employmentStat[selected].title}
              </h4>
              <a
                className="carousel-active-link"
                href={employmentStat[selected].link}>
                ссылка на статью
              </a>
            </div>
            <div className="radio-carousel d-flex">
              {employmentStat.map((item, index) => (
                <label className="d-flex justify-content-start" key={index}>
                  <input
                    type="radio"
                    name="carousel"
                    value={index}
                    checked={selected === index}
                    onChange={handleChange}
                  />
                </label>
              ))}
            </div>
          </div>

          <div className="carousel-active-stat1 d-flex flex-column">
            <h1 className="stat-number">{employmentStat[selected].num1}</h1>
            <h5 className="stat-summary">
              {employmentStat[selected].num1Data}
            </h5>
          </div>
          <div className="carousel-active-stat2 d-flex flex-column">
            <h1 className="stat-number">{employmentStat[selected].num2}</h1>
            <h5 className="stat-summary">
              {employmentStat[selected].num2Data}
            </h5>
          </div>
        </div>
        <div className="lower-part d-flex">
          <div className="carousel-index1 d-flex flex-column justify-content-between">
            <h4 className="index-summary white-font">
              {employmentStat[(selected + 1) % 4].title}
            </h4>
            <button
              className="white-font"
              onClick={() => handleClick((selected + 1) % 4)}>
              Подробнее {">"}
            </button>
          </div>
          <div className="carousel-index2 d-flex flex-column justify-content-between">
            <h4 className="index-summary">
              {" "}
              {employmentStat[(selected + 2) % 4].title}
            </h4>
            <button onClick={() => handleClick((selected + 2) % 4)}>
              Подробнее {">"}{" "}
            </button>
          </div>
          <div className="carousel-index3 d-flex flex-column justify-content-between">
            <h4 className="index-summary">
              {employmentStat[(selected + 3) % 4].title}
            </h4>
            <button onClick={() => handleClick((selected + 3) % 4)}>
              Подробнее {">"}
            </button>
          </div>
        </div>
      </section>
      <section className="section3 d-flex flex-column align-items-center">
        <h2 className="section3-title">Последние вакансии</h2>
        <div className="d-flex">
          {data.map((item, index) => (
            <Card
              style={{ height: "400px", width: "300px" }}
              key={index}
              {...item}
            />
          ))}
        </div>

        <input type="radio" />
        <button className="show-more-button">Показать больше</button>
      </section>
      <section className="section4 d-flex flex-column">
        <h1 className="section4-title">О нас</h1>
        <div className="about-us">
          {aboutUs.map((item) => (
            <div key={item.id}>
              <h3 className="about-us-num">{item.id}</h3>
              <h5 className="about-us-text">{item.text}</h5>
            </div>
          ))}
        </div>
      </section>
      <section style={{ background: "red" }}>Наши партнеры карусель</section>
      <Footer />
      <LastVacancies />
      <section>
        <h1 className="section-title">Создание нового резюме</h1>
        <div className="cv-add">
          <h4 className="cv-description">
            Для поиска подходящих вакансии для вас, вы должны заполнить
            подробное резюме о себе, либо загрузить готовое резюме в форматах
            pdf, doc, docx. Для начала, ответьте на следущие вопросы и выберите
            дальнейщее действие.
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
          <div>
            <button>
              <img />
              Прикрепить резюме
            </button>
            <button>Отправить</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
