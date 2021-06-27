import { paginationFn } from "./api";

const headerConfig = [
    { 
        text:'Materia',
        columnNameDB:'nombreMateria',
        idHeader:'nameAssignature',
        attributeToPrint:'nombreMateria',
        sortable:true,
        sortThis:true
    },

    { text: 
        'Salon', 
        columnNameDB: 'salon', 
        idHeader: 'assignatureRoom', 
        attributeToPrint: 'salon', 
        sortable: true 
    }
];

const sort = {
    sqlSort:true,
    sortASC:true
}

const attributesResponse = {
    pages:'pages',
    actualPage:'actualPage',
    data:'assignatures'
};

export const configurationUsers = {
    idTable:'users',
    idPagination:'pagination-users',
    urlParams:{
        hora:'0',
        materia:'401'
    },
    pages:0,
    rows:[],
    actualPage:0,
    headerConfig,
    styleTable:'default',
    cbSelection,
    idRows:'idAssignature',
    sort,
    paginationFn,
    attributesResponse
};

function cbSelection(e){
    alert('Seleccionaste una fila de la tabla');
    console.log(e);
}