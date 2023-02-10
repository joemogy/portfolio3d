import React, { useRef } from "react";
import * as THREE from "three";
import {
  OrbitControls,
  SpotLight,
  Sphere,
  Environment,
  Lightformer,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const HandleSwipes = () => {
  let info = document.getElementById("info");
  info.style.transition = ".9s all ease-in-out";
  info.style.transform = " translateX(250%)";
  info.style.opacity = 0;
  let butn = document.getElementById("left");
  butn.style.transition = ".4s ease";
  butn.style.opacity = 1;
  let skil = document.getElementById("skills");
  skil.style.transition = "1s linear";
  skil.style.transform = "translateX(0)";
  skil.style.opacity = 1;
  let cont = document.getElementById("right");
  cont.style.opacity = 0;
  let contactR = document.getElementById("contactRight");
  contactR.style.transform = "translateX(0)";
};
const VisibleSwipes = () => {
  let info = document.getElementById("info");
  info.style.transition = ".9s all ease-in-out";
  info.style.transform = "translate(0%, 0%)";
  info.style.opacity = 1;
  let butn = document.getElementById("left");
  butn.style.transition = ".4s ease";
  butn.style.opacity = 0;
  let right = document.getElementById("right");
  right.style.transition = ".4s all ease";
  right.style.opacity = 1;
  let skil = document.getElementById("skills");
  skil.style.transition = "1s linear";
  skil.style.transform = "translateX(-250%)";
  skil.style.opacity = 0;
  let cont = document.getElementById("right");
  cont.style.opacity = 1;
  let contactR = document.getElementById("contactRight");
  contactR.style.transform = "translateX(400%)";
};

const ContactClick = () => {
  let main = document.getElementById("contact");
  main.style.transition = ".6s all ease";
  main.style.transform = "translateX(0)";
  main.style.opacity = 1;
  let skil = document.getElementById("skills");
  skil.style.transition = "1s linear";
  skil.style.transform = "translateX(450%)";
  skil.style.opacity = 0;
  let contactR = document.getElementById("contactRight");
  contactR.style.opacity = 0;
  contactR.style.transform = 'translateX(300px)';
  let cont = document.getElementById("left");
  cont.style.opacity = 0;
  let contactL = document.getElementById("contactLeft");
  contactL.style.opacity = 1;
  contactL.style.transform = "translateX(0)";
  let info = document.getElementById('info');
  info.style.transform = 'translateX(-400%)';
  info.style.opacity = 0;
};

const ContactLeft = () => {
  let skil = document.getElementById("skills");
  skil.style.transform = "translateX(0)";
  skil.style.opacity = 1;
  let main = document.getElementById("contact");
  main.style.transition = ".6s all ease";
  main.style.transform = "translateX(-400%)";
  main.style.opacity = 0;
  let contactR = document.getElementById("contactRight");
  contactR.style.transform = "translateX(0)";
  contactR.style.opacity = 1;
  let contactL = document.getElementById("contactLeft");
  contactL.style.opacity = 0;
  contactL.style.transform = "translateX(-400%)";
  let cont = document.getElementById("left");
  cont.style.opacity = 1;
};

function Balls(props) {
  const ref = useRef();
  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(80));

  return (
    <>
      <mesh {...props} ref={ref}>
        <Sphere visible args={[1.1, 64, 64]} position={[x, y, z]}>
          <meshStandardMaterial
            color={Math.random() * 0xffffff}
            roughness={0.3}
          />
        </Sphere>
      </mesh>
    </>
  );
}

