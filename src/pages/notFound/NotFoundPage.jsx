import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="block ml-auto mr-auto text-center h-screen w-screen text-black py-44">
      <h1 className="text-4xl mb-16">The page is not found!</h1>
      <Link to="/" className="text-2xl text-black hover:underline">
        Go home
      </Link>
    </div>
  );
};

export default NotFoundPage;
