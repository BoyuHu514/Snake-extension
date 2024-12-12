class Head {
  constructor(el) {
    this.node = document.createElement('div');
    this.node.setAttribute('id', 'head');
    el.appendChild(this.node);

    this.currentDirection = 'right';
    this.SPEED = 250;

    this.node.style.top = 0;
    this.node.style.left = 0;

    // Refactor the below line to create a bound version of `this.Move`.
    // We must do this in order to retain the context of `this` in an asynchronous setTimeout call
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind

    this.boundMove = this.move.bind(this);

    setTimeout(this.boundMove, this.SPEED);
  }

  resetGame() {
    this.node.style.top = '0px';
    this.node.style.left = '0px';
    this.currentDirection = 'right';
  }

  move() {
    const head = this.node;
    const direction = this.currentDirection;

    let topPosition = Number(head.style.top.replace('px', ''));
    let leftPosition = Number(head.style.left.replace('px', ''));

    if (direction === 'right') {
      head.style.left = `${(leftPosition += 50)}px`;
    }
    if (direction === 'left') {
      head.style.left = `${(leftPosition -= 50)}px`;
    }
    if (direction === 'down') {
      head.style.top = `${(topPosition += 50)}px`;
    }
    if (direction === 'up') {
      head.style.top = `${(topPosition -= 50)}px`;
    }

    if (
      leftPosition >= 700 ||
      leftPosition < 0 ||
      topPosition >= 700 ||
      topPosition < 0
    ) {
      alert('Game Over');
      this.resetGame();
            
    }

    // if (this.leftPosition === apple.leftPosition) {
    //   el.removeChild('apple');
    //   // el.appendChild('apple');
    //   //new Apple(board);
    // }
    setTimeout(this.boundMove, this.SPEED);
    this.headTouch();
  }

  headTouch(){
    const head = this.node;
    let left = this.node.style.left
    let top = head.style.top
    const apples = document.querySelector('.apple')
    // let appleleft = apple.style.left
    // let appletop = apple.style.top
    apples.forEach((apple) => {
      if (apple.style.left === headLeft && apple.style.top === headTop) {
        alert('hit!');
        head.resetGame();
      }
    });
        //new Apple(board); this will also run the randomApple function
      }       
      }




