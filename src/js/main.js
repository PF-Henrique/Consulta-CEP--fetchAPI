const cep = document.querySelector("#cep")

const showData = (result) => {
    for (const campo in result) {
        if (document.querySelector("#" + campo)) {
            document.querySelector("#" + campo).value = result[campo]
        }
    }
}



cep.addEventListener("blur", (e) => {
    let search = cep.value.replace("-", "")
    //parametros cors para acesso de api externa entre servidores diferentes
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options) // chamada de api com crase
        //com fetch api voce obtem uma promesse como return
        //se der certo .then
        //arrow function - tratamento da resposta
        .then(response => {
            response.json()
                .then(data => showData(data))
        })

        //se der errado é .catch
        .catch(e => console.log('Deu Erro: ' + e, message))
})