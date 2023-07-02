import ItemTabela from "./ItemTabela"
import { dados } from "./obras"
import { useState, useEffect } from "react"

function ListaObras() {
    const [obras, setObras] = useState([])

    useEffect (() => {
        setObras(dados)
    },[])

    function trocaSelecao(id) {
        const obras2 = [...obras]

        //funciona como um if/else para trocar o estado de selecionado.
        obras2[id-1].selecionado = !obras2[id-1].selecionado
        setObras(obras2)
    }

    const ListaDeObras = obras.map(obra => (
        <ItemTabela key={obra.id} obra={obra} muda={() => trocaSelecao(obra.id)}/>
    ))

    return(
        <div className="container">
        <h2 className="mt-2">Obras Cadastradas</h2>
        <table className="table mt-2">
            <thead>
                <tr>
                    <th>Imagem (clique para selecionar)</th>
                    <th>Detalhes da obra </th>
                </tr>
            </thead>
            <tbody>
                {ListaDeObras}
            </tbody>
        </table>
        </div>
    )
}

export default ListaObras