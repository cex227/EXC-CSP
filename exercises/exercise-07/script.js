let nouns = ["rifle","pistol","shotgun"];
let verbs = ["see","was seen by","catch"];
let adjectives = ["violently","quickly","smoothly"];


let noun = nouns[Math.floor(Math.random () * nouns.length)]
let verb = verbs[Math.floor(Math.random () * verbs.length)]
let adjective = adjectives[Math.floor(Math.random () * adjectives.length)]

let sentence= `My ${noun} fired ${adjective} when I ${verb} an enermy .`
console.log(sentence);