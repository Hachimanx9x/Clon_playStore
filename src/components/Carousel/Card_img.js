function Card_img({ img, name, price }) {
  return (
    <div className="o-CardImg">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <div className="o-price"> {price}</div>
    </div>
  );
}

export default Card_img;
