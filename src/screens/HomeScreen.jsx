import React from 'react'
import { BannerSlider } from '../components/first_page/BannerSlider';
import { Navbar_2 } from '../components/second_page/Navbar_2'
import { Navbar } from '../components/first_page/Navbar'
import { Home_main } from '../components/first_page/Home_main';
import { Footer } from '../components/first_page/Footer';
import { Second_page } from '../components/second_page/Second_page';
import For_company from '../components/forms/For_company';

export const HomeScreen = () => {
  return (
    <>
        <div className='homeScreen'>
            <Navbar_2/>
            {/* <BannerSlider /> */}
            {/* <Home_main/> */}
            <Second_page/>
            <Footer/>
            {/* <For_company/> */}
        </div>
    </>
  );
}
