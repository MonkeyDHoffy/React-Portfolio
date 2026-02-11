import { useCallback, useEffect, useRef, useState } from "react";
import PageContainer from "../layout/PageContainer";
import "./runner.css";

const DEFAULT_GAME_WIDTH = 360;
const GROUND_OFFSET = 10;
const PLAYER_LEFT = 56;
const PLAYER_SIZE = 10;
const GRAVITY = 1800;
const JUMP_VELOCITY = 560;
const MAX_JUMP_HEIGHT = 36;
const OBSTACLE_WIDTH = 10;
const OBSTACLE_HEIGHT = PLAYER_SIZE * 1.6;
const BASE_OBSTACLE_SPEED = 90;
const MAX_OBSTACLE_SPEED = 280;
const GAP_MIN = 140;
const GAP_MAX = 260;

const randomGap = () => GAP_MIN + Math.random() * (GAP_MAX - GAP_MIN);
const createObstacle = (x, id) => ({ id, x, passed: false, hit: false });

const Runner = () => {
  const playerRef = useRef({ y: 0, vy: 0 });
  const [player, setPlayer] = useState(playerRef.current);
  const obstaclesRef = useRef([createObstacle(DEFAULT_GAME_WIDTH, 0)]);
  const [obstacles, setObstacles] = useState(obstaclesRef.current);
  const scoreRef = useRef(0);
  const [score, setScore] = useState(0);

  const rafRef = useRef(0);
  const lastTimeRef = useRef(0);
  const nextGapRef = useRef(randomGap());
  const nextIdRef = useRef(1);
  const trackRef = useRef(null);
  const gameWidthRef = useRef(DEFAULT_GAME_WIDTH);

  const loop = useCallback(
    (time) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = time;
      }

      const delta = Math.min((time - lastTimeRef.current) / 1000, 0.032);
      lastTimeRef.current = time;

      const previousPlayer = playerRef.current;
      let vy = previousPlayer.vy - GRAVITY * delta;
      let y = previousPlayer.y + vy * delta;

      if (y <= 0) {
        y = 0;
        vy = 0;
      }

      if (y >= MAX_JUMP_HEIGHT) {
        y = MAX_JUMP_HEIGHT;
      }

      const nextPlayer = { y, vy };
      playerRef.current = nextPlayer;
      setPlayer(nextPlayer);

      const playerLeftEdge = PLAYER_LEFT;
      const playerRightEdge = PLAYER_LEFT + PLAYER_SIZE;
      const playerBottom = GROUND_OFFSET + nextPlayer.y;
      const playerTop = playerBottom + PLAYER_SIZE;
      const obstacleBottom = GROUND_OFFSET;
      const obstacleTop = obstacleBottom + OBSTACLE_HEIGHT;
      const width = gameWidthRef.current;

      let collision = false;
      let gained = 0;

      const obstacleSpeed = Math.min(MAX_OBSTACLE_SPEED, BASE_OBSTACLE_SPEED + scoreRef.current * 10);

      let updated = obstaclesRef.current
        .map((obstacle) => {
          const nextX = obstacle.x - obstacleSpeed * delta;
          const obstacleRight = nextX + OBSTACLE_WIDTH;
          let hit = obstacle.hit;
          const overlapX = playerRightEdge > nextX && playerLeftEdge < obstacleRight;
          const overlapY = playerTop > obstacleBottom && playerBottom < obstacleTop;

          if (!hit && overlapX && overlapY) {
            hit = true;
            collision = true;
          }

          let passed = obstacle.passed;
          if (!passed && obstacleRight < playerLeftEdge) {
            passed = true;
            if (!hit) {
              gained += 1;
            }
          }

          return { ...obstacle, x: nextX, passed, hit };
        })
        .filter((obstacle) => obstacle.x > -OBSTACLE_WIDTH);

      const tail = updated.at(-1);
      const tailX = tail ? tail.x : width;

      if (tailX < width - nextGapRef.current) {
        updated = [...updated, createObstacle(width, nextIdRef.current)];
        nextIdRef.current += 1;
        nextGapRef.current = randomGap();
      }

      if (!updated.length) {
        updated = [createObstacle(width, nextIdRef.current)];
        nextIdRef.current += 1;
        nextGapRef.current = randomGap();
      }

      obstaclesRef.current = updated;
      setObstacles(updated);

      if (collision) {
        if (scoreRef.current !== 0) {
          scoreRef.current = 0;
          setScore(0);
        }
      } else if (gained) {
        scoreRef.current += gained;
        setScore(scoreRef.current);
      }

      rafRef.current = requestAnimationFrame(loop);
    },
    []
  );

  useEffect(() => {
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, [loop]);

  useEffect(() => {
    const node = trackRef.current;
    if (!node) return undefined;

    const updateWidth = () => {
      const nextWidth = Math.max(node.clientWidth, 240);
      if (Math.abs(nextWidth - gameWidthRef.current) < 1) return;
      gameWidthRef.current = nextWidth;
      setObstacles((prev) => {
        const next = prev.map((obstacle) => ({ ...obstacle, x: Math.min(obstacle.x, nextWidth) }));
        obstaclesRef.current = next;
        return next;
      });
    };

    updateWidth();

    if (typeof ResizeObserver === "function") {
      const observer = new ResizeObserver(updateWidth);
      observer.observe(node);
      return () => observer.disconnect();
    }

    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleJump = useCallback(() => {
    if (playerRef.current.y > 0) {
      return;
    }

    playerRef.current = { y: playerRef.current.y, vy: JUMP_VELOCITY };
    setPlayer(playerRef.current);
  }, []);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.code === "Space" || event.code === "Enter") {
        event.preventDefault();
        handleJump();
      }
    },
    [handleJump]
  );

  useEffect(() => {
    const handleGlobalPointer = () => {
      handleJump();
    };

    window.addEventListener("pointerdown", handleGlobalPointer);
    return () => window.removeEventListener("pointerdown", handleGlobalPointer);
  }, [handleJump]);

  return (
    <section className="runner-section">
      <PageContainer className="runner-shell">
        <div
          ref={trackRef}
          className="runner-track"
          onClick={handleJump}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
          aria-label="Click oder tippe Leertaste, um den Pixel springen zu lassen"
        >
          <div
            className="runner-player-wrapper"
            style={{ bottom: GROUND_OFFSET + player.y, left: PLAYER_LEFT, width: PLAYER_SIZE }}
          >
            <div className="runner-score" aria-live="polite">
              {score.toString().padStart(2, "0")}
            </div>
            <div
              className="runner-player"
              style={{ width: "100%", height: PLAYER_SIZE }}
            />
          </div>

          {obstacles.map((obstacle) => (
            <div
              key={obstacle.id}
              className="runner-obstacle"
              style={{
                left: obstacle.x,
                width: OBSTACLE_WIDTH,
                height: OBSTACLE_HEIGHT,
                bottom: GROUND_OFFSET,
              }}
            />
          ))}

          <div className="runner-ground" />
        </div>
      </PageContainer>
    </section>
  );
};

export default Runner;