import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Featurefinance from '../pages/Featurefinance'

const Base = (props) => {
  return (
    <>
    <Header />
    <div className='mt-5'>
    {props.children}
    </div>
    
    <Featurefinance />
    <Footer />
    </>
  )
}

export default Base