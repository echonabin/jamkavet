import React from "react";
import "./sass/index.scss";
import HeadingButton from "../../../../../components/Buttons/HeadingButton";

const ItemPage = () => {
  return (
    <div className='page_container'>
      <div className='__headcard'>
        <a href='/'>
          <div className='_content'>
            <div className='_title'>
              <h3>Title here</h3>
              <span>Sep 22, 2020</span>
              <a href='/' className='_author'>
                <p class='name'>Admin</p>
                <img
                  src={require("../../../../../static/Icons/mankakura.png")}
                  alt='icon'
                />
              </a>
            </div>
            <img
              src={require("../../../../../static/Backgrounds/naturedawn.jpg")}
              alt='Thumbnail'
            />
          </div>
        </a>
      </div>
      <div className='featuredcards'>
        <div className='card'>Suppose the card</div>
        <div className='card'>Suppose the card</div>
        <div className='card'>Suppose the card</div>
        <div className='card'>Suppose the card</div>
      </div>
      <div className='lastcards'>
        <div className='bigcard'>
          <div className='card'>Suppose a card</div>
        </div>
        <div className='smallcards'>
          <div className='card'>1st</div>
          <div className='card'>2nd</div>
          <div className='card'>3rd</div>
          <div className='card'>4th</div>
        </div>
      </div>
      <div className='morecards'>
        <div className='card'>more</div>
      </div>
    </div>
  );
};

export default ItemPage;
