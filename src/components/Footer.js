import { IoGlobeSharp } from "react-icons/io5";
function Footer({ footer }) {
  return (
    <div className="o-footer">
      <div className="o-container-footer">
        <div className="o-footer-header">
          <img src={footer.img} alt="logo PS" />
          <h4>
            <pan>
              <IoGlobeSharp size="25" className="icon" />
            </pan>
            País/región:{footer.region}
          </h4>
        </div>
        <div className="o-footer-body">
          <div className="o-footer-colum">
            {footer.legal.map((ele, idx) => (
              <a key={idx} href={ele.url}>
                {ele.title}
              </a>
            ))}
          </div>
          <div className="o-footer-colum">
            {footer.support.map((ele, idx) => (
              <a key={idx} href={ele.url}>
                {ele.title}
              </a>
            ))}
          </div>
          <div className="o-footer-colum">
            {footer.socialMedia.map((ele, idx) => (
              <a key={idx} href={ele.url}>
                {ele.title}
              </a>
            ))}
          </div>
        </div>
        <p>{footer.copyright}</p>
      </div>
    </div>
  );
}
export default Footer;
