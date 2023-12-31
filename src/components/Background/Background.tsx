import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

export const Background: React.FC<{}> = () => {
   const particlesInit = useCallback(async (engine: Engine) => {
      // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      // await loadFull(engine);
      await loadSlim(engine);
   }, []);

   const particlesLoaded = useCallback(async (container: Container | undefined) => {

   }, []);

   return (
      <div style={{
         width: "100%",
         height: "100%",
         position: "fixed",
         zIndex: "-10",
         top: 0,
         left: 0
      }}>
         <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
               background: {
                  color: {
                     value: "#172a45",
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
                     resize: true,
                  },
                  modes: {
                     push: {
                        quantity: 4,
                     },
                     repulse: {
                        distance: 150,
                        duration: 1,
                     },
                  },
               },
               particles: {
                  color: {
                     value: "#F1C40F",
                  },
                  links: {
                     color: "#F1C40F",
                     distance: 150,
                     enable: true,
                     opacity: 0.3,
                     width: 1,
                  },
                  move: {
                     direction: "none",
                     enable: true,
                     outModes: {
                        default: "bounce",
                     },
                     random: false,
                     speed: 2,
                     straight: false,
                  },
                  number: {
                     density: {
                        enable: true,
                        area: 800,
                     },
                     value: 80,
                  },
                  opacity: {
                     value: 0.3,
                  },
                  shape: {
                     type: "circle",
                  },
                  size: {
                     value: { min: 1, max: 5 },
                  },
               },
               detectRetina: true,
            }}
         />
      </div >
   );
}