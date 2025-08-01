import notFoundSvg from "@/assets/not-found.svg";
import Seo from "@/components/common/Seo";
import styled from "@emotion/styled";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import enemyPng from "@/assets/game/enemy.png";
import mePng from "@/assets/game/me.png";

const syntaxStyle: { [key: string]: React.CSSProperties } = {
  'code[class*="language-"]': {
    color: "#c5c8c6",
    textShadow: "0 1px rgba(0, 0, 0, 0.3)",
    fontFamily: "'Roboto Mono', Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    fontSize: "1.2rem",
  },
  'pre[class*="language-"]': {
    color: "#c5c8c6",
    textShadow: "0 1px rgba(0, 0, 0, 0.3)",
    fontFamily: "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    padding: "80px",
    margin: 0,
    overflow: "auto",
    height: "100vh",
    backgroundColor: "#1e1e1e",
  },
  comment: { color: "#6a9955" },
  prolog: { color: "#6a9955" },
  doctype: { color: "#6a9955" },
  cdata: { color: "#6a9955" },
  punctuation: { color: "#569cd6" },
  property: { color: "#ce9178" },
  keyword: { color: "#569cd6" },
  tag: { color: "#569cd6" },
  "class-name": { color: "#FFFFB6", textDecoration: "underline" },
  boolean: { color: "#99CC99" },
  constant: { color: "#99CC99" },
  symbol: { color: "#f92672" },
  deleted: { color: "#ce9178" },
  number: { color: "#FF73FD" },
  selector: { color: "#A8FF60" },
  "attr-name": { color: "@" },
  string: { color: "#ce9178" },
  char: { color: "#A8FF60" },
  builtin: { color: "#569cd6" },
  inserted: { color: "#A8FF60" },
  variable: { color: "#C6C5FE" },
  operator: { color: "##ce9178" },
  entity: { color: "#FFFFB6", cursor: "help" },
  url: { color: "#96CBFE" },
  atrule: { color: "#F9EE98" },
  "attr-value": { color: "#F9EE98" },
  function: { color: "#569cd6" },
  regex: { color: "#E9C062" },
  important: { color: "#fd971f", fontWeight: "bold" },
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
};

const NotFound = () => {
  const { t } = useTranslation();
  const [message, setMessage] = useState("Click me!");
  const [clickCount, setClickCount] = useState(0);
  const [isGameActive, setGameActive] = useState(false);

  const funMessages = t("page_title.not_found_messages", { returnObjects: true });

  const handleClick = () => {
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);

    if (newClickCount >= 7) {
      setGameActive(true);
      setMessage("Game Start!");
    } else {
      if (Array.isArray(funMessages)) {
        const randomIndex = Math.floor(Math.random() * funMessages.length);
        setMessage(`${funMessages[randomIndex]} (${7 - newClickCount})`);
      }
    }
  };

  const codeString = `package main

import "fmt"

func main() {
\tfmt.Println("404: Page Not Found")
}
`;

  return (
    <NotFoundContainer>
      <Seo title={t("page_title.not_found")} />
      {isGameActive ? (
        <Game onGameOver={() => setGameActive(false)} />
      ) : (
        <>
          <SyntaxHighlighter language={"go"} style={syntaxStyle}>
            {codeString}
          </SyntaxHighlighter>
          <OverlayContainer>
            <ArtworkContainer onClick={handleClick}>
              <ArtworkImage src={notFoundSvg} alt='Character looking for a map' />
              <SpeechBubble>{message}</SpeechBubble>
            </ArtworkContainer>
            <HomeLink to='/'>Go Home</HomeLink>
          </OverlayContainer>
        </>
      )}
    </NotFoundContainer>
  );
};

const PLAYER_WIDTH = 64;
const PLAYER_HEIGHT = 64;
const ENEMY_WIDTH = 64;
const ENEMY_HEIGHT = 64;
const BULLET_WIDTH = 60;
const BULLET_HEIGHT = 20;

const playerBulletWords = ["go", "recover", "defer", "chan", "select", "T", "any"];
const enemyBulletWords = ["error", "panic", "nil", "fatal", "leak", "race"];

