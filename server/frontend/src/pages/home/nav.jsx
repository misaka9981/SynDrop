import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Nav = styled.nav`
  text-align: center;
  > ul {
    display: flex; border-top: 1px solid ${({ theme }) => theme.borderColor}; 
    border-left: 1px solid ${({ theme }) => theme.borderColor};
    > li { flex-grow: 1; border-bottom: 1px solid #333;
      border-right: 1px solid ${({ theme }) => theme.borderColor};
      > a { display: block; padding: 8px 0; 
        &.selected{ background: ${({ theme }) => theme.highlightColor} }
      }
    }
  } 
`;
export const nav = (
  <Nav>
    <ul>
      <li>
        <NavLink to="/message" activeClassName="selected">
          Message
        </NavLink>
      </li>
      <li>
        <NavLink to="/file" activeClassName="selected">
          File
        </NavLink>
      </li>
      <li>
        <NavLink to="/screenshot" activeClassName="selected">
          Picture
        </NavLink>
      </li>
    </ul>
  </Nav>
);
