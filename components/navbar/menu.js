import * as React from 'react';
import NavLink from '../utils/activeLink';

export default function BasicMenu() {
  return (
    <div>
      <NavLink href="/">About</NavLink>
      <NavLink href="#services">Services</NavLink>
      <NavLink href="#pricing">Pricing</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </div>
  );
}
