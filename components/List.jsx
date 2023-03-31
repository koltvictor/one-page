import React from 'react'
import styles from "./Mysection.module.scss";

export default function List({ showText, pdf }) {
    const pdfClick = () => {
        window.open(pdf, "_blank");
      };
  return (
    <div>{showText && (
        <div className={styles.li} id="section3">
          <a onClick={pdfClick}>
            <li>CIVANA June 20-23, 2023</li>
          </a>
          <br />
          <a>
            <li>Company Event in August</li>
          </a>
          <br />
          <a>
            <li>Las Vegas End of Year Event</li>
          </a>
          <br />
          <a>
            <li>Costa Rica - Spring 2024</li>
          </a>
          <br />
          <a>
            <li>Portugal - Summer 2024</li>
          </a>
        </div>
      )}</div>
  )
}
