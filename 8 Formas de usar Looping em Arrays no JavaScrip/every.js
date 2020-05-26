// O programa a seguir retorna falso enquanto "every",ou seja, todos não tiverem maior de 18 anos.
const idadefamilia = [{
        nome:'Vanessa',
        idade:39
    },
    {
        nome:'Gabriel',
        idade:39
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
const somenteAdulto = idadefamilia.every(ehAdulto)
console.log(somenteAdulto)  