import promoimg from "../assets/img/promo.png";
function Banner({ promo }) {
  return (
    <div className="o-container-banner">
      <div className="o-banner">
        <div className="o-info-top-banner">
          <div className="o-info-banner">
            <img src={promoimg} alt="promo" />
            <div className="o-info-indi">
              <p>{promo}</p>
              <button>Ver más</button>
            </div>
          </div>
        </div>
        <div className="o-frame"></div>
      </div>
    </div>
  );
}
export default Banner;
