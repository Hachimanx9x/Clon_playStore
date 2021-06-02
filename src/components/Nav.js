import logo from "../assets/img/logops.png";
function Nav({ menu }) {
  return (
    <div className="o-Nav">
      <div className="o-nav-container">
        <img src={logo} alt="logo_playstation" />

        <div className="o-links">
          {menu.map((ele, id) => (
            <a
              className={
                ele.active
                  ? "o-link o-link-menu o-link-act"
                  : "o-link o-link-menu "
              }
              key={id}
              href={ele.url}
            >
              {ele.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Nav;
