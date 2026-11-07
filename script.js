const hobbyData = {
  valorant: {
    title: "Valorant",
    items: [
      { src: "images/valorant/1.png", fallback: "https://i.imgur.com/bM84lHP.png", caption: "Clutch Round" },
      { src: "images/valorant/2.png", fallback: "https://i.imgur.com/hemZZL0.png", caption: "Match MVP" },
      { src: "images/valorant/3.png", fallback: "https://i.imgur.com/6vT8Rp5.png", caption: "Comp Queue" },
      { src: "images/valorant/4.png", fallback: "https://i.imgur.com/bM84lHP.png", caption: "Lobby Squad" }
    ]
  },
  roblox: {
    title: "Roblox",
    items: [
      { src: "images/roblox/1.png", fallback: "https://i.imgur.com/hemZZL0.png", caption: "Co-op Lobby" },
      { src: "images/roblox/2.png", fallback: "https://i.imgur.com/bM84lHP.png", caption: "Avatar Fit" },
      { src: "images/roblox/3.png", fallback: "https://i.imgur.com/6vT8Rp5.png", caption: "Obby Run" },
      { src: "images/roblox/4.png", fallback: "https://i.imgur.com/hemZZL0.png", caption: "Late Night" }
    ]
  },
  manhwa: {
    title: "Manhwa & Novel",
    items: [
      { src: "images/manhwa/1.png", fallback: "https://i.imgur.com/bM84lHP.png", caption: "Favorite Arc" },
      { src: "images/manhwa/2.png", fallback: "https://i.imgur.com/hemZZL0.png", caption: "Top Manhwa" },
      { src: "images/manhwa/3.png", fallback: "https://i.imgur.com/6vT8Rp5.png", caption: "Webnovel Read" },
      { src: "images/manhwa/4.png", fallback: "https://i.imgur.com/bM84lHP.png", caption: "Reading List" }
    ]
  },
  genshin: {
    title: "Genshin",
    items: [
      { src: "images/pics/genshin1.png", fallback: "https://i.imgur.com/bM84lHP.png", caption: "Teyvat Scenery" },
      { src: "images/pics/genshin2.png", fallback: "https://i.imgur.com/hemZZL0.png", caption: "Main Party" },
      { src: "images/pics/genshin3.png", fallback: "https://i.imgur.com/6vT8Rp5.png", caption: "Boss Clear" },
      { src: "images/pics/genshin4.png", fallback: "https://i.imgur.com/bM84lHP.png", caption: "Co-op Domain" }
    ]
  },
  moments: {
    title: "Random Moments Pics",
    items: [
      { src: "images/pics/1.jpg", fallback: "https://i.imgur.com/hemZZL0.png", caption: "Campus Life" },
      { src: "images/pics/2.jpg", fallback: "https://i.imgur.com/bM84lHP.png", caption: "With Friends" },
      { src: "images/pics/3.jpg", fallback: "https://i.imgur.com/6vT8Rp5.png", caption: "Study Grind" },
      { src: "images/pics/4.jpg", fallback: "https://i.imgur.com/2Om6mBw.png", caption: "Core Memory" }
    ]
  }
};

const socialsGalleryData = [
  { src: "images/pics/1.jpg", fallback: "https://i.imgur.com/hemZZL0.png", caption: "SM Scholar" },
  { src: "images/pics/2.jpg", fallback: "https://i.imgur.com/bM84lHP.png", caption: "With Friends" },
  { src: "images/pics/3.jpg", fallback: "https://i.imgur.com/6vT8Rp5.png", caption: "First Year" },
  { src: "images/pics/4.jpg", fallback: "https://i.imgur.com/2Om6mBw.png", caption: "STI Memories" },
  { src: "images/pics/5.jpg", fallback: "https://i.imgur.com/hemZZL0.png", caption: "Quiz Bee" },
  { src: "images/pics/6.jpg", fallback: "https://i.imgur.com/bM84lHP.png", caption: "Speech Event" },
  { src: "images/pics/7.jpg", fallback: "https://i.imgur.com/6vT8Rp5.png", caption: "Art Painting" },
  { src: "images/pics/8.jpg", fallback: "https://i.imgur.com/hemZZL0.png", caption: "Fur Babies" }
];

