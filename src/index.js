import { DefaultTable } from 'js-smart-table/dist/pagination';
import { configurationUsers } from './configuration-table';
import { paginationFn } from './api';

let Assignatures;

async function initialLoad(){
    const dataFetched = await paginationFn(1,'DESC','nombreMateria','&hora=0&plan=401');
    console.log(dataFetched);
    
    configurationUsers.pages = dataFetched.pages;
    configurationUsers.actualPage = dataFetched.actualPage;
    configurationUsers.rows = dataFetched.assignatures;
    
    Assignatures = new DefaultTable(configurationUsers);
    Assignatures.printTable();
    Assignatures.printPagination();
}

initialLoad();