import React from 'react'
import SectionTitle from './SectionTitle'
import ServicesDetails from './ServicesDetails'
import "../styles/service.css"

const ServicesCard = () => {
  return (
    <>
      <section className="services_section" id="services">
      <SectionTitle description={{ title: "Services", subTitle: "Charges Can be Varry according To The Clients Requirements" }} />
        <div className="services_container">
          <ServicesDetails />
        </div>
      </section>
    </>
  )
}

export default ServicesCard
