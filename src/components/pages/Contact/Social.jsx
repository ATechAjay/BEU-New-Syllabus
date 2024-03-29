import style from "./Social.module.css";
const Social = () => {
  return (
    <div className={style["footer-container"]}>
      <footer className={style["footer-section"]}>
        <section className={style["footer-cta"]}>
          <h1 className={style["footer-heading"]}>
            Let&apos;s connect with me
          </h1>
          <ul className={style["footer-link-box"]}>
            <li className={style["link"]}>
              <a href="https://twitter.com/ATechAjay">
                {/* <i className="fa-brands fa-x-twitter"></i> */}
                {/* <i className="fa-brands fa-square-x-twitter"></i> */}
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className={style["link"]}>
              <a href="https://www.instagram.com/atechajay/">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className={style["link"]}>
              <a href="https://www.linkedin.com/in/atechajay/">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li className={style["link"]}>
              <a href="https://www.facebook.com/atechajay/">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li className={style["link"]}>
              <a href="https://github.com/ATechAjay">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className={style["link"]}>
              <a href="https://youtube.com/ATechAjay">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </section>
        <div className={style["footer-author"]}>
          <p>&copy; Made with ❤️ by Ajay Yadav</p>
        </div>
      </footer>
    </div>
  );
};

export default Social;