function initFloatingPetals() {
  const container = document.getElementById("petal-bg");
  if (!container) return;

  const petalCount = 18;
  for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement("div");
    petal.className = "floating-petal";
    const size = Math.random() * 10 + 8;
    petal.style.width = `${size}px`;
    petal.style.height = `${size * 0.8}px`;
    petal.style.left = `${Math.random() * 100}vw`;
    petal.style.animationDuration = `${Math.random() * 9 + 9}s`;
    petal.style.animationDelay = `${Math.random() * 8}s`;
    container.appendChild(petal);
  }
}

function initNavigation() {
  const startScreen = document.getElementById("start-screen");
  const pressStartBtn = document.getElementById("press-start-btn");
  const appShell = document.getElementById("app-shell");
  const navTabs = document.querySelectorAll(".nav-tab");
  const tabPanels = document.querySelectorAll(".tab-panel");

  if (pressStartBtn && startScreen && appShell) {
    pressStartBtn.addEventListener("click", () => {
      startScreen.style.opacity = "0";
      startScreen.style.transform = "scale(1.04)";
      setTimeout(() => {
        startScreen.classList.add("hidden");
        appShell.classList.remove("hidden");
      }, 420);
    });
  }

  navTabs.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-tab");

      navTabs.forEach(t => t.classList.remove("active"));
      btn.classList.add("active");

      tabPanels.forEach(panel => {
        if (panel.id === `tab-${target}`) {
          panel.classList.add("active");
        } else {
          panel.classList.remove("active");
        }
      });

      if (target === "game") {
        startMazeGame();
      } else {
        stopMazeGame();
      }
    });
  });
}

function attachImageFallbacks(root = document) {
  const imgs = root.querySelectorAll("img[data-fallback]");
  imgs.forEach(img => {
    img.addEventListener("error", function handleErr() {
      const fb = img.getAttribute("data-fallback");
      if (fb && img.src !== fb) {
        img.src = fb;
      }
      img.removeEventListener("error", handleErr);
    });
  });
}

function openLightbox(src, captionText = "") {
  const modal = document.getElementById("lightbox-modal");
  const modalImg = document.getElementById("lightbox-img");
  const modalCap = document.getElementById("lightbox-caption");
  if (!modal || !modalImg) return;

  modalImg.src = src;
  if (modalCap) modalCap.textContent = captionText;
  modal.classList.remove("hidden");
}

function initLightbox() {
  const modal = document.getElementById("lightbox-modal");
  const closeBtn = document.getElementById("lightbox-close");

  document.addEventListener("click", e => {
    const hoverCard = e.target.closest(".hover-img-card");
    if (hoverCard) {
      const img = hoverCard.querySelector("img");
      const cap = hoverCard.getAttribute("data-caption") || (img ? img.alt : "");
      if (img) openLightbox(img.src, cap);
      return;
    }

    const expImg = e.target.closest(".expandable-img");
    if (expImg) {
      openLightbox(expImg.src, expImg.alt || "");
    }
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
  }
  if (modal) {
    modal.addEventListener("click", e => {
      if (e.target === modal) modal.classList.add("hidden");
    });
  }
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && modal && !modal.classList.contains("hidden")) {
      modal.classList.add("hidden");
    }
  });
}

function initChatWithMe() {
  const chatBox = document.getElementById("chat-box");
  const chatBtns = document.querySelectorAll(".chat-btn");

  const replies = {
    "What do you love building?":
      "I love building mobile apps in Android Studio (Kotlin, Jetpack Compose, Java) and interactive web platforms where clean backend logic meets pastel, gamified UI/UX!",
    "Tell me a fun fact!":
      "I never became complacent again after getting a -10 in our Senior High School Mobile Programming class because my final app's database wasn't fully functioning! Now I double-check every schema and pipeline.",
    "What are your current tech interests?":
      "Right now I'm deep into Mobile & Web Development, Cybersecurity (CTFs on CyLab & IBM SkillsBuild), Linux administration (RHEL), and on-device ML pipelines!",
    "How do you stay organized?":
      "As an ENTJ, I have a huge fondness for organizing things—from my daily schedule and to-do lists to my workspace and living space, everything has a structured list!"
  };

  chatBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const q = btn.getAttribute("data-q");
      const a = replies[q] || "Thanks for chatting with me! Feel free to explore my projects and galleries.";

      const userDiv = document.createElement("div");
      userDiv.className = "chat-msg user";
      userDiv.innerHTML = `<span class="chat-sender">Visitor:</span><p>${q}</p>`;
      chatBox.appendChild(userDiv);

      setTimeout(() => {
        const botDiv = document.createElement("div");
        botDiv.className = "chat-msg bot";
        botDiv.innerHTML = `<span class="chat-sender">Kyo:</span><p>${a}</p>`;
        chatBox.appendChild(botDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
      }, 220);

      chatBox.scrollTop = chatBox.scrollHeight;
    });
  });
}


