

function ourSeconds (){
  return new Promise((resolve , reject) => {
    let sec = new Date().getSeconds();
    setTimeout(() => {
        return resolve(sec);
    } , 1000)
  })
}

function ourMinutes (){
  return new Promise((resolve, reject) => {
    let min = new Date().getMinutes();
    setTimeout(() => {
      return resolve(min);
    } , 2000)
  })
}

function ourHours (){
  return new Promise((resolve, reject) => {
    let hour = new Date().getHours();
    setTimeout(() => {
      return resolve(hour);
    } , 3000)
  })
}


let seconds = ourSeconds();
let minutes = ourMinutes();
let hours = ourHours();


Promise.all([seconds, minutes, hours])
.then(values => {
  console.log(values[0] + values[1] + values[2]);
})