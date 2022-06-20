import React from 'react'
import Banner from '../slider.js/Slider' 
import Header from '../../pages/Navbar/Navbar';
import Section from '../Section/Section'
import Footer from '../../pages/Footer/Footer'
import Card1 from '../Card/Card'
import CardSection from '../CardSection/CardSection';
import Section2 from '../Section2/Section2'
import SliderSection from '../SliderSection/SliderSection';
import ButtonSlider from '../ButtonSlider/ButtonSlider'
import CardSlider from '../CardSlider/CardSlider'
import LogoSlider from '../LogoSlider/LogoSlider';
const Home = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <Section/>
      <ButtonSlider/>
      {/* <SliderSection/> */}
      <CardSection/>
      <CardSlider/>
      <LogoSlider/>
      <Section2/>
      {/* <Footer/> */}
    </>
  )
}

export default Home
