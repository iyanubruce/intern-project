// components/EllipseCanvas.tsx
"use client";
import { useEffect, useRef } from "react";

const EllipseCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        // Set canvas dimensions
        canvas.width = 700;
        canvas.height = 700;

        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Create a gradient for the 3D shading
        const gradient = ctx.createLinearGradient(50, 100, 350, 100);
        gradient.addColorStop(0, "rgba(0, 0, 0, 0.1)");
        gradient.addColorStop(0.5, "rgba(0, 0, 0, 0)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0.1)");

        // Draw the ellipse
        ctx.beginPath();
        ctx.ellipse(200, 100, 150, 75, 0, 0, 2 * Math.PI);
        ctx.strokeStyle = "#ffffff"; // Outline color
        ctx.lineWidth = 2;
        ctx.stroke();

        // Apply the gradient for a 3D look
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        border: "0px solid #ccc",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    />
  );
};

export default EllipseCanvas;
