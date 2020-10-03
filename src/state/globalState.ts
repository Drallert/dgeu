interface IGlobalState{
    titulos:string[];
    searchText:string[];
    searchTags: string[];
    defaultSearch:boolean;
}

export default IGlobalState;
export const initialState:IGlobalState = {
    titulos:[],
 
    searchText:[],
    searchTags: [],
    defaultSearch:true
}

