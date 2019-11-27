//Base import
import React from 'react'

//Import components
import ActiveLink from '../ActiveLink/activeLink'

/*styled*/
import WrapperStyle from "./styled";


const Nav = () => (
  <WrapperStyle>
    <ul>
      <li>
        <ActiveLink href="/" activeClassName="active">
          <a>A propos</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink href="/experiences" activeClassName="active">
          <a>Expériences</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink href="/competences" activeClassName="active">
          <a>Compétences</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink href="/whatilike" activeClassName="active">
          <a>Ce que j'aime</a>
        </ActiveLink>
      </li>
    </ul>
  </WrapperStyle>
);

export default Nav
