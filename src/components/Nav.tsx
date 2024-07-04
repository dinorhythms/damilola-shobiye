'use client';
import { IconButton, List, ListItem } from '@material-tailwind/react';
import Link from 'next/link';
import React from 'react';

const Nav = () => {
  const [openNav, setOpenNav] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  return (
    <nav className='mx-0 lg:mx-0'>
      <div className='containerr mx-autoo flex justify-between items-center'>
        <div className='bg-black px-10 py-5 w-[250px] text-white mb-1'>
          In Memory of (Mrs.) Damilola Shobiye
        </div>
        <div className='hidden lg:flex gap-5'>
          <Link href={'/home'}>
            <span className='font-semibold'>HOME</span>
          </Link>
          <Link href={'/life-of-damilola'}>
            <span className='font-semibold'>LIFE OF DAMILOLA</span>
          </Link>
          <Link href={'/gallery'}>
            <span className='font-semibold'>GALLERY</span>
          </Link>
          <Link href={'/tribute'}>
            <span className='font-semibold'>TRIBUTE/MEMORIES</span>
          </Link>
          <span className='font-semibold'>FUNERAL ARRANGEMENT</span>
        </div>
        <div className='hidden lg:flex items-center gap-3 mx-3'>
          <Link href={'/tribute'}>
            <svg
              width='14'
              height='14'
              className='hidden lg:flex gap-5'
              viewBox='0 0 14 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M6.33331 10.3333H7.66665V7.66668H10.3333V6.33334H7.66665V3.66668H6.33331V6.33334H3.66665V7.66668H6.33331V10.3333ZM6.99998 13.6667C6.07776 13.6667 5.21109 13.4917 4.39998 13.1417C3.58887 12.7917 2.88331 12.3167 2.28331 11.7167C1.68331 11.1167 1.20831 10.4111 0.858313 9.60001C0.508313 8.7889 0.333313 7.92223 0.333313 7.00001C0.333313 6.07779 0.508313 5.21112 0.858313 4.40001C1.20831 3.5889 1.68331 2.88334 2.28331 2.28334C2.88331 1.68334 3.58887 1.20834 4.39998 0.858343C5.21109 0.508343 6.07776 0.333344 6.99998 0.333344C7.9222 0.333344 8.78887 0.508343 9.59998 0.858343C10.4111 1.20834 11.1166 1.68334 11.7166 2.28334C12.3166 2.88334 12.7916 3.5889 13.1416 4.40001C13.4916 5.21112 13.6666 6.07779 13.6666 7.00001C13.6666 7.92223 13.4916 8.7889 13.1416 9.60001C12.7916 10.4111 12.3166 11.1167 11.7166 11.7167C11.1166 12.3167 10.4111 12.7917 9.59998 13.1417C8.78887 13.4917 7.9222 13.6667 6.99998 13.6667ZM6.99998 12.3333C8.48887 12.3333 9.74998 11.8167 10.7833 10.7833C11.8166 9.75001 12.3333 8.4889 12.3333 7.00001C12.3333 5.51112 11.8166 4.25001 10.7833 3.21668C9.74998 2.18334 8.48887 1.66668 6.99998 1.66668C5.51109 1.66668 4.24998 2.18334 3.21665 3.21668C2.18331 4.25001 1.66665 5.51112 1.66665 7.00001C1.66665 8.4889 2.18331 9.75001 3.21665 10.7833C4.24998 11.8167 5.51109 12.3333 6.99998 12.3333Z'
                fill='#0C0C0C'
              />
            </svg>
          </Link>

          <Link href={'/tribute'}>
            <span className=''>SHARE A TRIBUTE/MEMORY</span>
          </Link>
        </div>
        <IconButton
          variant='text'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          className='ml-auto h-6 w-6 mr-3 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
          ripple={false}
          onClick={() => setOpenNav(!openNav)}>
          {openNav ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              className='h-6 w-6'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          )}
        </IconButton>
      </div>
      {openNav && (
        <div>
          <List
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}>
            <Link href={'/home'}>
              <ListItem
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}>
                HOME
              </ListItem>
            </Link>
            <Link href={'/life-of-damilola'}>
              <ListItem
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}>
                LIFE OF DAMILOLA
              </ListItem>
            </Link>
            <Link href={'/gallery'}>
              <ListItem
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}>
                GALLERY
              </ListItem>
            </Link>
            <Link href={'/tribute'}>
              <ListItem
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}>
                TRIBUTE/MEMORIES
              </ListItem>
            </Link>
            <ListItem
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
              FUNERAL ARRANGEMENT
            </ListItem>
          </List>
        </div>
      )}
    </nav>
  );
};

export default Nav;
