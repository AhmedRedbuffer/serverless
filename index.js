let view = process.env.NAME
let btoaa = btoa(view)
let atoba = atob(btoaa)
let hostString = ''
for(let i=0; i<view.length;i++) hostString.push(view[i])
console.log("Hmm")
console.log("Here",view)
console.log("Here1",btoaa)
console.log("Here2",atoba)
console.log("process",process.env)