
function salvar(){
    let marc = document.getElementById('marca').value
    let model = document.getElementById('modelo').value
        let carro = {marca : marc, modelo : model}
        localStorage.setItem('Carro', JSON.stringify(carro))
}