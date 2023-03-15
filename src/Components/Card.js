import "../App.css";

export default function Card(item) {
  console.log(item);
  return (
    <div className="card d-flex flex-column">
      <div className="upper-part d-flex align-items-center">
        <img src={item.image} alt="company logo" />
        <div className="d-flex flex-column">
          <h4 className="company-name">{item.companyName}</h4>
          <h5 className="company-location">{item.location}</h5>
        </div>
      </div>
      <h4 className="vacancy-position">{item.jobTitle}</h4>
      <h5 className="vacancy-hours">{item.workingTime}</h5>
      <h5 className="vacancy-summary">{item.description}</h5>
      <h4 className="vacancy-salary">
        {item.salary}₸ <span className="grey-span">/месяц</span>
      </h4>
      <div className="d-flex justify-content-center">
        <button className="vacancy-button">Откликнуться</button>
      </div>
    </div>
  );
}
