import * as React from 'react';
import styles from '../../styles/menu.module.css';

function ActiveLink({ children, href, current, click }) {
  return (
    <a
      href={href}
      onClick={click}
      className={`${styles.link} ${current == href ? styles.linkActive : ''}`}
    >
      {children}
    </a>
  );
}

export default ActiveLink;
