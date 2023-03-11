import "../App.css";

export default function Card({ item }) {
  return (
    <div className="card d-flex flex-column">
      <div className="upper-part d-flex align-items-center">
        <img src={require(`../Media/Apple.svg`)} alt="company logo" />
        <div className="d-flex flex-column">
          <h4 className="company-name">Apple Inc.</h4>
          <h5 className="company-location">Сан Диего, США</h5>
        </div>
      </div>
      <h4 className="vacancy-position">Главный дизайнер</h4>
      <h5 className="vacancy-hours">Полная занятость</h5>
      <h5 className="vacancy-summary">
        Поспособствуем созданию сплочённой команды профессионалов, а также
        оказываем услуги по оценке персонала
      </h5>
      <h4 className="vacancy-salary">
        250 000₸ <span className="grey-span">/месяц</span>
      </h4>
      <div className="d-flex justify-content-center">
        <button className="vacancy-button">Откликнуться</button>
      </div>
    </div>
  );
}
