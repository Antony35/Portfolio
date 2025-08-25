import './FollowingMouse.css'
import { useRef, useEffect } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

interface CircleTransform {
  x: number;
  y: number;
  scale: number;
  angle: number;
}

export default function FollowingMouse() {
  const mouseCircleRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(null);
  
  // State too follow mouse
  const mouseRef = useRef<MousePosition>({ x: 0, y: 0 });
  const previousMouseRef = useRef<MousePosition>({ x: 0, y: 0 });
  const circleRef = useRef<CircleTransform>({ x: 0, y: 0, scale: 0, angle: 0 });
  
  const speed = 0.17;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const tick = () => {
      if (!mouseCircleRef.current) return;

      const mouse = mouseRef.current;
      const previousMouse = previousMouseRef.current;
      const circle = circleRef.current;

      // MOVEMENT
      // Calculate the circle's movement based on mouse position and smoothing
      circle.x += (mouse.x - circle.x) * speed;
      circle.y += (mouse.y - circle.y) * speed;

      // COMPRESSION
      // 1. Calculate the change in mouse position
      const deltaMouseX = mouse.x - previousMouse.x;
      const deltaMouseY = mouse.y - previousMouse.y;

      // Update the previous mouse position for the next frame
      previousMouse.x = mouse.x;
      previousMouse.y = mouse.y;

      // 2. Calculate the mouse velocity using the Pythagorean theorem
      const mouseVelocity = Math.min(Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4, 150);

      // 3. Convert velocity to value in the range [0, 0.5]
      const scaleValue = (mouseVelocity / 150) * 0.5;

      // 4. Update the scale smoothly
      circle.scale += (scaleValue - circle.scale) * speed;

      // ROTATION
      // 1. Calculate the angle using the atan2 function
      const angle = Math.atan2(deltaMouseY, deltaMouseX) * 180 / Math.PI;

     // 2. Apply a threshold to reduce low velocity shaking
      if (mouseVelocity > 20) {
        circle.angle = angle;
      }

      // Appliquer toutes les transformations dans l'ordre : translate -> rotate -> scale
      const transform = `translate(${circle.x}px, ${circle.y}px) rotate(${circle.angle}deg) scale(${1 + circle.scale}, ${1 - circle.scale})`;
      
      mouseCircleRef.current.style.transform = transform;

      // Request the next frame to continue the animation
      animationRef.current = requestAnimationFrame(tick);
    };

    // Add the event listener
    window.addEventListener('mousemove', handleMouseMove);
    
    // Start the animation loop
    animationRef.current = requestAnimationFrame(tick);

    // Cleaning when disassembling the component
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
    return (
        <div className='mouse-circle' ref={mouseCircleRef}></div>
    )
}