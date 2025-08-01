import notFoundSvg from "@/assets/not-found.svg";
import Seo from "@/components/common/Seo";
import styled from "@emotion/styled";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
    margin: 0,
    overflow: "auto",
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
  const [message, setMessage] = useState<string | null>(null);
  const [isGameActive, setGameActive] = useState(false);
  const clickTimestamps = useRef<number[]>([]);

  const initialMessage = useMemo(() => {
    const initialMessages = t("page_title.not_found_initial_messages", { returnObjects: true });
    if (Array.isArray(initialMessages) && initialMessages.length > 0) {
      const randomIndex = Math.floor(Math.random() * initialMessages.length);
      return initialMessages[randomIndex];
    }
    return "";
  }, [t]);

  const funMessages = t("page_title.not_found_messages", { returnObjects: true });

  const handleClick = () => {
    const now = Date.now();
    clickTimestamps.current.push(now);

    if (clickTimestamps.current.length > 3) {
      clickTimestamps.current.shift();
    }

    if (clickTimestamps.current.length === 3) {
      const timeDiff = clickTimestamps.current[2] - clickTimestamps.current[0];
      if (timeDiff <= 500) {
        setGameActive(true);
        clickTimestamps.current = [];
        return;
      }
    }

    if (Array.isArray(funMessages)) {
      const randomIndex = Math.floor(Math.random() * funMessages.length);
      setMessage(funMessages[randomIndex]);
    }
  };

  const displayMessage = message ?? initialMessage;

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
          <CodeSnippetContainer>
            <SyntaxHighlighter language={"go"} style={syntaxStyle}>
              {codeString}
            </SyntaxHighlighter>
          </CodeSnippetContainer>
          <OverlayContainer>
            <ArtworkContainer onClick={handleClick}>
              <ArtworkImage src={notFoundSvg} alt='Character looking for a map' />
              <SpeechBubble>{displayMessage}</SpeechBubble>
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

const PLAYER_RADIUS = (PLAYER_WIDTH / 2) * 0.7;
const ENEMY_RADIUS = (ENEMY_WIDTH / 2) * 0.8;
const PLAYER_BULLET_RADIUS = (BULLET_WIDTH / 2) * 0.6;
const ENEMY_BULLET_RADIUS = (BULLET_WIDTH / 2) * 0.6;
const POWERUP_RADIUS = 30;

const playerBulletWords = ["go", "recover", "defer", "chan", "select", "T", "any"];
const enemyBulletWords = ["error", "panic", "nil", "fatal", "leak", "race"];

