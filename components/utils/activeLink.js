import { useRouter } from 'next/router';
import styles from '../../styles/menu.module.css';

function ActiveLink({ children, href }) {
  const router = useRouter();

  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${styles.link} ${
        router.asPath == `${href !== '/' ? '/' : ''}${href}`
          ? styles.linkActive
          : ''
      }`}
    >
      {children}
    </a>
  )
}

export default ActiveLink;
