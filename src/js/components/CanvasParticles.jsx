import { useRef, useEffect } from "react";

const colorMap = {
  github: "rgba(192, 132, 252", // purple-400
  linkedin: "rgba( 0, 102, 204", // blue 300
  yahoo: "rgba(250, 204, 21", // yellow-400
  default: "rgba(32, 178, 170", // seagreen blue
};

const CanvasParticles = ({ hoveredIcon }) => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const createParticle = (x, y) => {
      particles.current.push({
        x,
        y,
        radius: Math.random() * 2 + 1.5,
        alpha: 1,
        dx: (Math.random() - 0.5) * 1.5,
        dy: (Math.random() - 0.5) * 1.5,
        color: colorMap[hoveredIcon] || colorMap.default,
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current.forEach((p, i) => {
        p.x += p.dx;
        p.y += p.dy;
        p.alpha -= 0.005; // Fade increment
        if (p.alpha <= 0) particles.current.splice(i, 1);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}, ${p.alpha})`;
        ctx.fill();
      });
      animationId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      createParticle(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [hoveredIcon]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default CanvasParticles;
