import React from 'react'
import Services from './Services'
const ServicesDetails = () => {
    const servicedata = [
        {
            title: "Service Charge Card",
            subTitle: "Photography Packge",
            list: {
                list1: "Online photo gallery for easy sharing and downloading",
                list2: "High Quality Photo Album",
            },
            amount: "$100"
        },
        {
            title: "Service Charge Card",
            subTitle: "Videography Packge",
            list: {
                list1: "Online photo gallery for easy sharing and downloading",
                list2: "High Quality Photo Album",
            },
            amount: "$150"
        },
        {
            title: "Service Charge Card",
            subTitle: "Combo Package",
            list: {
                list1: "Online photo gallery for easy sharing and downloading",
                list2: "High Quality Photo Album",
            },
            amount: "$300"
        }
    ]
    return (
        <>
            {servicedata.map((currElem, index) => (
                <Services
                    title={currElem.title}
                    subTitle={currElem.subTitle}
                    list1={currElem.list.list1}
                    list2={currElem.list.list2}
                    amount={currElem.amount}
                    key={index}
                />
            ))}
        </>
    )
}

export default ServicesDetails
