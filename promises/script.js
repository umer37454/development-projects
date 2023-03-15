/*creating a promise*/

const delayedColorChange = (color, delay) => {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });

}

/*Executing a promise

delayedColorChange('red', 1000)
  .then(() => delayedColorChange('orange', 1000))
  .then(() => delayedColorChange('teal', 1000))
  .then(() => delayedColorChange('green', 1000))
  .then(() => delayedColorChange('yellow', 1000))
  .then(() => delayedColorChange('grey', 1000))

/* Call back hell in promise also so make then return promise object

delayedColorChange('red', 1000)
  .then(() => {
    delayedColorChange('orange', 1000)
    .then(() => {
      delayedColorChange('teal', 1000)
      .then(() => {
        delayedColorChange('green', 1000)
      })
    })
  })

  */

/* Async Await
 async return promise
 await returns resolved promise
 and if data is return with await we can capture it in var
 and if something is returned with async then that will act as data */

const rainbow = async () => {
  await delayedColorChange('red', 1000)
  await delayedColorChange('orange', 1000)
  await delayedColorChange('green', 1000)
  await delayedColorChange('teal', 1000)
  await delayedColorChange('black', 1000)
  delayedColorChange('white', 1000)
}

