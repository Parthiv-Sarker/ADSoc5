import React from 'react'
import SectionA from './SectionA'
import SectionB from './SectionB'
import SectionC from './SectionC'
import SectionD from './SectionD'

const Home = () => {
  return (
    <div className="flex flex-col gap-6">
        <SectionA/>
        <SectionB/>
        <SectionC/>
        <SectionD/>
    </div>
  )
}

export default Home