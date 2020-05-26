const bolsaVanessa =[
'cartão de credito',    
'chaves',    
'dinheiro',    
'escova de cabelo',    
'lenço de papel',    
'perfume',
'alcool gel',
]   
for (let index = 0; index < bolsaVanessa.length; index++) {
console.log (`${index}.${bolsaVanessa[index]}`);
// Se você quiser parar a interação quando achar um valor procurado, basta  ver o exemplo abaixo. 
if (bolsaVanessa[index] =='dinheiro') break
    
}
