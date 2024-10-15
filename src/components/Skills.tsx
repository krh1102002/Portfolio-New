import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as THREE from "three";
import ReactDOM from "react-dom";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiAngular,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

// Updated skills list with correct icons
const skills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "SCSS", icon: FaSass },
  { name: "BootStrap", icon: FaBootstrap },
  { name: "Material-UI", icon: MdDesignServices },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React.js", icon: FaReact },
  { name: "Angular", icon: SiAngular },
  { name: "Node.js", icon: FaNodeJs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "SQL", icon: SiMysql },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
];

const Skills: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (!canvasRef.current || !inView) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.PointsMaterial({ color: 0x6c63ff, size: 0.1 });
    const sphere = new THREE.Points(geometry, material);

    scene.add(sphere);
    camera.position.z = 15;

    const skillSpheres: THREE.Mesh[] = [];
    const skillSprites: THREE.Sprite[] = [];

    skills.forEach((skill, index) => {
      const skillGeometry = new THREE.SphereGeometry(0.2, 16, 16);
      const skillMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const skillMesh = new THREE.Mesh(skillGeometry, skillMaterial);

      const phi = Math.acos(-1 + (2 * index) / skills.length);
      const theta = Math.sqrt(skills.length * Math.PI) * phi;

      skillMesh.position.setFromSphericalCoords(6, phi, theta);
      sphere.add(skillMesh);
      skillSpheres.push(skillMesh);

      // Create icon and text sprite
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.width = 512;
      canvas.height = 128;
      if (context) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "white";
        context.font = "Bold 36px 'Helvetica Neue', Arial, sans-serif";
        context.textAlign = "left";
        context.textBaseline = "middle";

        // Render icon
        const IconComponent = skill.icon;
        const iconCanvas = document.createElement("canvas");
        const iconCtx = iconCanvas.getContext("2d");
        iconCanvas.width = 64;
        iconCanvas.height = 64;

        if (iconCtx) {
          const iconSvg = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
          );
          iconSvg.setAttribute("width", "64");
          iconSvg.setAttribute("height", "64");

          const iconReact = React.createElement(IconComponent, { size: 64 });
          ReactDOM.render(iconReact, iconSvg);

          const svgString = new XMLSerializer().serializeToString(iconSvg);
          const img = new Image();
          const svgBlob = new Blob([svgString], {
            type: "image/svg+xml;charset=utf-8",
          });
          const url = URL.createObjectURL(svgBlob);

          img.onload = () => {
            iconCtx.drawImage(img, 0, 0, 64, 64); // Render the icon on the off-screen canvas
            context.drawImage(iconCanvas, 32, 32, 64, 64); // Draw the icon on the main canvas
            context.fillText(skill.name, 128, 64);

            const texture = new THREE.CanvasTexture(canvas);
            const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
            const sprite = new THREE.Sprite(spriteMaterial);

            sprite.scale.set(4, 1, 1);
            sprite.position.copy(skillMesh.position);
            sprite.position.multiplyScalar(1.1);
            sphere.add(sprite);
            skillSprites.push(sprite);

            URL.revokeObjectURL(url);
          };
          img.src = url;
        }
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.005;
      skillSprites.forEach((sprite) => sprite.lookAt(camera.position));
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [inView]);

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-gray-800 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 z-10 relative">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Skills
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <canvas ref={canvasRef} className="w-full h-[600px]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
