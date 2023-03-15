import "../App.css";
import DOWN_ARROW from "../Media/DownArrow.svg";
import { data } from "./CompaniesArray";
import Card from "./Card";

export default function LastVacancies() {
  return (
    <section className="d-flex flex-column">
      <h1 className="section-title">Последние вакансии</h1>
      <div className="last-vacancy-body d-flex flex-column">
        <div className="d-flex">
          <h4 className="last-vacancy-grid-title">Самые последние вакансии</h4>
          <img src={DOWN_ARROW} alt="arrow" />
        </div>
        <div className="last-vacancy-grid">
          {data.map((item, index) => (
            <Card
              style={{ height: "300px", width: "250px" }}
              key={index}
              {...item}
            />
          ))}
        </div>
        <div className="vacancy-page-button d-flex justify-content-center">
          <button className="show-more-button">Показать больше</button>
        </div>
      </div>
    </section>
  );
}
