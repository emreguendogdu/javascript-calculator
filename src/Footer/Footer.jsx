import "./Footer.css"
import { ReactComponent as GitHubLogo } from "../assets/icons/github.svg"
import { ReactComponent as LinkedinLogo } from "../assets/icons/linkedin.svg"
export default function Footer() {
  function hideShowLinks() {
    const linksWrapper = document.getElementById("links-wrapper")

    if (linksWrapper.classList.contains("hide")) {
      linksWrapper.classList.replace("hide", "show")
    } else {
      linksWrapper.classList.replace("show", "hide")
    }
  }
  return (
    <footer>
      <div className="text" onClick={() => hideShowLinks()}>
        {`<OG />`}
        <div id="links-wrapper" className="hide">
          <a
            href="https://github.com/osmangund"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubLogo className="icon icon-github" />
          </a>
          <a
            href="https://linkedin.com/in/osmangund"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinLogo className="icon icon-linkedin" />
          </a>
        </div>
      </div>
    </footer>
  )
}
