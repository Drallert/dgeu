import React from "react";

interface IFilterProps {
  searchText: string[];
  searchTags: string[];
  default: boolean;
  updateSearchText(text: string[]): any;
  updateSearchTags(tags: string[]): any;
  updateSearchMode(mode: boolean): any;
}

class Filter extends React.Component<IFilterProps, {}> {
  constructor(props: IFilterProps) {
    super(props);
    this.setState({});
  }

  public updateSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    var arrText = event.target.value.split(" ");
    this.props.updateSearchText(arrText);
    this.setState({ searchText: arrText });
  };

  public updateTags = (event: React.ChangeEvent<HTMLInputElement>) => {
    var arrTags = event.target.value.split(" ");
    this.setState({ searchTags: arrTags });
  };

  public render() {
    return (
      <div>
         <fieldset>
        <label htmlFor="filter">Type to search!</label><br></br>
        <input
          id="filter"
          type="text"
          placeholder="Title of TAS"
          onChange={this.updateSearch}
        />
        </fieldset>
      </div>
    );
  }
}

export default Filter;
