import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBCarousel showControls showIndicators touch={false}>
      <MDBCarouselItem itemId={1}>
        <img src='https://students.1fbusa.com/hubfs/25%20Ways%20to%20Volunteer%20in%20Your%20Community.jpg' className='d-block w-100 carousel--image' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='https://img2.storyblok.com/fit-in/1200x630/f/90801/1200x630/e0a527025d/volunteer-share-img.png' className='d-block w-100 carousel--image' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='https://www.signupgenius.com/cms/socialMediaImages/volunteering-ideas-tips-business-facebook-1200x630.png' className='d-block w-100 carousel--image' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
  );
}