const Game = ({ onGameOver }: { onGameOver: () => void }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [isGameOver, setGameOver] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const playerRef = useRef({
    x: window.innerWidth / 2 - PLAYER_WIDTH / 2,
    y: window.innerHeight - PLAYER_HEIGHT - 30,
    rotation: 0,
  });
  const bulletsRef = useRef<{ x: number; y: number; text: string }[]>([]);
  const enemyBulletsRef = useRef<{ x: number; y: number; dx: number; dy: number; text: string; ay: number }[]>([]);
  const enemiesRef = useRef<
    {
      id: number;
      x: number;
      y: number;
      dx: number;
      dy: number;
      targetX: number;
      lastFired: number;
      fireRate: number;
      rotation: number;
    }[]
  >([]);
  const keysPressed = useRef<{ [key: string]: boolean }>({});
  const lastShotTimeRef = useRef(0);
  const animationFrameId = useRef<number>();
  const playerImageRef = useRef<HTMLImageElement | null>(null);
  const enemyImageRef = useRef<HTMLImageElement | null>(null);
  const joystickRef = useRef({ active: false, startX: 0, startY: 0, dx: 0, dy: 0 });

  useEffect(() => {
    const pImg = new Image();
    pImg.src = mePng;
    pImg.onload = () => (playerImageRef.current = pImg);

    const eImg = new Image();
    eImg.src = enemyPng;
    eImg.onload = () => (enemyImageRef.current = eImg);

    const checkMobile = () => window.innerWidth < 768;
    setIsMobile(checkMobile());
    window.addEventListener("resize", () => setIsMobile(checkMobile()));
    return () => window.removeEventListener("resize", () => setIsMobile(checkMobile()));
  }, []);

  const gameLoop = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx || isGameOver) return;

    if (isMobile) {
      const moveX = joystickRef.current.dx * 7;
      playerRef.current.x += moveX;
      playerRef.current.rotation = moveX * 0.05;
    } else {
      let moveX = 0;
      if (keysPressed.current["ArrowLeft"]) moveX = -7;
      if (keysPressed.current["ArrowRight"]) moveX = 7;
      playerRef.current.x += moveX;
      playerRef.current.rotation = moveX * 0.05;
    }
    playerRef.current.x = Math.max(10, Math.min(canvas.width - PLAYER_WIDTH - 10, playerRef.current.x));

    bulletsRef.current = bulletsRef.current.map((b) => ({ ...b, y: b.y - 10 })).filter((b) => b.y > 0);
    enemyBulletsRef.current = enemyBulletsRef.current
      .map((b) => {
        const newDy = b.dy + b.ay;
        return { ...b, x: b.x + b.dx, y: b.y + newDy, dy: Math.min(newDy, 10) };
      })
      .filter((b) => b.y < canvas.height && b.y > 0 && b.x > 0 && b.x < canvas.width);

    const now = Date.now();
    const difficulty = Math.floor(score / 100);
    const bulletSpeedMultiplier = 1 + Math.min(difficulty * 0.1, 1);

    enemiesRef.current.forEach((e) => {
      // Steer towards targetX
      const turnSpeed = 0.04;
      if (e.x < e.targetX) {
        e.dx += turnSpeed;
      } else {
        e.dx -= turnSpeed;
      }

      // Clamp horizontal speed and apply some friction/damping
      e.dx = Math.max(-2.5, Math.min(2.5, e.dx));
      e.dx *= 0.99; // friction

      e.rotation = e.dx * 0.15; // Rotate based on horizontal speed

      e.x += e.dx;
      e.y += e.dy;

      if (now - e.lastFired > e.fireRate && e.y > 0 && e.y < canvas.height * 0.7) {
        const bulletSpeed = 4 * bulletSpeedMultiplier;
        const angle = Math.atan2(playerRef.current.y - e.y, playerRef.current.x - e.x);
        const randomAngleOffset = (Math.random() - 0.5) * 0.5;
        const word = enemyBulletWords[Math.floor(Math.random() * enemyBulletWords.length)];
        const isShootingStraight = Math.abs(angle - Math.PI / 2) < 0.25;
        const ay = isShootingStraight ? 0.05 : 0;
        enemyBulletsRef.current.push({
          x: e.x + ENEMY_WIDTH / 2,
          y: e.y + ENEMY_HEIGHT,
          dx: Math.cos(angle + randomAngleOffset) * bulletSpeed,
          dy: Math.sin(angle + randomAngleOffset) * bulletSpeed,
          text: word,
          ay,
        });
        e.lastFired = now;
      }

      // If close to target or out of bounds, get a new target
      if (Math.abs(e.x - e.targetX) < 50 || e.x <= 0 || e.x >= canvas.width - ENEMY_WIDTH) {
        e.targetX = Math.random() * (canvas.width - ENEMY_WIDTH);
      }
    });
    enemiesRef.current = enemiesRef.current.filter((e) => e.y < canvas.height);

    const hitEnemyIds = new Set<number>();
    const bulletsToRemove = new Set<number>();

    bulletsRef.current.forEach((bullet, bulletIndex) => {
      for (const enemy of enemiesRef.current) {
        if (hitEnemyIds.has(enemy.id)) continue;
        if (
          bullet.x - BULLET_WIDTH / 2 < enemy.x + ENEMY_WIDTH &&
          bullet.x + BULLET_WIDTH / 2 > enemy.x &&
          bullet.y - BULLET_HEIGHT < enemy.y + ENEMY_HEIGHT &&
          bullet.y > enemy.y
        ) {
          hitEnemyIds.add(enemy.id);
          bulletsToRemove.add(bulletIndex);
          break;
        }
      }
    });

    if (hitEnemyIds.size > 0) {
      bulletsRef.current = bulletsRef.current.filter((_, i) => !bulletsToRemove.has(i));
      enemiesRef.current = enemiesRef.current.filter((e) => !hitEnemyIds.has(e.id));
      setScore((s) => s + hitEnemyIds.size * 10);
    }

    for (const enemy of enemiesRef.current) {
      if (
        playerRef.current.x < enemy.x + ENEMY_WIDTH &&
        playerRef.current.x + PLAYER_WIDTH > enemy.x &&
        playerRef.current.y < enemy.y + ENEMY_HEIGHT &&
        playerRef.current.y + PLAYER_HEIGHT > enemy.y
      ) {
        setGameOver(true);
        break;
      }
    }

    for (const bullet of enemyBulletsRef.current) {
      if (
        playerRef.current.x < bullet.x + BULLET_WIDTH / 2 &&
        playerRef.current.x + PLAYER_WIDTH > bullet.x - BULLET_WIDTH / 2 &&
        playerRef.current.y < bullet.y &&
        playerRef.current.y + PLAYER_HEIGHT > bullet.y - BULLET_HEIGHT
      ) {
        setGameOver(true);
        break;
      }
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (playerImageRef.current) {
      ctx.save();
      ctx.translate(playerRef.current.x + PLAYER_WIDTH / 2, playerRef.current.y + PLAYER_HEIGHT / 2);
      ctx.rotate(Math.PI + playerRef.current.rotation);
      ctx.drawImage(playerImageRef.current, -PLAYER_WIDTH / 2, -PLAYER_HEIGHT / 2, PLAYER_WIDTH, PLAYER_HEIGHT);
      ctx.restore();
    }

    ctx.font = "bold 18px 'Roboto Mono', monospace";
    ctx.textAlign = "center";

    ctx.fillStyle = "#00c9a7";
    ctx.shadowColor = "#00c9a7";
    ctx.shadowBlur = 8;
    bulletsRef.current.forEach((b) => {
      ctx.fillText(b.text, b.x, b.y);
    });
    ctx.shadowBlur = 0;

    // Draw enemy bullets
    ctx.fillStyle = "#ff5555";
    ctx.shadowColor = "red";
    ctx.shadowBlur = 8;
    enemyBulletsRef.current.forEach((b) => {
      ctx.fillText(b.text, b.x, b.y);
    });
    ctx.shadowBlur = 0;

    if (enemyImageRef.current) {
      enemiesRef.current.forEach((e) => {
        ctx.save();
        ctx.translate(e.x + ENEMY_WIDTH / 2, e.y + ENEMY_HEIGHT / 2);
        ctx.rotate(e.rotation);
        ctx.drawImage(enemyImageRef.current!, -ENEMY_WIDTH / 2, -ENEMY_HEIGHT / 2, ENEMY_WIDTH, ENEMY_HEIGHT);
        ctx.restore();
      });
    }

    animationFrameId.current = requestAnimationFrame(gameLoop);
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  }, [isGameOver, isMobile, score]);
=======
  }, [isGameOver, isMobile]);
