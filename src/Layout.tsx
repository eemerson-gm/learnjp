import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <Navbar isBordered>
      <NavbarBrand>Hello</NavbarBrand>
      <NavbarContent className='font-bold' justify='end'>
        <NavbarItem>
          <Link color='foreground' href='/'>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='/'>
            Learn
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='/'>
            Kanji
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    <main className='max-w-[1024px] mx-auto'>
      <Outlet />
    </main>
  </>
);

export { Layout };