type PowerUpType = "rapid-fire" | "shield";
interface PowerUp {
  x: number;
  y: number;
  type: PowerUpType;
}
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
}
interface Star {
  x: number;
  y: number;
  speed: number;
  size: number;
  color: string;
  baseAlpha: number;
}

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
  const starsRef = useRef<Star[]>([]);
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
  const bgLightnessRef = useRef(10);
  const powerUpsRef = useRef<PowerUp[]>([]);
  const explosionsRef = useRef<Particle[]>([]);
  const playerShieldEndTimeRef = useRef(0);
  const rapidFireEndTimeRef = useRef(0);

  const createExplosion = useCallback((x: number, y: number, count: number, color: string) => {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 5 + 1;
      explosionsRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 60,
        color,
      });
    }
  }, []);

  const fireBullet = useCallback(() => {
    const now = Date.now();
    const fireRate = now < rapidFireEndTimeRef.current ? 100 : 200;
    if (now - lastShotTimeRef.current > fireRate) {
      const word = playerBulletWords[Math.floor(Math.random() * playerBulletWords.length)];
      bulletsRef.current.push({
        x: playerRef.current.x + PLAYER_WIDTH / 2,
        y: playerRef.current.y,
        text: word,
      });
      lastShotTimeRef.current = now;
    }
  }, []);

  const gameLoop = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx || isGameOver) return;

    const difficulty = Math.floor(score / 100);
    const now = Date.now();
    const isShieldActive = playerShieldEndTimeRef.current > now;
    const isRapidFireActive = rapidFireEndTimeRef.current > now;

    const targetBgLightness = Math.min(10 + difficulty * 2, 30);
    bgLightnessRef.current += (targetBgLightness - bgLightnessRef.current) * 0.02;
    const backgroundColor = `hsl(240, 50%, ${bgLightnessRef.current}%)`;

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (window.innerWidth < 768) {
      const moveX = joystickRef.current.dx * 7;
      playerRef.current.x += moveX;
      playerRef.current.rotation = moveX * 0.05;
      playerRef.current.y += joystickRef.current.dy * 5;
    } else {
      let moveX = 0;
      if (keysPressed.current["ArrowLeft"]) moveX = -7;
      if (keysPressed.current["ArrowRight"]) moveX = 7;
      playerRef.current.x += moveX;
      playerRef.current.rotation = moveX * 0.05;
      if (keysPressed.current["ArrowUp"]) playerRef.current.y -= 5;
      if (keysPressed.current["ArrowDown"]) playerRef.current.y += 5;
      if (keysPressed.current[" "]) {
        fireBullet();
      }
    }
    playerRef.current.x = Math.max(10, Math.min(canvas.width - PLAYER_WIDTH - 10, playerRef.current.x));
    playerRef.current.y = Math.max(10, Math.min(canvas.height - PLAYER_HEIGHT - 30, playerRef.current.y));

    bulletsRef.current = bulletsRef.current.map((b) => ({ ...b, y: b.y - 10 })).filter((b) => b.y > 0);
    enemyBulletsRef.current = enemyBulletsRef.current
      .map((b) => {
        const newDy = b.dy + b.ay;
        return { ...b, x: b.x + b.dx, y: b.y + newDy, dy: Math.min(newDy, 10) };
      })
      .filter((b) => b.y < canvas.height && b.y > 0 && b.x > 0 && b.x < canvas.width);

    const bulletSpeedMultiplier = 1 + Math.min(difficulty * 0.1, 1);

    enemiesRef.current.forEach((e) => {
      const turnSpeed = 0.04;
      if (e.x < e.targetX) {
        e.dx += turnSpeed;
      } else {
        e.dx -= turnSpeed;
      }

      e.dx = Math.max(-2.5, Math.min(2.5, e.dx));
      e.dx *= 0.99;

      e.rotation = e.dx * 0.15;

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

        const dx = bullet.x - (enemy.x + ENEMY_WIDTH / 2);
        const dy = bullet.y - BULLET_HEIGHT / 2 - (enemy.y + ENEMY_HEIGHT / 2);
        const distanceSq = dx * dx + dy * dy;
        const radiiSumSq = (PLAYER_BULLET_RADIUS + ENEMY_RADIUS) ** 2;

        if (distanceSq < radiiSumSq) {
          hitEnemyIds.add(enemy.id);
          bulletsToRemove.add(bulletIndex);
          break;
        }
      }
    });

    if (hitEnemyIds.size > 0) {
      enemiesRef.current.forEach((enemy) => {
        if (hitEnemyIds.has(enemy.id)) {
          createExplosion(enemy.x + ENEMY_WIDTH / 2, enemy.y + ENEMY_HEIGHT / 2, 30, "#ffcc00");
          if (Math.random() < 0.1) {
            const itemX = Math.max(30, Math.min(canvas.width - 30, enemy.x + ENEMY_WIDTH / 2));
            powerUpsRef.current.push({
              x: itemX,
              y: enemy.y + ENEMY_HEIGHT / 2,
              type: Math.random() < 0.5 ? "rapid-fire" : "shield",
            });
          }
        }
      });
      bulletsRef.current = bulletsRef.current.filter((_, i) => !bulletsToRemove.has(i));
      enemiesRef.current = enemiesRef.current.filter((e) => !hitEnemyIds.has(e.id));
      setScore((s) => s + hitEnemyIds.size * 10);
    }

    const SHIELD_RADIUS = (PLAYER_WIDTH / 2) * 1.2;
    const playerR = isShieldActive ? SHIELD_RADIUS : PLAYER_RADIUS;
    const enemiesToDestroyOnShieldHit = new Set<number>();
    for (const enemy of enemiesRef.current) {
      const dx = playerRef.current.x + PLAYER_WIDTH / 2 - (enemy.x + ENEMY_WIDTH / 2);
      const dy = playerRef.current.y + PLAYER_HEIGHT / 2 - (enemy.y + ENEMY_HEIGHT / 2);
      const distanceSq = dx * dx + dy * dy;
      const radiiSumSq = (playerR + ENEMY_RADIUS) ** 2;
      if (distanceSq < radiiSumSq) {
        if (isShieldActive) {
          playerShieldEndTimeRef.current = 0;
          enemiesToDestroyOnShieldHit.add(enemy.id);
          createExplosion(enemy.x + ENEMY_WIDTH / 2, enemy.y + ENEMY_HEIGHT / 2, 30, "#ffcc00");
          createExplosion(
            playerRef.current.x + PLAYER_WIDTH / 2,
            playerRef.current.y + PLAYER_HEIGHT / 2,
            50,
            "#4d94ff",
          );
        } else {
          createExplosion(
            playerRef.current.x + PLAYER_WIDTH / 2,
            playerRef.current.y + PLAYER_HEIGHT / 2,
            100,
            "#ff4d4d",
          );
          setGameOver(true);
        }
        break;
      }
    }
    if (enemiesToDestroyOnShieldHit.size > 0) {
      enemiesRef.current = enemiesRef.current.filter((e) => !enemiesToDestroyOnShieldHit.has(e.id));
    }

    if (!isGameOver) {
      const bulletsToDestroyOnShieldHit = new Set<any>();
      for (const bullet of enemyBulletsRef.current) {
        const dx = playerRef.current.x + PLAYER_WIDTH / 2 - bullet.x;
        const dy = playerRef.current.y + PLAYER_HEIGHT / 2 - (bullet.y - BULLET_HEIGHT / 2);
        const distanceSq = dx * dx + dy * dy;
        const radiiSumSq = (playerR + ENEMY_BULLET_RADIUS) ** 2;
        if (distanceSq < radiiSumSq) {
          if (isShieldActive) {
            playerShieldEndTimeRef.current = 0;
            bulletsToDestroyOnShieldHit.add(bullet);
            createExplosion(
              playerRef.current.x + PLAYER_WIDTH / 2,
              playerRef.current.y + PLAYER_HEIGHT / 2,
              50,
              "#4d94ff",
            );
          } else {
            createExplosion(
              playerRef.current.x + PLAYER_WIDTH / 2,
              playerRef.current.y + PLAYER_HEIGHT / 2,
              100,
              "#ff4d4d",
            );
            setGameOver(true);
          }
          break;
        }
      }
      if (bulletsToDestroyOnShieldHit.size > 0) {
        enemyBulletsRef.current = enemyBulletsRef.current.filter((b) => !bulletsToDestroyOnShieldHit.has(b));
      }
    }

    powerUpsRef.current = powerUpsRef.current.map((p) => ({ ...p, y: p.y + 2 })).filter((p) => p.y < canvas.height);

    const powerUpsToRemove = new Set<PowerUp>();
    powerUpsRef.current.forEach((powerUp) => {
      const dx = playerRef.current.x + PLAYER_WIDTH / 2 - powerUp.x;
      const dy = playerRef.current.y + PLAYER_HEIGHT / 2 - powerUp.y;
      const distanceSq = dx * dx + dy * dy;
      const radiiSumSq = (PLAYER_RADIUS + POWERUP_RADIUS) ** 2;

      if (distanceSq < radiiSumSq) {
        powerUpsToRemove.add(powerUp);
        if (powerUp.type === "shield") {
          playerShieldEndTimeRef.current = now + 5000;
        } else if (powerUp.type === "rapid-fire") {
          rapidFireEndTimeRef.current = Date.now() + 3000;
        }
      }
    });

    if (powerUpsToRemove.size > 0) {
      powerUpsRef.current = powerUpsRef.current.filter((p) => !powerUpsToRemove.has(p));
    }

    explosionsRef.current = explosionsRef.current
      .map((p) => ({ ...p, x: p.x + p.vx, y: p.y + p.vy, vx: p.vx * 0.98, vy: p.vy * 0.98, life: p.life - 1 }))
      .filter((p) => p.life > 0);

    const starSpeedMultiplier = 1 + Math.min(difficulty * 0.1, 1);

    starsRef.current.forEach((star) => {
      star.y += star.speed * starSpeedMultiplier;

      if (star.y > canvas.height) {
        star.y = 0;
        star.x = Math.random() * canvas.width;
      }

      const flicker = Math.random() > 0.99 ? Math.random() * 0.7 + 0.3 : 1;
      const alpha = star.baseAlpha * flicker;

      ctx.fillStyle = star.color;
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size / 2, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;

    if (isShieldActive) {
      const remainingTime = playerShieldEndTimeRef.current - now;
      let showShield = true;
      if (remainingTime < 2000) {
        const blinkInterval = remainingTime < 700 ? 100 : 200;
        if (Math.floor(now / blinkInterval) % 2 !== 0) {
          showShield = false;
        }
      }

      if (showShield) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(
          playerRef.current.x + PLAYER_WIDTH / 2,
          playerRef.current.y + PLAYER_HEIGHT / 2,
          SHIELD_RADIUS,
          0,
          Math.PI * 2,
        );
        ctx.fillStyle = "rgba(77, 148, 255, 0.3)";
        ctx.fill();
        ctx.restore();
      }
    }

    if (isRapidFireActive) {
      const remainingTime = rapidFireEndTimeRef.current - now;
      let showAura = true;
      if (remainingTime < 1500) {
        const blinkInterval = remainingTime < 500 ? 100 : 150;
        if (Math.floor(now / blinkInterval) % 2 !== 0) {
          showAura = false;
        }
      }

      if (showAura) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(
          playerRef.current.x + PLAYER_WIDTH / 2,
          playerRef.current.y + PLAYER_HEIGHT / 2,
          PLAYER_RADIUS * 1.1,
          0,
          Math.PI * 2,
        );
        ctx.fillStyle = "rgba(255, 204, 0, 0.25)";
        ctx.fill();
        ctx.strokeStyle = "rgba(255, 204, 0, 0.7)";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();
      }
    }
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

    powerUpsRef.current.forEach((p) => {
      ctx.save();
      if (p.type === "shield") {
        const outerRadius = POWERUP_RADIUS * 0.6;
        const innerRadius = POWERUP_RADIUS * 0.35;
        ctx.strokeStyle = "rgba(77, 148, 255, 0.9)";
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, outerRadius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(p.x, p.y, innerRadius, 0, Math.PI * 2);
        ctx.stroke();
      } else if (p.type === "rapid-fire") {
        ctx.fillStyle = "rgba(255, 204, 0, 0.9)";
        const barWidth = POWERUP_RADIUS * 0.7;
        const barHeight = POWERUP_RADIUS * 0.15;
        ctx.fillRect(p.x - barWidth / 2, p.y - POWERUP_RADIUS * 0.35, barWidth, barHeight);
        ctx.fillRect(p.x - barWidth / 2, p.y - POWERUP_RADIUS * 0.05, barWidth, barHeight);
        ctx.fillRect(p.x - barWidth / 2, p.y + POWERUP_RADIUS * 0.25, barWidth, barHeight);
      }
      ctx.restore();
    });

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

    ctx.save();
    explosionsRef.current.forEach((p) => {
      ctx.globalAlpha = Math.max(0, p.life / 60);
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x - 2, p.y - 2, 4, 4);
    });
    ctx.restore();

    animationFrameId.current = requestAnimationFrame(gameLoop);
  }, [isGameOver, score, fireBullet, createExplosion]);

  useEffect(() => {
    const pImg = new Image();
    pImg.src = mePng;
    pImg.onload = () => (playerImageRef.current = pImg);

    const eImg = new Image();
    eImg.src = enemyPng;
    eImg.onload = () => (enemyImageRef.current = eImg);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      setIsMobile(window.innerWidth < 768);

      const colors = ["#FFFFFF", "#B0C4DE", "#FFFACD"];
      starsRef.current = [];
      for (let i = 0; i < 400; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          speed: Math.random() * 1.5 + 0.5,
          size: Math.random() * 2 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          baseAlpha: Math.random() * 0.5 + 0.3,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(gameLoop);

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ([" ", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
      }
      keysPressed.current[e.key] = true;
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
  }, []);

  const handleJoystickStart = (e: React.TouchEvent<HTMLDivElement>) => {
    joystickRef.current.active = true;
    joystickRef.current.startX = e.touches[0].clientX;
    joystickRef.current.startY = e.touches[0].clientY;
  };

  const handleJoystickMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!joystickRef.current.active) return;
    const currentX = e.touches[0].clientX;
    const dx = currentX - joystickRef.current.startX;
    joystickRef.current.dx = Math.max(-1, Math.min(1, dx / 50));

    const currentY = e.touches[0].clientY;
    const dy = currentY - joystickRef.current.startY;
    joystickRef.current.dy = Math.max(-1, Math.min(1, dy / 50));
  };

  const handleJoystickEnd = () => {
    joystickRef.current.active = false;
    joystickRef.current.dx = 0;
    joystickRef.current.dy = 0;
  };

  return (
    <GameContainer isGameOver={isGameOver}>
      <canvas ref={canvasRef} />
      <Score>Score: {score}</Score>
      {!isGameOver && <InGameHomeLink to='/'>Go Home</InGameHomeLink>}
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
            <JoystickKnob
              style={{ transform: `translate(${joystickRef.current.dx * 20}px, ${joystickRef.current.dy * 20}px)` }}
            />
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

const CodeSnippetContainer = styled.div`
  height: 100vh;
  width: 100vw;

  pre {
    height: 100% !important;
    padding: 80px !important;
    font-size: 1.2rem !important;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding: 60px 20px !important;
      font-size: 1rem !important;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: 40px 15px !important;
      font-size: 0.85rem !important;
    }
  }
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

const GameContainer = styled.div<{ isGameOver: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  overflow: hidden;
  z-index: 2000;
  cursor: default;
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

const InGameHomeLink = styled(Link)`
  position: absolute;
  top: 20px;
  right: 20px;
  color: white;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 8px 16px;
  border-radius: 5px;
  text-decoration: none;
  font-family: "Pretendard", sans-serif;
  z-index: 2002;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export default NotFound;
