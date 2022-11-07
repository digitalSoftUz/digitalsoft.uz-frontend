import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticleHeader = () => {
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
      id="tsparticles"
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
            distance: 180
          },
          number:{
            value: 120,
            limit: 100
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
      }}
    />
  );
};

export default ParticleHeader;