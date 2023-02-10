import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "../css/Homepage.css";


export default function HomePage() {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, [])

    const particlesLoaded = useCallback(async engine => {
        console.log(engine)
        await loadFull(engine)
    })

    return (
        <>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#202020",},},
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",},
                            onHover: {
                                enable: true,
                                mode: "grab",},},
                        modes: {
                            push: {
                                quantity: 3,},
                            grab: {
                                duration: 0.6,
                                distance: 199,},},},
                        particles: {
                            color: {
                                value: "#ffffff",},
                        links: {
                            color: {
                                value: "#ff1122",},
                            enable: true,
                            width: 1,
                            opacity: 1,
                            distance: 166,},
                        move: {
                            enable: true,
                            direction: "none",
                            outModes: {
                                default: "bounce",},
                            random: false,
                            speed: 2,
                            straight: false,},
                        collisions: {
                            enable: true, },
                        number: {
                            value: 33,
                            density: {
                                enable: true,
                                area: 800,},},
                        shape: {
                            type: "torus",
                            type: "circle",},
                        size: {
                            min: 1,
                            max: 6,},},
                        detectRetina: true,}}/>
        

<div className="main">
    <nav>
        <h1 className="logo">Dev <span>Joseph Mogavero</span></h1>
            <ul>
                <li className="icons">Projects</li>
                <li className="icons">About</li>
                <li className="icons">Websites</li>
                <li className="icons">Work</li>
                <li className="icons">Certificates</li>
                <li className="icons">Contact</li>
            </ul>
     </nav>
</div>
</>
    );
}
