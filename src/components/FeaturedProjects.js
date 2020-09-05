import React, { useState } from 'react';
import ReactCardCarousel from 'react-card-carousel';
import boilerPlate from "../assets/img/projects/google-materialdesign.png"
import autocoins from "../assets/img/projects/autocoins.png"
import auto from "../assets/img/projects/auto.png"
import wallet from "../assets/img/projects/wallet.png"
import gemaily from "../assets/img/projects/gemaily.png"
import freeresell from "../assets/img/projects/freeresell.png"

const FeaturedProjects = (props) => {
    const [projects] = useState([
        {
            title: "Autocoins",
            photoUrl: autocoins,
            link: "https://autocoins.ng/"
        },
        {
            title: "Wallet",
            photoUrl: wallet,
            link: "https://wallet.justfonez.net/"
        },
        {
            title: "Autocoins Dashboard",
            photoUrl: auto,
            link: "https://autocoins.ng/"
        },
        {
            title: "Gemaily",
            photoUrl: gemaily,
            link: "http://gemaily.com/index.php"
        }, 
        {
            title: "Freeresell",
            photoUrl: freeresell,
            link: "https://freeresell.com/"
        }
    ])

    return (
        <div style={{ position: "relative", marginTop: 160 }}>
            <ReactCardCarousel autoplay={true} autoplay_speed={3000} spread={"wide"}
            >
                {projects.map((project, index) => (
                    <div key={index} className="carousel-card">
                        <a href={project.link} target="_blank" className="btn btn-sm btn-info p-1"><span className="fa fa-angle-right" /></a>
                        <img className="carousel-img clickable" src={`${project.photoUrl || boilerPlate}`} />
                    </div>
                ))}
            </ReactCardCarousel>
        </div>
    )
}
export default FeaturedProjects;