import { useRef } from "react";
import Image from "next/image";
import styles from "./Mysection.module.scss";
import Nav from "react-bootstrap/Nav";

export default function Mysection({
  image,
  headline,
  showHeadline,
  showText,
  scrollTo,
  goToSectionRef,
  showArrow,
  pdf,
  showContacts,
  showNav,
}) {
  const headlineRef = useRef();
  const sectionRef = useRef();

  const pdfClick = () => {
    window.open(pdf, "_blank");
  };

  return (
    <div className={styles.section} ref={sectionRef}>
      {showHeadline ? (
        <div className={styles.copy} id="section2">
          <h2 ref={headlineRef}>{headline}</h2>
        </div>
      ) : (
        <div>
          <img
            src={`/images/rasterKW.svg`}
            alt={`KW Wellness Logo `}
            className={styles.logo}
          />
        </div>
      )}
      {showText && (
        <div className={styles.text} id="section3">
          <a onClick={pdfClick}>
            <li>CIVANA June 20-23, 2023</li>
          </a>
          <a>
            <li>Some event in August</li>
          </a>
          <a>
            <li>Some other event this year</li>
          </a>
          <a>
            <li>This other thing</li>
          </a>
          <a>
            <li>Look out for this thing next year!</li>
          </a>
        </div>
      )}
      {showContacts && (
        <div className={styles.contactsContainer} id="section4">
          <div className={styles.contacts}>
            <a href={`mailto:milo@kwwellness.community`}>
              <img
                src="https://i.imgur.com/e3rkSJE.png"
                alt="Milo"
                className={styles.aboutImg}
              />
            </a>
            <p>
              <strong>Milo Miloscia</strong>
            </p>
            <p>Co-Chief Experience Officer</p>
            <p>email: milo@kwwellness.community</p>
          </div>
          <div className={styles.contacts}>
            <a href={`mailto:kimberly@kwwellness.community`}>
              <img
                src="https://i.imgur.com/zuH0abj.png"
                alt="Kimberly"
                className={styles.aboutImg}
              />
            </a>
            <p>
              <strong>Kimberly Guiry</strong>
            </p>
            <p>Co-Chief Experience Officer</p>
            <p>email: kimberly@kwwellness.community</p>
          </div>
        </div>
      )}
      {showNav && (
        <div className={styles.nav}>
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="#section2">about</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#section3">events</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#section4">contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      )}
      <Image src={image} layout={`fill`} />
      {showArrow && (
        <button
          className={styles.downarrow}
          onClick={() => scrollTo(goToSectionRef)}
        ></button>
      )}
    </div>
  );
}
