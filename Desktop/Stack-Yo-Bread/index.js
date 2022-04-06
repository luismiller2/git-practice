window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
  const playerimg = new Image();
  playerimg.src = "images/player.png";
  playerimg.onload = function () {
    ctx.drawImage(
      playerimg,
      player.position.x,
      player.position.y,
      player.w,
      player.h
    );
  };

  const gravity = 0.5;
  class Player {
    constructor() {
      this.position = {
        x: 80,
        y: 330,
      };
      this.w = 80;
      this.h = 200;
      this.speedX = 0;
      this.speedY = 0;
      this.gravity = 0.15;
      this.gravitySpeed = 0;
      this.update = function () {
        ctx = canvas.context;
        ctx.drawImage(playerimg, this.x, this.y, this.w, this.h);
      };
      this.newPos = function () {
        this.gravitySpeed += this.gravity;
        this.position.x += this.speedX;
        this.position.y += this.speedY + this.gravitySpeed;
        this.hitBottom();
        if(this.position.x < 0) {
          this.position.x = 0;
        } 
        if(this.position.x + this.w > canvas.width){
          this.position.x = canvas.width - this.w
        }
      };
      this.hitBottom = function () {
        let rockbottom = canvas.height - this.h;
        // console.log("bottom", rockbottom);
        if (this.position.y > rockbottom) {
          this.position.y = rockbottom;
          this.gravitySpeed = 0;
        }
      };
      this.stack = [];
      this.message = ""
      this.messageTimer = 0
    }
  }

  class Stack {
    constructor() {
      this.position = {
        x: Math.random() * 500,
        y: 10,
      };
      this.w = 100;
      this.h = 100;
    }
  }

  class Obstacle {
    constructor() {
      this.position = {
        x: -140,
        y: 680,
      };
      this.w = 80;
      this.h = 20;
      this.score = 0;
    }
  }
  const stack = new Stack();
  const player = new Player();
  let stackArr = [];
  let obstacleArr = [];
  let countObstacleCollisions = 0;
  let countStacksMissed = 0;
  player.score = 0;
  let int;

  function addStack() {
    stackArr.push(new Stack());
  }
  setInterval(addStack, 2000);
  setInterval(addObstacle, 1700);

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 600;
  canvas.height = 700;
  const h = canvas.height;
  const w = canvas.width;

  const stackimg = new Image();
  stackimg.src = "images/moneystacks.png";
  stackimg.onload = function () {
    ctx.drawImage(
      stackimg,
      stack.position.x,
      stack.position.y,
      stack.w,
      stack.h
    );
  };

  let gameOn = false;
  function startGame() {
    if(gameOn === false){
      gameOn = true;
      animate();
    }
  }

  function addObstacle() {
    obstacleArr.push(new Obstacle());
  }

  let game;

  function animate() {
    game = window.requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = "30px Times";
    ctx.fillText(`Score: ${player.score}`, 70, 30);
    ctx.drawImage(
      playerimg,
      player.position.x,
      player.position.y,
      player.w,
      player.h
    );
      if(player.messageTimer){
        ctx.fillText(player.message, 70, 100);
        player.messageTimer--
      }

    for(let i = 0; i < player.stack.length; i++) {
      ctx.drawImage(
        stackimg,
        player.position.x,
        player.position.y-(player.stack[i].h*(i+1)),
        player.stack[i].w,
        player.stack[i].h
      );
    }


    for (let i = 0; i < stackArr.length; i++) {
      ctx.drawImage(
        stackimg,
        stackArr[i].position.x,
        stackArr[i].position.y,
        stackArr[i].w,
        stackArr[i].h
      );
      stackArr[i].position.y += 4;

      player.newPos();
      let didCollide = detectCollision(player, stackArr[i]);
      if (didCollide) {
        let caughtStack = stackArr.splice(i,1)
        console.log(caughtStack);
        player.stack.push(caughtStack[0]);
        player.score++;
        break;
      } 
      if(stackArr[i].position.y + stackArr[i].h > canvas.height) {
        player.score--;
        stackArr.splice(i,1);
        player.message ='Get your money up, NOT your funny up'
        player.stack.pop();
        player.messageTimer = 100
        countStacksMissed++;
      }
      if(countStacksMissed === 3) {
        gameOver();
      }

    }
    ctx.fillStyle = "brown";
    for (let i = 0; i < obstacleArr.length; i++) {
      ctx.fillRect(
        obstacleArr[i].position.x,
        obstacleArr[i].position.y,
        obstacleArr[i].w,
        obstacleArr[i].h
      );
      obstacleArr[i].position.x += 6;
      //this will evaluate to true or false
      let didCollide = detectCollision(player, obstacleArr[i]);
      if (didCollide) {
        obstacleArr.splice(i,1);
        player.score--;
        player.message='You fumbled the bag :('
        player.stack.pop();
        player.messageTimer = 100
        countObstacleCollisions++;
      }
      if (countObstacleCollisions === 3) {
        gameOver();
      }
  }
  }

    function gameOver() {
      gameOn = false;
      window.cancelAnimationFrame(game);
      clearInterval(int);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = "red";
      ctx.font = "68px Times";
      ctx.fillText("GAME OVER", 100, 100);
      ctx.fillStyle = "white";
      ctx.font = "34px Times";
      ctx.fillText(`You Dead Boi, Final Score: ${player.score}`, 100, 300);
    }
  
  function move(e) {
    switch (e.code) {
      case "ArrowLeft":
        if (player.position.x < 0) {
          player.position.x = 0;
        }
        // } else {
        //   player.position.x -= 25;
        // }
        break;
      case "ArrowRight":
        if (player.position.x + player.w + 10 > w) {
          player.position.x = w - player.w;
        }
        // } else {
        //   player.position.x += 25;
        // }
        break;
      case "Space":
        player.position.y -= 100;
        // console.log("jump");
        break;
    }
  }

  document.addEventListener("keydown", move);
  function detectCollision(player, obj) {
    if (
      player.position.x < obj.position.x + obj.w &&
      player.position.x + player.w > obj.position.x &&
      player.position.y < obj.position.y + obj.h &&
      player.position.y + player.h > obj.position.y
    ) {
      return true;
    } else {
      return false;
    }
  }
  document.addEventListener("keydown", (e) => {
    switch (e.keyCode) {
      // case 38: // up arrow
      //   player.speedY = -5;
      //   break;
      case 40: // down arrow
        player.speedY = 5;
        break;
      case 37: // left arrow
        player.speedX = -5;
        break;
      case 39: // right arrow
        player.speedX = 5;
        break;
    }
  });
  
  document.addEventListener("keyup", (e) => {
    player.speedX = 0;
    player.speedY = 0;
  });
}

