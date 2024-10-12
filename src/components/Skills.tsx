import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as THREE from "three";

// Updated skills list
const skills = [
  "HTML",
  "CSS",
  "SCSS",
  "BootStrap",
  "Material-UI",
  "Tailwind.CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "AngularJS",
  "Node.js",
  "MongoDB",
  "SQL",
  "MySql",
  "PostgreSql",
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
    const skillTexts: THREE.Sprite[] = [];

    skills.forEach((skill, index) => {
      const skillGeometry = new THREE.SphereGeometry(0.2, 16, 16);
      const skillMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const skillMesh = new THREE.Mesh(skillGeometry, skillMaterial);

      const phi = Math.acos(-1 + (2 * index) / skills.length);
      const theta = Math.sqrt(skills.length * Math.PI) * phi;

      skillMesh.position.setFromSphericalCoords(6, phi, theta);
      sphere.add(skillMesh);
      skillSpheres.push(skillMesh);

      // Create text sprite
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      // Increase canvas size to fit larger names more easily
      canvas.width = 512;
      canvas.height = 512;
      if (context) {
        // Use a more professional font-family and adjust font size for better readability
        context.font = "Bold 70px 'Helvetica Neue', Arial, sans-serif";
        context.fillStyle = "white";
        context.textAlign = "center";
        context.textBaseline = "middle"; // Ensure text is vertically centered
        context.fillText(skill, canvas.width / 2, canvas.height / 2);
      }

      const texture = new THREE.CanvasTexture(canvas);
      const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
      const sprite = new THREE.Sprite(spriteMaterial);
      // Adjust the scale to ensure it fits properly in the scene
      sprite.scale.set(3, 1.5, 1);
      sprite.position.copy(skillMesh.position);
      sprite.position.multiplyScalar(1.1);
      sphere.add(sprite);
      skillTexts.push(sprite);
    });

    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.005;
      skillTexts.forEach((text) => text.lookAt(camera.position));
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
        <h2 className="section-heading">Skills</h2>
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
