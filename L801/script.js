

var promise = new Promise((resolve, reject) => {
  setTimeout(() => {
      var wholeDate = new Date();
      resolve = wholeDate.getMinutes();
      if(resolve % 2 == 1){
          reject(new Error("არაკორექტული დრო!"));
      }
      else {
          alert(resolve);
      }
  }, 10000);
});

promise
  .then(
    result => alert("Minutes now: " + result),
    error => alert("Rejected: " + error.message) // Rejected: Error!
  );
