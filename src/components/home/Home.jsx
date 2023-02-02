import React from 'react'
import Adwards from './awards/Awards'
import Featured from './fearured/Featured'
import Hero from './Hero/Hero'
import Recent from './recent/Recent'
import Location from './location/Location'
import Team from './team/Team'
import Price from './price/Price'

const Home = () => {
    return (
        <>
            <Hero />
            <Featured />
            <Recent />
            <Adwards />
            <Location />
            <Team />
            <Price />
        </>
    )
}

export default Home