export default function About() {
  return (
    <>
      <div className="mainContainer" id="About">
        <div className="containerInfo" id="info">
          <img
            src="https://joemogy.ca/JoeAI.png"
            alt="My logo"
            className="image"
          />
          <h1>
            About <span>Me</span>{" "}
          </h1>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            necessitatibus aliquam officia recusandae dolorem, labore animi
            tempora iusto ea suscipit quos. Illo, eveniet perspiciatis. Quidem,
            recusandae repellendus harum sapiente suscipit illo tempore
            repudiandae sed natus inventore rerum! Debitis deserunt perferendis
            impedit velit, reiciendis nam repudiandae? Officiis, similique minus
            cumque maiores aliquam aperiam voluptatem numquam animi consectetur
            dolore nihil quam exercitationem temporibus esse aspernatur ipsum
            culpa quia, ullam eum sapiente alias. Eum perspiciatis quam earum
            fugit mollitia beatae inventore. Qui tempora ipsum voluptas non,
            labore facilis ducimus corporis? Cupiditate quae nulla, nesciunt
            natus nihil possimus ut inventore a sit fugit itaque.
          </h3>
        </div>

        <div className="containerInfo" id="skills">
          <ul>
            <h1>
              SKI<span>LLS</span>
            </h1>
            <li>
              HTML | <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <h6>Expert</h6>
            </li>
            <li>
              CSS | <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <h6>Expert</h6>
            </li>
            <li>
              JavaScript | <span></span>
              <span></span>
              <span></span>
              <span></span>
              <h6>Experienced</h6>
            </li>
            <li>
              REACTJs | <span></span>
              <span></span>
              <span></span>
              <h6>Experienced</h6>
            </li>
            <li>
              MERN | <span></span>
              <span></span>
              <h6>Average</h6>
            </li>
            <li>
              PYTHON | <span></span>
              <span></span>
              <span></span>
              <span></span>
              <h6>Average</h6>
            </li>
            {/* THese are my skills */}
          </ul>

          <ul>
            <h1>
              Lang<span>uages</span>
            </h1>
            <li>
              English | <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <h6>Native speaker</h6>
            </li>
            <li>
              JavaScript | <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <h6>Native speaker</h6>
            </li>
            <li>
              Python | <span></span>
              <span></span>
              <span></span>
              <span></span>
              <h6>Average</h6>
            </li>
            <br /> <br /> <br /> <br /> <br /> <br /> <br />
          </ul>
        </div>

        <div className="containerInfo" id="contact">
        <h1>-Contact <span>Me-</span></h1>
      <div className="social">
            <a href="/"><i class="fa-brands fa-instagram"></i><h6>Instagram</h6></a>
            <a href="/"><i class="fa-brands fa-telegram"></i><h6>Telegram</h6></a>
            <a href="/"><i class="fa-brands fa-github"></i><h6>Github</h6></a>
            <a href="/"><i class="fa-brands fa-google"></i><h6>Google</h6></a>
            <a href="/"><i class="fa-brands fa-youtube"></i><h6>YouTube</h6></a>
            <a href="/"><i class="fa-brands fa-whatsapp"></i><h6>WhatsApp</h6></a>
            <a href="/"><i class="fa-brands fa-twitter"></i><h6>Twitter</h6></a>
            <a href="/"><i class="fa-brands fa-linkedin"></i><h6>Linkedin</h6></a>
          </div>
        </div>
        <span
          title="Skills"
          id="right"
          className="rightBtn"
          onClick={HandleSwipes}
        >
          <i className="fa-solid fa-circle-right"></i>
        </span>
        <span
          title="Contacts"
          className="rightBtn contactBtn"
          id="contactRight"
          onClick={ContactClick}
        >
          <i className="fa-solid fa-circle-right"></i>
        </span>

        <span
          title="About"
          className="leftBtn"
          id="left"
          onClick={VisibleSwipes}
        >
          <i className="fa-solid fa-circle-left"></i>
        </span>
        <span
          title="Skills"
          className="leftBtn contactBtn"
          id="contactLeft"
          onClick={ContactLeft}
        >
          <i className="fa-solid fa-circle-left"></i>
        </span>

        <Canvas>
          <ambientLight />
          <directionalLight intensity={0.6} position={[10, 0, 0]} />
          <SpotLight intensity={1} position={[30, 0, 0]} />

          <OrbitControls enableZoom={false} enableRotate={true} />
          <Environment resolution={256}>
            <Lightformer
              intensity={2}
              rotation-y={Math.PI / 2}
              position={[-5, -1, -1]}
              scale={[50, 2, 1]}
            />
          </Environment>
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
          <Balls />
        </Canvas>
      </div>
    </>
  );
}

export { HandleSwipes,
  ContactClick };
