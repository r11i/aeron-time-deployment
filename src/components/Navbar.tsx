import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface NavbarProps {
  // links: NavbarLink[];
  image?: string;
  navbarStyles?: string; // Additional Tailwind CSS styles for the navbar
  linkStyles?: string; // Additional Tailwind CSS styles for the links
  user?: any;
  logOut?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({image, navbarStyles, linkStyles, user, logOut }) => {
  
  const [showMyTripsDropdown, setShowMyTripsDropdown] = useState(false);

  const toggleMyTripsDropdown = () => {
    setShowMyTripsDropdown(!showMyTripsDropdown);
  };

  return (
    <nav className={`p-4 ${navbarStyles || ''} max-[580px]:p-2`}>
      <ul className="flex justify-between w-[100%] ">
        <li className={`${linkStyles || ''} relative max-[580px]:text-[14px]`} onClick={toggleMyTripsDropdown} >
          <p className='cursor-pointer'>
            MyTrips
          </p>
          {showMyTripsDropdown && (
            <ul data-testid="my-trips-dropdown" className="absolute bg-[#C2C3CB] text-black p-5 rounded-[20px] rounded-tl-[0px]" style={{ top: '100%', left: '0', width: '300%' }}>
              <li>
                <Link href={'/mytrips'}>My Trips</Link>
              </li>
              <li>
                <Link href={'/mytrips/register'}>Register</Link>
              </li>
              <li>
                <Link href={'/mytrips/history'}>History</Link>
              </li>
            </ul>
          )}
        </li>
        <li className={`${linkStyles || ''} max-[580px]:text-[14px]`}>
          <Link href={'/'} className="flex items-center">
            {image && <Image src={image} alt="logo" width={212} height={69} className='max-[580px]:w-[130px]'/>}
          </Link>
        </li>
        <li className={`${linkStyles || ''} max-[580px]:text-[14px]`}>
          {user ? (
            <a className="flex items-center cursor-pointer" onClick={logOut}>
              Logout
            </a>
          ) : (
            <Link href={'/login'} className="flex items-center">
              Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
