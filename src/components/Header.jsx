import React from 'react'

const Header = () => {
  return (
    <div className=''>
      <div className="headercontainer">
        <header id="header" className="container d-flex justify-content-between align-items-center px-5">
          <div>
            <a> <img id="logo" src="./images/images.png" alt="spotify-logo" /></a>
          </div>
          <div className>
            <ul id="headerlist" className="d-flex align-items-center gap-4 text-white">
              <a><li className="headerlistitem fw-bold">Premium</li></a>
              <a><li className="headerlistitem fw-bold">Support</li></a>
              <a>
                <li className="download headerlistitem fw-bold me-3">Download</li></a>
              <div className="vertical-line" />
              <a>
                <li className="headerlistitem signupcolor fw-bold ms-2">
                  Sign up
                </li></a>
              <a> <li className="headerlistitem signupcolor fw-bold">Log in</li></a>
            </ul>
          </div>
        </header>
      </div>
    </div>


  )
}

export default Header