import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className='header-upper py-2' >
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-2'>
              <h2>
                <Link className='text-white'>Flash Card</Link>
              </h2>
            </div>
          </div>
        </div>
      </header>
      <header className='header-bottom py-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              
                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-15'>
                    <NavLink to="/">Create New</NavLink>
                    <NavLink to="/">My Flashcard</NavLink>
                  </div>
                </div>
              
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;
