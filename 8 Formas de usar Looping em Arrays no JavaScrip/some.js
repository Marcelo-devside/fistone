const idadefamilia = [{
    nome:'Vanessa',
    idade:37
},
{
    nome:'Gabriel',
    idade:37
},
{
    nome:'Bielzinho',
    idade:11
},
{
    nome:'Felipe',
    idade:3
},
]

const ehAdulto = valor => valor.idade >=18
const temAdulto = idadefamilia.some(ehAdulto)
console.log(temAdulto);