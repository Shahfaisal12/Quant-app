import React from 'react'
import Hero from '../elements/Hero'
import Blockchain from '../pages/Blockchain'
import Designfuture from './Designfuture'
import Developers from './Developers'
import Empowered from './Empowered'
import Explorefeature from './Explorefeature'
// import Featurefinance from './Featurefinance'
import Flowsection from './Flowsection'
import Priopbability from './Priopbability'
import Reducscost from './Reducscost'

const Home = () => {
  return (
    <>
    <Hero />
    <Blockchain />
    <Empowered />
    <Reducscost />
    <Flowsection />
    <Explorefeature />
    <Priopbability />
    <Developers />
    <Designfuture />
    </>
  )
}

export default Home