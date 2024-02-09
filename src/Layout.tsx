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
          <Link color='foreground' href='/learn'>
            Learn
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='/kanji'>
            Kanji
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    <main className='max-w-[1024px] mx-auto mt-4'>
      <Outlet />
    </main>
  </>
);

export { Layout };
