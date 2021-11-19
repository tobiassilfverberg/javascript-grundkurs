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
        const answers = [3, 1, 4, 2];
        resolve(answers);
      } else {
        // reject promise
        reject("Aint nobody got time for that");
      }
    }, 5000);
  });
};

willWeGetTheAnswersToTheExam()
  .then((data) => {
    console.log("Promise has been fulfilled. YAY!");
    console.log("Here's the answers:", data);
  })
  .catch((err) => {
    console.log("You always make promises but never hold them.");
    console.log("Promise rejected, error:", err);
  });
