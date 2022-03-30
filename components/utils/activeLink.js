import * as React from 'react';
import styles from '../../styles/menu.module.css';
import { Link } from 'react-scroll';

function ActiveLink({ children, link, current, click }) {
  return (
    <Link to={link} smooth={true}>
      <button
        link={link}
        onClick={click}
        className={`${styles.link} ${current == link ? styles.linkActive : ''}`}
      >
        {children}
      </button>
    </Link>
  );
}

export default ActiveLink;
