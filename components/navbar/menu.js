import * as React from 'react';
import NavLink from '../utils/activeLink';

export default function BasicMenu() {
  const [current, setCurrent] = React.useState(null);
  const clickHandler = e => {
    e.preventDefault();
    setCurrent(e.target.attributes[0].value);
  };

  return (
    <div>
      <NavLink click={clickHandler} link="#services" current={current}>
        Services
      </NavLink>
      <NavLink click={clickHandler} link="#pricing" current={current}>
        Pricing
      </NavLink>
      <NavLink click={clickHandler} link="#contact" current={current}>
        Contact
      </NavLink>
    </div>
  );
}
