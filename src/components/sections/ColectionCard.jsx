import React from 'react'
import SectionTitle from './SectionTitle'

import "../styles/collections.css"

import CollecionDetails from './CollecionDetails'
const ColectionCard = () => {
  return (
    <>
    <section className="collection_container" id='collection'>
        <SectionTitle description={{title:"Collections", subTitle: "Some Of My Recent Captures"}} />
      <div className="collection_card">
        <CollecionDetails />
      </div>
      </section>
    </>
  )
}

export default ColectionCard
