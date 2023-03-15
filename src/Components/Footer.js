import "../App.css";
import LOGO_FOOTER from "../Media/лого.svg";
import FB_LOGO from "../Media/fb.svg";
import IG_LOGO from "../Media/inst.svg";

export default function Footer() {
  return (
    <footer>
      <div className="top d-flex justify-content-between">
        <img src={LOGO_FOOTER} alt="logo" />
        <div>
          <h6 className="sign-to-mailing-list">Подписаться на рассылку</h6>
          <div className="footer-container d-flex flex-row align-items-center">
            <input
              className="footer-input"
              type="text"
              placeholder="Ваш email"
            />
            <button className="footer-submit-button" type="submit">
              Подписаться
            </button>
          </div>
        </div>
      </div>
      <div className="middle d-flex justify-content-between">
        <button className="header-btn apply-btn">Подать заявку</button>
        <div className="footer-buttons d-flex">
          <button className="header-btn white-font">Главная</button>
          <button className="header-btn white-font">Ищу работу</button>
          <button className="header-btn white-font">Нужен сотрудник</button>
          <button className="header-btn white-font">Вакансии</button>
          <button className="header-btn white-font">О нас</button>
        </div>
      </div>
      <div className="bottom d-flex justify-content-between align-items-center">
        <p className="rights-text">© 2023 • PeoplePro • All rights reserved</p>
        <div className="sm-buttons d-flex">
          <button>
            <img src={FB_LOGO} alt="fb logo" />
          </button>
          <button>
            <img src={IG_LOGO} alt="ig logo" />
          </button>
        </div>
      </div>
    </footer>
  );
}
