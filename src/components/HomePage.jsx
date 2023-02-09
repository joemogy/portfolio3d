import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function HomePage() {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, [])

    const particlesLoaded = useCallback(async engine => {
        console.log(engine)
        await loadFull(engine)
    })

    return (
        <div className="main">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#202020",
                        },
                    },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                        },
                        modes: {
                            push: {
                                quantity: 3,
                            },
                            repulse: {
                                duration: 0.6,
                                distance: 199,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: {
                                value: "#ff1122", 
                            },
                            enable: true,
                            width: 1,
                            opacity: 1,
                            distance: 233,
                           
                        },
                        move: {
                            enable: true,
                            direction: "none",
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        collisions: {
                            enable: true,
                        },
                        number: {
                            value: 99,
                            density: {
                                enable: true,
                                area: 800,
                            },
                        },
                        shape: {
                            type: "torus",
                            type: "circle",
                            
                        },
                        size: {
                            min: 1,
                            max: 6,
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
}
