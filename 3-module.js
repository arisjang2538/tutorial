//modules
const  name = require ('./4-name')
const  sayHi = require ('./5-utils')
const data = require('./6-alternative-flavor')

console.log(`data tiem `, data.items[0])
console.log('person name  is ',data.singlePerson.name) 

sayHi('susan')
sayHi(name.john)
sayHi(name.peter)

require('./7-mind-grenade')