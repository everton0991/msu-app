'use client';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
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
          <p className='font-bold text-inherit'>
            Random Stuff all in one Place
          </p>
        </Link>
      </NavbarBrand>

      <NavbarContent justify='end'>
        <NavbarItem>
          <Link color='foreground' href='#'>
            About
          </Link>
        </NavbarItem>

        <SignedOut>
          <NavbarItem className='hidden lg:flex'>
            <SignInButton mode='modal' />
          </NavbarItem>
        </SignedOut>

        <SignedIn>
          <NavbarItem className='hidden lg:flex'>
            <UserButton />
          </NavbarItem>
        </SignedIn>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