>>>>>>> Stashed changes
=======
  }, [isGameOver, isMobile]);
>>>>>>> Stashed changes

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    animationFrameId.current = requestAnimationFrame(gameLoop);

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [gameLoop]);

  useEffect(() => {
    if (isGameOver) return;
    const interval = setInterval(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const x = Math.random() * (canvas.width - ENEMY_WIDTH);
      enemiesRef.current.push({
        id: Date.now() + Math.random(),
        x: x,
        y: -ENEMY_HEIGHT,
        dx: 0,
        dy: 1 + Math.random() * 2,
        targetX: Math.random() * (canvas.width - ENEMY_WIDTH),
        lastFired: Date.now() + Math.random() * 1000,
        fireRate: 1500 + Math.random() * 1500,
        rotation: 0,
      });
    }, 1500);
    return () => clearInterval(interval);
  }, [isGameOver]);

  const fireBullet = useCallback(() => {
    const now = Date.now();
    if (now - lastShotTimeRef.current > 200) {
      const word = playerBulletWords[Math.floor(Math.random() * playerBulletWords.length)];
      bulletsRef.current.push({
        x: playerRef.current.x + PLAYER_WIDTH / 2,
        y: playerRef.current.y,
        text: word,
      });
      lastShotTimeRef.current = now;
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keysPressed.current[e.key] = true;
      if (e.key === " " && !isGameOver) fireBullet();
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressed.current[e.key] = false;
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [isGameOver, fireBullet]);

  const handleJoystickStart = (e: React.TouchEvent<HTMLDivElement>) => {
    joystickRef.current.active = true;
    joystickRef.current.startX = e.touches[0].clientX;
  };

  const handleJoystickMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!joystickRef.current.active) return;
    const currentX = e.touches[0].clientX;
    const dx = currentX - joystickRef.current.startX;
    joystickRef.current.dx = Math.max(-1, Math.min(1, dx / 50));
  };

  const handleJoystickEnd = () => {
    joystickRef.current.active = false;
    joystickRef.current.dx = 0;
  };

  return (
    <GameContainer>
      <canvas ref={canvasRef} />
      <Score>Score: {score}</Score>
      {isGameOver && (
        <GameOverScreen>
          <h1>Game Over</h1>
          <h2>Final Score: {score}</h2>
          <button onClick={onGameOver}>Back to Safety</button>
        </GameOverScreen>
      )}
      {isMobile && !isGameOver && (
        <MobileControls>
          <Joystick onTouchStart={handleJoystickStart} onTouchMove={handleJoystickMove} onTouchEnd={handleJoystickEnd}>
            <JoystickKnob style={{ transform: `translateX(${joystickRef.current.dx * 20}px)` }} />
          </Joystick>
          <FireButton onTouchStart={fireBullet} />
        </MobileControls>
      )}
    </GameContainer>
  );
};

const NotFoundContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const OverlayContainer = styled.div`
  position: absolute;
  bottom: 5%;
  right: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const ArtworkContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const ArtworkImage = styled.img`
  width: 250px;
  height: auto;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1) rotate(-5deg);
  }
`;

const SpeechBubble = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-10px);
  background-color: white;
  color: #333;
  padding: 10px 15px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-size: 0.9rem;
  white-space: nowrap;
  font-family: "Pretendard", sans-serif;
`;

const HomeLink = styled(Link)`
  padding: 12px 24px;
  background-color: #007d9c;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  transition: background-color 0.2s;
  font-family: "Pretendard", sans-serif;

  &:hover {
    background-color: #005f79;
  }
`;

const Score = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  font-size: 1.5rem;
  font-family: "Pretendard", sans-serif;
`;

const GameContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #0a0a1a;
  overflow: hidden;
  z-index: 2000;
  cursor: none;
  canvas {
    display: block;
  }
`;

const GameOverScreen = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  font-family: "Pretendard", sans-serif;
  cursor: default;

  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  button {
    padding: 12px 24px;
    background-color: #007d9c;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;
    transition: background-color 0.2s;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;

    &:hover {
      background-color: #005f79;
    }
  }
`;

const MobileControls = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 25vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5vw;
  box-sizing: border-box;
  z-index: 2001;
`;

const Joystick = styled.div`
  width: 120px;
  height: 120px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(255, 255, 255, 0.2);
`;

const JoystickKnob = styled.div`
  width: 60px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transition: transform 0.1s ease-out;
`;

const FireButton = styled.div`
  width: 90px;
  height: 90px;
  background-color: rgba(255, 50, 50, 0.4);
  border-radius: 50%;
  border: 2px solid rgba(255, 50, 50, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;

  &:active {
    background-color: rgba(255, 50, 50, 0.6);
  }
`;

export default NotFound;
