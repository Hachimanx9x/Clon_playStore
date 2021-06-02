import Cards from "./Card_img";
import Nav from "./Min-nav";
import Slider from "react-elastic-carousel";
function Carouse({ title, link, games }) {
  return (
    <div className="o-carouse">
      <Nav title={title} link={link} />

      <Slider itemsToShow={5} pagination={false} showArrows={true}>
        {games.map((ele, idx) => (
          <Cards key={idx} img={ele.img} name={ele.title} price={ele.price} />
        ))}
        <a className="o-all-games" href={link}>
          Ver todos
        </a>
      </Slider>
    </div>
  );
}

export default Carouse;
/** 
 *   <div className="o-container-carosel">
        {games.map((ele, idx) => (
          <Cards key={idx} img={ele.img} name={ele.title} price={ele.price} />
        ))}
        <a className="o-all-games" href={link}>
          Ver todos
        </a>
      </div>

      <Slider {...settings}>
         {games.map((ele, idx) => (
          <Cards key={idx} img={ele.img} name={ele.title} price={ele.price} />
        ))}
        <a className="o-all-games" href={link}>
          Ver todos
        </a>
      </Slider>
*/
