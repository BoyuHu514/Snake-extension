document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const board = document.querySelector('#board');
  // const newApple = document.querySelector('#apple');

  const head = new Head(board);
  new Apple(board);

  setInterval(() => {
    new Apple(board);
  }, 2000);

  body.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft') {
      console.log('pressed left');
      head.currentDirection = 'left';
    } else if (e.code === 'ArrowRight') {
      console.log('pressed right');
      head.currentDirection = 'right';
    } else if (e.code === `ArrowDown`) {
      console.log('pressed down');
      head.currentDirection = 'down';
    } else if (e.code === `ArrowUp`) {
      console.log('pressed up');
      head.currentDirection = 'up';
    }
  });

//   //if head touch apple 
//   if(headTouch()){
    
//   //remove apple
//   // remvoeApple()
//   //create new apple
//   apple = new Apple(board);
// }

});
