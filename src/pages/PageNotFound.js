import React from 'react';
import PageNotFoundImage from '../assets/images/PageNotFound.jpg';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { useEffect } from 'react';

export const PageNotFound = () => {
  useEffect(() => {
    document.title = `Page Not Found / Cinemate`;
  });
  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center my-2'>
          <p className='text-7xl text-gray-70 my-10 dark:text-white'>ERROR 404, Sorry! No Page Found</p>
          <img className='rounded max-w-lg' src={PageNotFoundImage} alt='Page Not Found' />
        </div>
        <div className='flex justify-center my-4'>
          <Link to='/'>
            <Button>
              Back to CineInfo
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
