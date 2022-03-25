import * as React from 'react';
import NavLink from '../utils/activeLink';

export default function BasicMenu() {
  const [current, setCurrent] = React.useState('/');
  const clickHandler = e => {
    e.preventDefault();
    setCurrent(e.target.attributes[0].value);
  };

  return (
    <div>
      <NavLink click={clickHandler} href="/" current={current}>
        About
      </NavLink>
      <NavLink click={clickHandler} href="#services" current={current}>
        Services
      </NavLink>
      <NavLink click={clickHandler} href="#pricing" current={current}>
        Pricing
      </NavLink>
      <NavLink click={clickHandler} href="#contact" current={current}>
        Contact
      </NavLink>
    </div>
  );
}