function renderHobbyGallery(categoryKey) {
  const data = hobbyData[categoryKey];
  const titleEl = document.getElementById("hobby-current-title");
  const gridEl = document.getElementById("hobby-gallery-grid");
  if (!data || !gridEl) return;

  if (titleEl) titleEl.textContent = data.title;

  gridEl.innerHTML = data.items
    .map(
      item => `
      <div class="hover-img-card" data-caption="${item.caption}">
        <img src="${item.src}" data-fallback="${item.fallback}" alt="${item.caption}" class="expandable-img">
      </div>
    `
    )
    .join("");

  attachImageFallbacks(gridEl);
}

function initHobbiesConnectors() {
  const nodes = document.querySelectorAll(".flower-node");
  nodes.forEach(node => {
    node.addEventListener("click", () => {
      nodes.forEach(n => n.classList.remove("active"));
      node.classList.add("active");
      const key = node.getAttribute("data-hobby");
      renderHobbyGallery(key);
    });
  });

  renderHobbyGallery("valorant");
}

function initLinkedInVault() {
  const toggleBtn = document.getElementById("linkedin-toggle-btn");
  const content = document.getElementById("linkedin-vault-content");
  const chevron = document.getElementById("vault-chevron");

  if (!toggleBtn || !content) return;

  toggleBtn.addEventListener("click", () => {
    const isHidden = content.classList.toggle("hidden");
    toggleBtn.setAttribute("aria-expanded", String(!isHidden));
    if (chevron) {
      chevron.textContent = isHidden ? "▼ Expand All" : "▲ Collapse";
    }
  });
}

function initSocialsAndPet() {
  const gridEl = document.getElementById("socials-gallery-grid");
  if (gridEl) {
    gridEl.innerHTML = socialsGalleryData
      .map(
        item => `
        <div class="hover-img-card" data-caption="${item.caption}">
          <img src="${item.src}" data-fallback="${item.fallback}" alt="${item.caption}" class="expandable-img">
        </div>
      `
      )
      .join("");
    attachImageFallbacks(gridEl);
  }

  const pet = document.getElementById("roaming-pet");
  const bubble = document.getElementById("pet-bubble");
  if (!pet || !bubble) return;

  let posX = 80;
  let dir = 1;
  const phrases = [
    "Hewwo! ♡",
    "Click a photo!",
    "Hardwork beats all!",
    "Yay Kyo! ✿",
    "So many memories~",
    "Purr~ ♡"
  ];

  setInterval(() => {
    const maxW = window.innerWidth - 110;
    posX += dir * 2.2;
    if (posX >= maxW) {
      posX = maxW;
      dir = -1;
    } else if (posX <= 24) {
      posX = 24;
      dir = 1;
    }
    pet.style.left = `${posX}px`;
    const sprite = pet.querySelector(".pet-sprite svg");
    if (sprite) {
      sprite.style.transform = dir === -1 ? "scaleX(-1)" : "scaleX(1)";
    }
  }, 50);

  pet.addEventListener("click", () => {
    const msg = phrases[Math.floor(Math.random() * phrases.length)];
    bubble.textContent = msg;
    pet.style.transform = "translateY(-14px)";
    setTimeout(() => {
      pet.style.transform = "translateY(0)";
    }, 220);
  });
}

