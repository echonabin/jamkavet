import React from "react";
import "./Bottombar.css";

const Bottombar = () => {
  const d = new Date();
  return (
    <div>
      <footer className='footer'>
        <div className='social-buttons'>
          <a
            href='https://www.facebook.com/Jamkaabhet/'
            className='social-buttons__button social-button social-button--facebook'
            aria-label='Facebook'>
            <span className='social-button__inner'>
              <i className='fab fa-facebook-f' />
            </span>
          </a>
          <a
            href='/'
            className='social-buttons__button social-button social-button--twitter'
            aria-label='Twitter'>
            <span className='social-button__inner'>
              <i className='fab fa-twitter' />
            </span>
          </a>
          <a
            href='/'
            className='social-buttons__button social-button social-button--instagram'
            aria-label='Instagram'>
            <span className='social-button__inner'>
              <i className='fab fa-instagram' />
            </span>
          </a>
          <a
            href='https://www.youtube.com/channel/UCfLLnnT4jUUBxtUcUqIKPJQ'
            className='social-buttons__button social-button social-button--youtube'
            aria-label='Youtube'>
            <span className='social-button__inner'>
              <i className='fab fa-youtube' />
            </span>
          </a>
        </div>
        &copy; {`Jamkabhet ${d.getFullYear()}`}
      </footer>
    </div>
  );
};

export default Bottombar;
