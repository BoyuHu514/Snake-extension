class Apple {
  constructor(el) {
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'apple');
    this.node.setAttribute('src', 'src/assets/apple.jpg');

    el.appendChild(this.node);
    this.randomApple();
  }

  randomApple() {
    let leftPosition = Math.floor(Math.random() * 14) * 50;
    let topPosition = Math.floor(Math.random() * 14) * 50;

    this.node.style.left = `${leftPosition}px`;
    this.node.style.top = `${topPosition}px`;
  }
}
