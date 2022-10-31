import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import imgH1 from "../../assets/images/Hamkorlik/img1.png"
import imgH2 from "../../assets/images/Hamkorlik/img2.png"
import imgH3 from "../../assets/images/Hamkorlik/img3.png"
import imgH4 from "../../assets/images/Hamkorlik/img4.png"

const ParticleMap = (props) => {
  var data = props.data
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);
  const dataMap = () =>{
    return(
      data?.map((item)=>{
        return(
          {
            src: item.img,
            particles: {
              size: {
                value: 30
              }
            }
          }
        )
      })
    )
  }
  return (
    <Particles
      id="tsparticlesMap"
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
            distance: 580
          },
          number:{
            value: data?.length,
          },
          move: {
            enable: true,
            speed: 1,
            outModes: {
              default: "bounce"
            }
          },
          // size: {
          //   value: 5
          // },
          shape:{
            type: [
              "image",
            ],
            options:{
              image: [
                // data?.map((item)=>{
                //   return(
                //     {
                //       src: item.img,
                //       particles: {
                //         size: {
                //           value: 30
                //         }
                //       }
                //     }
                //   )
                // })
                {
                  src: imgH1,
                  width: 60,
                  height: 32,
                  particles: {
                    size: {
                      value: 30
                    }
                  }
                },
                {
                  src: imgH2,
                  width: 60,
                  height: 32,
                  particles: {
                    size: {
                      value: 30
                    }
                  }
                },
                {
                  src: imgH3,
                  width: 60,
                  height: 32,
                  particles: {
                    size: {
                      value: 30
                    }
                  }
                },
                {
                  src: imgH4,
                  width: 60,
                  height: 32,
                  particles: {
                    size: {
                      value: 30
                    }
                  }
                }
              ]
            }
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

export default ParticleMap;