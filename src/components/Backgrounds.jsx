import React, {useCallback} from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


function Links() {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
      }, []);

  return (
    <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesInit}
        width={'100vw'}
        height={'100vh'}
        options={{
          background: {
            color: {
              value: "#0d0d0d",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "grab",
                parallax: {
                  enable: true,
                  force: 60,
                  smooth: 10
                }
              },
              mode: {
                push: {
                  quantity: 0,
                },
                grab: {
                  duration: 0.1,
                  distance: 50,
                },
              },
            },
          },
          particles: {
            color: {
              value: "#f77839",
            },
            links: {
              color: {
                value: "#fff",
              },
              enable: true,
              width: 1,
              opacicty: 1,
              distance: 130,
            },
            move: {
              enable: true,
              direction: "none",
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: true,
            },
            collisions: {
              enable: true,
            },
            number: {
              value: 65,
              density: {
                enable: true,
                area: 600,
              },
            },
            shape: {
              type: "circle",
            },

            size: {
              min: 1,
              max: 3,
            },
          },
          detectRetina: true,
        }}
      />
  )
}

function Nasa() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  return (
    <>
    <Particles 
    id='tsparticles'
    init={particlesInit}
    loaded={particlesInit}
    options={{
      background: {
        color: {
          value: '#000'
        }
      }
    }}
    
    />
    </>
  )
  
}

export {Links, Nasa}
