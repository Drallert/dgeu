import Filter from "../components/Filter";
import { connect } from "react-redux";
import IGlobalState from "../state/globalState";
import {FilterActions} from '../actions/filterActions';
import {Dispatch } from 'redux';

 const mapStateToProps =(state:IGlobalState) =>{
     return ({
        searchText: state.searchText,
    searchTags: state.searchTags,
    default:state.defaultSearch
     })
 }

const mapDispatchToProps =(dispatch:Dispatch)=>({
     updateSearchText:(searchText:string[])=>{
         dispatch({type:FilterActions.UPDATE_TEXT,payload:searchText});
     },
     updateSearchTags:(searchTags:string[])=>{
        dispatch({type:FilterActions.UPDATE_TAGS,payload:searchTags});
    },
    updateSearchMode:(mode:boolean)=>{
        dispatch({type:FilterActions.UPDATE_MODE,payload:mode});
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Filter);


// type updateSearchTextProps = {
//     updateSearchText: (text: string) => Action<stateAction>;
//  }

//  export interface DispatchProps {
//   searchTextChange:(text:string[]) => void;
//   searchTagChange:(tags:string[]) => void;
// }


// const mapStateToProps = (state: IGlobalState) => {
//   return {
//     searchText: state.searchText,
//     searchTags: state.searchTags,
//     default: state.defaultSearch,
//   };
// };


// function mapDispatchToProps(dispatch:Dispatch<AnyAction>):DispatchProps{
//   return ({
//     searchTagChange:(tags:string[])=>{
//       dispatch(updateSearchText(tags));
//     },
//     searchTextChange:(text:string[])=>{
//       dispatch(updateSearchText(text));
//     }

//   })
// }
// export default connect(mapStateToProps,mapDispatchToProps)(Filter);