const TILE = 32;
const BASE_MAZE = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,2,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,2,1],
  [1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1],
  [1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1],
  [1,0,0,0,1,1,0,1,1,3,1,1,0,1,1,0,0,0,1],
  [1,1,1,0,1,0,0,0,3,3,3,0,0,0,1,0,1,1,1],
  [1,0,0,0,0,0,1,3,1,3,1,3,1,0,0,0,0,0,1],
  [1,1,1,0,1,0,1,3,1,1,1,3,1,0,1,0,1,1,1],
  [1,0,0,0,1,1,0,0,0,3,0,0,0,1,1,0,0,0,1],
  [1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1],
  [1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1],
  [1,2,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,2,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

let mazeGrid = [];
let mazeAnimId = null;
let mazeRunning = false;
let score = 0;
let dotsRemaining = 0;
let lives = 3;
let powerTimer = 0;
let petalAngle = 0;

const player = {
  x: 9,
  y: 8,
  dirX: 0,
  dirY: 0,
  nextX: 0,
  nextY: 0,
  tickCounter: 0
};

let windSpirits = [];

function resetMazeState() {
  mazeGrid = BASE_MAZE.map(row => [...row]);
  score = 0;
  lives = 3;
  powerTimer = 0;
  dotsRemaining = 0;

  for (let r = 0; r < mazeGrid.length; r++) {
    for (let c = 0; c < mazeGrid[r].length; c++) {
      if (mazeGrid[r][c] === 0 || mazeGrid[r][c] === 2) {
        dotsRemaining++;
      }
    }
  }

  resetPositions();
  updateMazeHUD();
  const overlay = document.getElementById("maze-overlay");
  if (overlay) overlay.classList.add("hidden");
}

function resetPositions() {
  player.x = 9;
  player.y = 8;
  player.dirX = 0;
  player.dirY = 0;
  player.nextX = 0;
  player.nextY = 0;

  windSpirits = [
    { x: 8, y: 5, dx: -1, dy: 0, color: "#c084fc" },
    { x: 9, y: 5, dx: 0, dy: -1, color: "#38bdf8" },
    { x: 10, y: 5, dx: 1, dy: 0, color: "#fb7185" }
  ];
}

function updateMazeHUD() {
  const sEl = document.getElementById("maze-score");
  const dEl = document.getElementById("maze-dots");
  const lEl = document.getElementById("maze-lives");
  if (sEl) sEl.textContent = String(score);
  if (dEl) dEl.textContent = String(dotsRemaining);
  if (lEl) lEl.textContent = "♥".repeat(Math.max(0, lives));
}

function isWalkable(c, r) {
  if (r < 0 || r >= mazeGrid.length || c < 0 || c >= mazeGrid[0].length) return false;
  return mazeGrid[r][c] !== 1;
}

function stepGameLogic() {
  if (powerTimer > 0) powerTimer--;

  if (
    (player.nextX !== 0 || player.nextY !== 0) &&
    isWalkable(player.x + player.nextX, player.y + player.nextY)
  ) {
    player.dirX = player.nextX;
    player.dirY = player.nextY;
  }

  if (isWalkable(player.x + player.dirX, player.y + player.dirY)) {
    player.x += player.dirX;
    player.y += player.dirY;
  }


  const currentTile = mazeGrid[player.y][player.x];
  if (currentTile === 0) {
    mazeGrid[player.y][player.x] = 3;
    score += 10;
    dotsRemaining--;
  } else if (currentTile === 2) {
    mazeGrid[player.y][player.x] = 3;
    score += 50;
    dotsRemaining--;
    powerTimer = 32; 
  }

  if (dotsRemaining <= 0) {
    showMazeEnd("Canopy Cleared!", `Your Sakura Petal collected every drop of pollen! Final Score: ${score}`);
    return;
  }

  windSpirits.forEach(spirit => {
    const dirs = [
      { dx: 1, dy: 0 },
      { dx: -1, dy: 0 },
      { dx: 0, dy: 1 },
      { dx: 0, dy: -1 }
    ];

    const valid = dirs.filter(d => isWalkable(spirit.x + d.dx, spirit.y + d.dy));
    const nonReverse = valid.filter(d => !(d.dx === -spirit.dx && d.dy === -spirit.dy));
    const choices = nonReverse.length > 0 ? nonReverse : valid;

    if (choices.length > 0) {
      const pick = choices[Math.floor(Math.random() * choices.length)];
      spirit.dx = pick.dx;
      spirit.dy = pick.dy;
      spirit.x += pick.dx;
      spirit.y += pick.dy;
    }

    if (spirit.x === player.x && spirit.y === player.y) {
      if (powerTimer > 0) {
        score += 100;
        spirit.x = 9;
        spirit.y = 5;
      } else {
        lives--;
        updateMazeHUD();
        if (lives <= 0) {
          showMazeEnd("Carried by the Wind!", `Final Score: ${score}. Tap Play Again to guide your petal!`);
        } else {
          resetPositions();
        }
      }
    }
  });

  updateMazeHUD();
}

function drawSakuraPetal(ctx, cx, cy, radius, angle) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(angle);

  for (let i = 0; i < 5; i++) {
    ctx.save();
    ctx.rotate((i * Math.PI * 2) / 5);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(-radius * 0.55, -radius * 0.7, 0, -radius);
    ctx.quadraticCurveTo(radius * 0.55, -radius * 0.7, 0, 0);
    ctx.fillStyle = powerTimer > 0 ? "#fde047" : "#f472b6";
    ctx.fill();
    ctx.restore();
  }

  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.28, 0, Math.PI * 2);
  ctx.fillStyle = "#fffbeb";
  ctx.fill();
  ctx.restore();
}

