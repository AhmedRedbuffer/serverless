let view = process.env.NAME
let btoaa = btoa(view)
let atoba = atob(btoaa)
console.log("Hmm")
console.log("Here",view)
console.log("Here1",btoaa)
console.log("Here2",atoba)
console.log("process",process.env)