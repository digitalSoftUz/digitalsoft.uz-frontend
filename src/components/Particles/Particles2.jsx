import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticleChars2 = () => {
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);
  return (
    <Particles
      id="tsparticles2"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "",
          },
        },
        fpsLimit: 60,
        particles: {
          links: {
            enable: true,
            distance: 280
          },
          number:{
            value: 20,
          },
          move: {
            enable: true,
            speed: 4,
            outModes: {
              default: "bounce"
            }
          },
          size: {
            value: { min: 1, max: 5 }
          }
        },
        fullScreen: {
          enable: false,
          zIndex: 1
        },
        // fpsLimit: 120,
        // interactivity: {
        //   events: {
        //     onClick: {
        //       enable: false,
        //       mode: "push",
        //     },
        //     onHover: {
        //       enable: false,
        //       mode: "repulse",
        //     },
        //     resize: true,
        //   },
        //   modes: {
        //     push: {
        //       quantity: 0,
        //     },
        //     repulse: {
        //       distance: 200,
        //       duration: 1,
        //     },
        //   },
        // },
        // particles: {
        //   color: {
        //     value: "#ffffff",
        //   },
        //   links: {
        //     color: "#ffffff",
        //     distance: 150,
        //     enable: true,
        //     opacity: 0.5,
        //     width: 1,
        //   },
        //   collisions: {
        //     enable: true,
        //   },
        //   // move: {
        //   //   directions: "none",
        //   //   enable: true,
        //   //   // outModes: {
        //   //   //   default: "bounce",
        //   //   // },
        //   //   random: false,
        //   //   speed: 2,
        //   //   straight: false,
        //   //   warp: false
        //   // },
        //   "move": {
        //     "angle": {
        //       "offset": 0,
        //       "value": 90
        //     },
        //     "attract": {
        //       "distance": 200,
        //       "enable": false,
        //       "rotate": {
        //         "x": 600,
        //         "y": 600
        //       }
        //     },
        //     "center": {
        //       "x": 50,
        //       "y": 50,
        //       "radius": 0
        //     },
        //     "decay": 0,
        //     "distance": {},
        //     "direction": "none",
        //     "drift": 0,
        //     "enable": true,
        //     "gravity": {
        //       "acceleration": 9.81,
        //       "enable": false,
        //       "inverse": false,
        //       "maxSpeed": 50
        //     },
        //     "path": {
        //       "clamp": true,
        //       "delay": {
        //         "random": {
        //           "enable": false,
        //           "minimumValue": 0
        //         },
        //         "value": 0
        //       },
        //       "enable": false,
        //       "options": {}
        //     },
        //     "outModes": {
        //       "default": "out",
        //       "bottom": "out",
        //       "left": "out",
        //       "right": "out",
        //       "top": "out"
        //     },
        //     "random": true,
        //     "size": false,
        //     "speed": 3,
        //     "spin": {
        //       "acceleration": 0,
        //       "enable": false
        //     },
        //     "straight": false,
        //     "trail": {
        //       "enable": false,
        //       "length": 10,
        //       "fillColor": {
        //         "value": "#000000"
        //       }
        //     },
        //     "vibrate": false,
        //     "warp": false
        //   },
        //   number: {
        //     density: {
        //       enable: true,
        //       area: 800,
        //     },
        //     value: 80,
        //   },
        //   opacity: {
        //     value: 0.5,
        //   },
        //   shape: {
        //     type: "circle",
        //   },
        //   size: {
        //     value: { min: 1, max: 5 },
        //   },
        // },
        // detectRetina: true,
      }}
    />
  );
};

export default ParticleChars2;