function Lisimg({ imgs }) {
  return (
    <div className="o-lisimg-x">
      {imgs.map((ele, idx) => (
        <img key={idx} src={ele.img} alt={ele.title} />
      ))}
    </div>
  );
}

export default Lisimg;
