import React from 'react'
import Hero from '../components/Hero'
import LearnFromExperts from '../components/LearnFromExperts'
import NewsLetter from '../components/NewsLetter'
import Cards from '../components/Cards'
const Home = () => {
  return (
    <>
    <Hero p="Learn with Us"/>
    <LearnFromExperts/>
    <NewsLetter/>
    <Cards/>
   </>
  )
}

export default Home