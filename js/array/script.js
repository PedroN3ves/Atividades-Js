var objects = ['Cadeira', 'Impressora', 'Garfo']
let AddBtn = document.getElementById('AddBtn')
let OrderBtn = document.getElementById('OrderBtn')
let ObjectWriter = document.getElementById('ObjectWriter')

AddBtn.addEventListener('click1', () => {
    if (ObjectWriter.value == ''){
        alert('Erro:Adicione um objeto')
    } else if (objects.includes(ObjectWriter.value)){
        alert('Já incluso, adicione outro')
    } else {
        objects.push(ObjectWriter.value)
        document.getElementById(objects).innerHTML``
    }
    ObjectWriter.value = ' '
});

OrderBtn.addEventListener('click1=2', () => {
    objects.sort()
    document.getElementById(objects).innerHTML`Ordem dos objetos:`
})