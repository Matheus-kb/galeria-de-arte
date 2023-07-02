function ItemTabela(props) {
    return (
        <tr>
            <td><img src={props.obra.foto} alt="Obra" width={300} height={200} onClick={props.muda} /></td>
            <td>
                <h4>Titulo da Obra:{props.obra.nome} &nbsp; {props.obra.selecionado && <img src="estrela.png" alt="Estrela" style={{width: 40, height:40}}/>}</h4>
                <h4>Autor:{props.obra.autor}</h4>
                <h4>Valor R$:{props.obra.valor.toLocaleString("pt-br", { minimumFractionDigits: 2 })}</h4>
                <h4>Ano:{props.obra.ano}</h4>
                <h4>Selecionado para Exposição:{props.obra.selecionado ? "Sim" : "Não"}</h4>
            </td>
        </tr>
    )
}

export default ItemTabela