import React from "react";
import "./Bottombar.css";

const Bottombar = () => {
  const d = new Date();
  return (
    <div>
      <footer className='footer'>
        <div className='form_container'>
          <div className='company_detail'>
            <div
              className='icon_contact'
              style={{
                color: "#4a002cc9",
              }}>
              <i className='fas fa-envelope' />
            </div>
            <h1>सम्पर्क</h1>
            <span>इमेल - contact@jamkabhet.com</span>
            <span>सम्पर्क - ९८४६०५३०१४</span>
            <span>ठेगाना - बानेश्वर, काठमाडौं </span>
          </div>
          <div className='line' />
          <div className='story_form'>
            <div className='story_text'>
              <div className='icon_publish'>
                <i className='fas fa-pen-nib' />
              </div>
              <h1>अनुरोध</h1>
              <div className='publish_text'>
                श्रोता र दर्शकको रुची र आग्रहलाई स्वीकार गर्दै विभिन्न
                पत्रपत्रिका र अनलाइनमा प्रकाशित सामग्रीहरु पनि जम्काभेटमा साभार
                गरिरहेको छु। कुनै सामग्रीप्रति तपाईको आपत्ति छ? वा पडकास्ट र
                भिडियो बनाउनका लागि कुनै सामग्री सिफारिस गर्न चाहनुहुन्छ भने
                कृपया contact@jamkabhet.com मा इमेल गर्नुहोला।
              </div>
            </div>
          </div>
          <div className='share_button'>
            {/* Content with button or share ==> to be added */}
            <div className='padding_div' />
          </div>
        </div>
        <div className='social-buttons'>
          <a
            href='https://www.facebook.com/Jamkaabhet/'
            target='_blank'
            rel='noopener noreferrer'
            className='social-buttons__button social-button social-button--facebook'
            aria-label='Facebook'>
            <span className='social-button__inner'>
              <i className='fab fa-facebook-f' />
            </span>
          </a>
          <a
            href='/'
            target='_blank'
            rel='noopener noreferrer'
            className='social-buttons__button social-button social-button--twitter'
            aria-label='Twitter'>
            <span className='social-button__inner'>
              <i className='fab fa-twitter' />
            </span>
          </a>
          <a
            href='/'
            target='_blank'
            rel='noopener noreferrer'
            className='social-buttons__button social-button social-button--instagram'
            aria-label='Instagram'>
            <span className='social-button__inner'>
              <i className='fab fa-instagram' />
            </span>
          </a>
          <a
            href='https://www.youtube.com/channel/UCfLLnnT4jUUBxtUcUqIKPJQ'
            target='_blank'
            rel='noopener noreferrer'
            className='social-buttons__button social-button social-button--youtube'
            aria-label='Youtube'>
            <span className='social-button__inner'>
              <i className='fab fa-youtube' />
            </span>
          </a>
        </div>
        <span> Developed by: echonabin@gmail.com </span>
        &copy; {`Jamkabhet ${d.getFullYear()}`}
      </footer>
    </div>
  );
};

export default Bottombar;
