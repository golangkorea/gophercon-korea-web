import React from "react";

interface Pixel {
  x: number;
  y: number;
  z: number;
}
const Wave = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  let pixels = [] as Pixel[];

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const W = (canvas.width = window.innerWidth);
    const H = (canvas.height = window.innerHeight);

    for (let x = -400; x < 400; x += 5) {
      for (let z = -250; z < 250; z += 5) {
        pixels.push({ x: x, y: 100, z: z });
      }
    }

    function render(ts) {
      const imageData = ctx.getImageData(0, 0, W, H);
      const len = pixels.length;
      const fov = 250;
      let pixel, scale, x2d, y2d, c;

      for (let i = 0; i < len; i++) {
        pixel = pixels[i];
        scale = fov / (fov + pixel.z);
        x2d = pixel.x * scale + W / 2;
        y2d = pixel.y * scale + H / 2;
        if (x2d >= 0 && x2d <= W && y2d >= 0 && y2d <= H) {
          c = (Math.round(y2d) * imageData.width + Math.round(x2d)) * 4;
          imageData.data[c] = 17;
          imageData.data[c + 1] = 122;
          imageData.data[c + 2] = 181;
          imageData.data[c + 3] = 255;
        }
        pixel.z -= 0.4;
        pixel.y = H / 14 + Math.sin((i / len) * 15 + ts / 450) * 10;
        if (pixel.z < -fov) pixel.z += 2 * fov;
      }
      ctx.putImageData(imageData, 0, 0);
    }

    (function drawFrame(ts?: any) {
      requestAnimationFrame(drawFrame);
      ctx.fillStyle = "#17293a";
      ctx.fillRect(0, 0, W, H);
      render(ts);
    })();
  }, [canvasRef]);

  return <canvas ref={canvasRef} className='absolute bottom-0 z-0' />;
};

export default Wave;
