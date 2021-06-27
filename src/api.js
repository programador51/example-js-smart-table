export async function paginationFn(page,order,columnOrdering,additionalQuery="&hora=0&plan=401"){

    let assignatures = await fetch(`http://localhost:4000/api/paso1/materias?pagina=${page}&orden=${order}&columna=${columnOrdering}${additionalQuery}`);

    assignatures = await assignatures.json();

    return assignatures.data;
}
