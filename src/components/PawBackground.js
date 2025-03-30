// PawBackground.js
import React, { useRef, useEffect } from 'react';
import '../styles/PawBackground.css';

const PawBackground = () => {
  const canvasRef = useRef(null);
  const paws = useRef([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    class Paw {
      constructor(x, y, isMouseGenerated = false) {
        this.x = x;
        this.y = y;
        this.size = isMouseGenerated 
          ? Math.random() * 15 + 10  
          : Math.random() * 35 + 15; 
        this.rotation = Math.random() * Math.PI * 2;
        this.opacity = 1;
        this.life = 1.5;
        this.color = `hsl(270, ${isMouseGenerated ? 55 : 45}%, ${isMouseGenerated ? 75 : 85}%)`;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.opacity;

        ctx.beginPath();
        ctx.arc(0, 0, this.size * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();

        const positions = [
          {x: -this.size * 0.6, y: -this.size * 0.3},
          {x: -this.size * 0.2, y: -this.size * 0.6},
          {x: this.size * 0.2, y: -this.size * 0.6},
          {x: this.size * 0.6, y: -this.size * 0.3}
        ];

        positions.forEach(pos => {
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, this.size * 0.2, 0, Math.PI * 2);
          ctx.fill();
        });

        ctx.restore();
      }

      update() {
        this.opacity *= 0.97;
        this.life -= 0.008;
        this.y += 0.3;
      }
    }

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const dx = mousePos.current.x - lastMousePos.current.x;
      const dy = mousePos.current.y - lastMousePos.current.y;
      const distance = Math.sqrt(dx*dx + dy*dy);

      if(distance > 1) {
        const count = Math.min(Math.floor(distance / 40), 3);
        for(let i = 0; i < count; i++) {
          const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 0.4;
          const offset = Math.random() * 35;
          
          paws.current.push(new Paw(
            mousePos.current.x + Math.cos(angle) * offset,
            mousePos.current.y + Math.sin(angle) * offset,
            true 
          ));
        }
      }

      if(Math.random() < 0.1) {
        const labutePerGrupa = Math.floor(Math.random() * 4) + 3; 
        for(let i = 0; i < labutePerGrupa; i++) {
          paws.current.push(new Paw(
            Math.random() * canvas.width,
            Math.random() * canvas.height
          ));
        }
      }

      paws.current = paws.current.filter(paw => {
        paw.update();
        paw.draw();
        return paw.life > 0.1;
      });

      lastMousePos.current = {...mousePos.current};
      requestAnimationFrame(animate);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="paw-canvas" />;
};

export default PawBackground;