import Movie from '../components/Movie';
import {connect} from 'react-redux';
import IGlobalState from '../state/globalState';

const mapStateToProps = (state: IGlobalState) => {
    return {
      searchText: state.searchText,
      searchTags: state.searchTags,
      default: state.defaultSearch
    };
  };

export default connect(mapStateToProps)(Movie);