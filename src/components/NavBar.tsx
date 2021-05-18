import AppsIcon from "@material-ui/icons/Apps";
import BackspaceIcon from "@material-ui/icons/Backspace";
import { useDispatch } from "react-redux";
import { changeTitle } from "../actions";
import "../css/navBar.css";
import { Link } from "react-router-dom";

type NavBarProps = {
  pages: string[];
  curPage: string;
};

// This is a static component
function NavBar(props: NavBarProps) {
  const dispatch = useDispatch();

  /**
   * if we click the menu button, display all tabs
   * and hide menu button
   */
  const handleClickMobileCta = () => {
    let panel: HTMLElement | null = document.querySelector(
      "#mobile-cta-panel-container"
    );
    panel?.setAttribute("style", "display: block");

    let icon: HTMLElement | null = document.querySelector("#mobile-cta-icon");
    icon?.setAttribute("style", "display: none");
  };

  /**
   * if we click the close menu button, hide all tabs
   * and display menu button
   */
  const handleClickMobileCtaClose = () => {
    let panel: HTMLElement | null = document.querySelector(
      "#mobile-cta-panel-container"
    );
    panel?.setAttribute("style", "display: none");

    let icon: HTMLElement | null = document.querySelector("#mobile-cta-icon");
    icon?.setAttribute("style", "display: block");
  };

  /**
   * when window size larget than 700, reset inline style
   */
  window.onresize = () => {
    let w = document.documentElement.clientWidth;
    if (w > 700) {
      let panel: HTMLElement | null = document.querySelector(
        "#mobile-cta-panel-container"
      );
      panel?.removeAttribute("style");

      let icon: HTMLElement | null = document.querySelector("#mobile-cta-icon");
      icon?.removeAttribute("style");
    }
  };

  const handleClickTitle = (title: string) => {
    dispatch(changeTitle(title));
  };

  return (
    <nav>
      <div className="nav-icon nav-item">
        Hello<span className="nav-sub-icon">Movies</span>
      </div>
      <div className="nav-pages nav-item">
        <div id="mobile-cta-panel-container">
          <div id="mobile-cta-panel">
            <BackspaceIcon
              id="mobile-cta-close"
              onClick={handleClickMobileCtaClose}
            />
            {props.pages.map((item: string, index: number) => {
              return (
                <Link
                  to={item === "Home" ? "/" : "/" + item}
                  key={index}
                  className={
                    props.curPage === item
                      ? "page-title-highlight"
                      : "page-title-normal"
                  }
                  onClick={() => handleClickTitle(item)}
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
        <AppsIcon id="mobile-cta-icon" onClick={handleClickMobileCta} />
      </div>
    </nav>
  );
}

export default NavBar;
