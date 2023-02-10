import React from "react";
import {Links} from './Backgrounds';
import frontImg from './../resources/desk.png';
import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, SpotLight } from "@react-three/drei";
import {HandleSwipes, ContactClick} from './About';
export default function HomePage() {
  return (
    <>
    <div className="main">
    <Links />
        <h1 className="logo">
          Dev<span>Joseph <Mogavero></Mogavero></span>
        </h1>
        <nav>
          <ul>
            <a href="#About" className="icons">About <i class="fa-solid fa-user-tie"></i></a>
            <a href="#About" onClick={HandleSwipes} className="icons">Skills <i class="fa-solid fa-screwdriver-wrench"></i>
            </a>
            <a href="#About" onClick={ContactClick} className="icons">Contacts <i class="fa-solid fa-mobile-button"></i>
            </a>
            <a href="/" className="icons">Projects <i class="fa-solid fa-list-check"></i>
            </a>
            <a href="/" className="icons">Services <i class="fa-solid fa-server"></i>
            </a>
          </ul>
        </nav>
        <div className="content">
          <h2 className="arrowL arrow"> &#x250C; </h2>
          <br />
          <h4>Hello, I'm </h4>
          <h1>Joseph Mogavero</h1>
          <h3>I'm a Developer!</h3>
          <h2 className="arrowR arrow"> &#x2518; </h2>
          <br />
          <a href="/" download className="download">Download CV<i class="fa-solid fa-download"></i></a>
        </div>

      <div className="imges">
        <Canvas style={{position: 'absolute', width: '1450px', height: '680px', left: '27%', top: '7%'}}>
          <mesh> 
          <ambientLight intensity={1.2} />
          <SpotLight intensity={3} position={[-30, 0, 0]} />
          <directionalLight intensity={1} color="0xffffff"/>
        <Sphere visible scale={2} args={[1.2, 500, 600]}>
        <MeshDistortMaterial
        style={{height: '670px'}}
        color={'#d95b00'}
        roughness={0.4}
        distort={0.3}
        speed={1.5}
        />
        </Sphere>
        </mesh>
        </Canvas>
           <img src={frontImg} alt="Front Img" className="frontimg" />
      </div>
    </div>
    </>
  );
}
