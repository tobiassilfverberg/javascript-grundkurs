/**
 * Promises 101
 *
 */

const teacherIsNice = false;

const willWeGetTheAnswersToTheExam = () => {
  return new Promise((resolve, reject) => {
    // do something that takes some time to do
    // and when done, resolve or reject promise
    setTimeout(() => {
      if (teacherIsNice) {
        // resolve promise
        resolve();
      } else {
        // reject promise
        reject();
      }
    }, 5000);
  });
};

willWeGetTheAnswersToTheExam()
  .then(() => {
    alert("Promise has been fulfilled. YAY!");
  })
  .catch(() => {
    alert("You always make promises but never hold them.");
  });