function renderMaze() {
  const canvas = document.getElementById("maze-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#1e1028";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let r = 0; r < mazeGrid.length; r++) {
    for (let c = 0; c < mazeGrid[r].length; c++) {
      const cell = mazeGrid[r][c];
      const x = c * TILE;
      const y = r * TILE;

      if (cell === 1) {
        ctx.fillStyle = "#3b174d";
        ctx.fillRect(x + 2, y + 2, TILE - 4, TILE - 4);
        ctx.strokeStyle = "#ec4899";
        ctx.lineWidth = 1.5;
        ctx.strokeRect(x + 3, y + 3, TILE - 6, TILE - 6);
      } else if (cell === 0) {
        ctx.beginPath();
        ctx.arc(x + TILE / 2, y + TILE / 2, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = "#fde047";
        ctx.fill();
      } else if (cell === 2) {
        ctx.beginPath();
        ctx.arc(x + TILE / 2, y + TILE / 2, 7, 0, Math.PI * 2);
        ctx.fillStyle = "#7dd3fc";
        ctx.fill();
      }
    }
  }

  windSpirits.forEach(s => {
    const sx = s.x * TILE + TILE / 2;
    const sy = s.y * TILE + TILE / 2;
    ctx.beginPath();
    ctx.arc(sx, sy, 10, 0, Math.PI * 2);
    ctx.fillStyle = powerTimer > 0 ? "#93c5fd" : s.color;
    ctx.fill();
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    ctx.stroke();
  });

  petalAngle += 0.06;
  drawSakuraPetal(
    ctx,
    player.x * TILE + TILE / 2,
    player.y * TILE + TILE / 2,
    12,
    petalAngle
  );
}

function mazeLoop() {
  if (!mazeRunning) return;
  player.tickCounter++;
  if (player.tickCounter % 11 === 0) {
    stepGameLogic();
  }
  renderMaze();
  mazeAnimId = requestAnimationFrame(mazeLoop);
}

function showMazeEnd(title, desc) {
  mazeRunning = false;
  if (mazeAnimId) cancelAnimationFrame(mazeAnimId);
  const overlay = document.getElementById("maze-overlay");
  const tEl = document.getElementById("maze-status-title");
  const dEl = document.getElementById("maze-status-desc");
  if (tEl) tEl.textContent = title;
  if (dEl) dEl.textContent = desc;
  if (overlay) overlay.classList.remove("hidden");
}

function startMazeGame() {
  if (mazeGrid.length === 0) resetMazeState();
  if (!mazeRunning) {
    mazeRunning = true;
    mazeLoop();
  }
}

function stopMazeGame() {
  mazeRunning = false;
  if (mazeAnimId) cancelAnimationFrame(mazeAnimId);
}

function initMazeControls() {
  resetMazeState();

  window.addEventListener("keydown", e => {
    if (!mazeRunning) return;
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key)) {
      e.preventDefault();
    }
    if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") {
      player.nextX = 0; player.nextY = -1;
    } else if (e.key === "ArrowDown" || e.key === "s" || e.key === "S") {
      player.nextX = 0; player.nextY = 1;
    } else if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
      player.nextX = -1; player.nextY = 0;
    } else if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
      player.nextX = 1; player.nextY = 0;
    }
  });

  document.querySelectorAll(".dpad-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const dir = btn.getAttribute("data-dir");
      if (dir === "up") { player.nextX = 0; player.nextY = -1; }
      if (dir === "down") { player.nextX = 0; player.nextY = 1; }
      if (dir === "left") { player.nextX = -1; player.nextY = 0; }
      if (dir === "right") { player.nextX = 1; player.nextY = 0; }
    });
  });

  const restartBtn = document.getElementById("maze-restart-btn");
  const playAgainBtn = document.getElementById("maze-play-again");
  if (restartBtn) {
    restartBtn.addEventListener("click", () => {
      resetMazeState();
      startMazeGame();
    });
  }
  if (playAgainBtn) {
    playAgainBtn.addEventListener("click", () => {
      resetMazeState();
      startMazeGame();
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initFloatingPetals();
  initNavigation();
  attachImageFallbacks();
  initLightbox();
  initChatWithMe();
  initHobbiesConnectors();
  initLinkedInVault();
  initSocialsAndPet();
  initMazeControls();
});
