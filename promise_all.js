/**
 * Необходимо реализовать функцию, аналог Promise.all()
 */

function all(promises) {
  return new Promise((success, fail) => {
    let successArr = new Array(promises.length);

    if (promises.length === 0) {
      success(successArr);
    }
    let pending = promises.length;

    promises.forEach((promise, i) => {
      promise.then((result) => {
        successArr[i] = result;
        pending -= 1;

        if (pending === 0) {
          success(successArr);
        }
      }, (error) => {
        fail(error);
      });
    });
  });
}

function soon(val) {
  return new Promise((success) => {
    setTimeout(() => { success(val); }, Math.random() * 500);
  });
}

all([soon(1), soon(2), soon(3)]).then((array) => console.log("This should be [1, 2, 3]:", array));
