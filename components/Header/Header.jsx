// @ts-check
import { useState } from 'react';
import {
  Badge,
  Collapse,
  Container,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  UncontrolledDropdown,
} from 'reactstrap';
import Notification from './Notification';
import Link from 'next/link';
import NavLink from '../NavLink';

const Header = ({ requests = [] }) => {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!isOpen);

  return (
    <Navbar
      color="dark"
      dark
      expand="md"
      style={{
        marginBottom: '12px',
      }}
    >
      <Container>
        <Link href="/">
          <NavbarBrand href="/">Carpooling</NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/requests">
                {requests.length === 0 ? (
                  'Requests'
                ) : (
                  <>
                    Requests <Badge color="danger">{requests.length}</Badge>
                  </>
                )}
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
