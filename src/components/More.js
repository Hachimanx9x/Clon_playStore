function More({ title, imgs }) {
  return (
    <div className="o-More">
      <h3 className="o-mintitle">{title}</h3>
      <div className="o-more-imgs">
        {imgs.map((ele, i) => (
          <img key={i} src={ele.img} alt={ele.title} />
        ))}
      </div>
    </div>
  );
}

export default More;
