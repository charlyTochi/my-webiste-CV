import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const WorkHistory = (props) => {
    const [history] = useState([
        {
            title: "KIVOS WEBMASTER",
            subtitle: "POSITION: WEB DESIGNER",
            desc: `Maintain the site security 
            Detailed website specifications.Met clients to identify their needs and liaise regularly with them. Register web domain names and facilitate the hosting of other websites and modules. 
            Design the website’s visual imagery and ensure it is in line with company branding policy or clients’ requirements.`,
            duration: "2016 - 2017",
        },
        {
            title: "FRANK AIK TECHNOLOGIES",
            subtitle: "POSITION: PHP DEVELOPER",
            desc: `During my time here, I built and deployed the company’s website http://fatechteam.com/ and also built various kinds of web applications like, http://gemaily.com/ , https://autocoins.ng/, https://freeresell.com,i also built blogs registered domains .`,
            duration: "2018 - JULY 2019",
        },
        {
            title: "EFULL TECHNOLOGY NIGERIA LIMITED",
            subtitle: "POSITION: SOFTWARE DEVELOPER",
            desc: `I was part the development team member that built an e-menu application which would be used by
            restaurants, bars, lounges, etc, to automate the order taking and processing methods. We built
            this application using JAVA and also worked with the device’s SDK to target some device specific
            functions like Using the thermal printer, Smart card reader, Camera for QR code scanning, and
            so on.`,
            duration: "AUGUST 2019 - Present",
        },
        {
            title: "CODESTACK TECHNOLOGIES",
            subtitle: `POSITION: REMOTE SOFTWARE DEVELOPER`,
            desc: `I worked on a couple of web applications, fixing some bugs and adding new functionalities.
            I was tasked with building an application to perform stress testing on other web APIs`,
            duration: "Present",
        },
    ])
    return (
        <>
            <h3 className="white-text align-center font-weight-bold">My Work History</h3>
            <VerticalTimeline>
                {history.reverse().map((job, index) => (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: `rgba(66, 66, 66, 0.31)`, color: '#fff' }}
                        contentArrowStyle={{ borderRight: `7px solid rgba(66, 66, 66, 0.31)` }}
                        date={job.duration}
                        iconStyle={{ background: `rgb(29, 28, 28)`, color: '#fff' }}
                    >
                        <h4 className="vertical-timeline-element-title font-weight-bold">{job.title}</h4>
                        <h5 className="vertical-timeline-element-subtitle">{job.subtitle}</h5>
                        <p>{job.desc}</p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </>
    )
}
export default WorkHistory;