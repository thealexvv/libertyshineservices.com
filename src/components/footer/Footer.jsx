import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa6';
import { FaLocationDot } from 'react-icons/fa6';
import { useMediaQuery } from '@mui/material';
import { floridaTelNumber } from '../../App';
import { newJerseyTelNumber } from '../../App';

const Footer = () => {
  const isAboveMediaScreen = useMediaQuery('(min-width:1160px)');
  return (
    <footer className="w-full block ml-auto mr-auto md:flex justify-between gap-7 py-5  px-10 md:px-16 bg-black">
      <div>
        <Link
          className="cursor-pointer font-bold text-lg text-secondary-400"
          to="/"
        >
          LIBERTY SHINE SERVICES
        </Link>
      </div>
      {isAboveMediaScreen && (
        <div className="md:flex">
          {/* <IoLogoCodepen fontSize={40} style={{ marginRight: 10 }} />{' '} */}
          <span className="flex text-white font-bold">
            <FaLocationDot
              fontSize={25}
              style={{
                marginRight: 10,
              }}
              fill="rgb(243, 189, 28)"
            />{' '}
            MANATEE, SARASOTA, HILLSBOROUGH COUNTIES & NEW JERSEY
          </span>
        </div>
      )}
    </footer>
  );
};

export default Footer;
