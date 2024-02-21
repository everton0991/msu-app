import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';

const Header = () => {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <Link color='foreground' href='/'>
          <p className='font-bold text-inherit'>Music Studies Utility</p>
        </Link>
      </NavbarBrand>

      <NavbarContent justify='end'>
        <NavbarItem>
          <Link color='foreground' href='#'>
            About
          </Link>
        </NavbarItem>

        <NavbarItem className='hidden lg:flex'>
          <Link color='foreground' href='#'>
            Login
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Button as={Link} color='default' href='#' variant='flat'>
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
