import * as React from 'react'
import styles from '../../styles/menu.module.css';

function ActiveLink({ children, link, current, click }) {

  return (
    <button
      link={link}
      onClick={click}
      className={`${styles.link} ${
        current == link
          ? styles.linkActive
          : ''
      }`}
    >
      {children}
    </button>
  )
}

export default ActiveLink;
