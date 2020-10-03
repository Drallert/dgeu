import React from "react";
import "./App.css";
import "./assets/css/a.css";
import Login from "./components/Login";
import Movie from "./containers/Movie";
import Filter from "./containers/Filter";
import db from "./db";
import IGlobalState from "./state/globalState";
import { initialState } from "./state/globalState";
import { Action, createStore } from "redux";
import { Provider } from "react-redux";

import {
  IFilterUpdateSearchModeAction,
  FilterActions,
  IFilterUpdateSearchAction,
} from "./actions/filterActions";

const reducer = (state: IGlobalState = initialState, action: Action) => {
  switch (action.type) {
    case FilterActions.UPDATE_TEXT:
    case FilterActions.UPDATE_TAGS:
      const textAction = action as IFilterUpdateSearchAction;
      return { ...state, searchText: textAction.payload };

    case FilterActions.UPDATE_MODE:
      const modeAction = action as IFilterUpdateSearchModeAction;
      return { ...state, searchMode: modeAction.payload };
  }
  return state;
};

const store = createStore(reducer, initialState);

function App() {
  var movieRows = Math.floor(db.content.length / 3);
  var remainder = db.content.length % 3;
  var arrRows = Array.from(Array(movieRows).keys(), (x) => x * 3);

  return (
    <Provider store={store}>
      <div>
        <Login userPlaceholder={"Login"} passPlaceholder={"Password"}></Login>

        <p className="movies">Total movies: {db.content.length}</p>
        <a id="M2679_1"></a>
        <div className="container-fluid">
          <div className="row mb-2 ml-1">
            <div>
              <Filter></Filter>
            </div>
          </div>
          {arrRows.map((index) => {
            return (
              <div className="row">
                <div className="col-4">
                  <Movie
                    description={db.content[index + 0].Description}
                    title={db.content[index + 0].Title}
                    tags={db.content[index + 0].Tags}
            
                    links={db.content[index + 0].Links}
                    youtubeLinks={db.content[index + 0].YoutubeLinks}
                    downloadLinks={db.content[index + 0].DownloadLinks}
                    tiers={db.content[index + 0].tiers}
                    rating={db.content[index + 0].Rating}
                  ></Movie>
                </div>
                <div className="col-4">
                  <Movie
                    description={db.content[index + 1].Description}
                    title={db.content[index + 1].Title}
                    tags={db.content[index + 1].Tags}
                    
                    links={db.content[index + 1].Links}
                    youtubeLinks={db.content[index + 1].YoutubeLinks}
                    downloadLinks={db.content[index + 1].DownloadLinks}
                    tiers={db.content[index + 1].tiers}
                    rating={db.content[index + 1].Rating}
                  ></Movie>
                </div>
                <div className="col-4">
                  <Movie
                    description={db.content[index + 2].Description}
                    title={db.content[index + 2].Title}
                    tags={db.content[index + 2].Tags}
                  
                    links={db.content[index + 2].Links}
                    youtubeLinks={db.content[index + 2].YoutubeLinks}
                    downloadLinks={db.content[index + 2].DownloadLinks}
                    tiers={db.content[index + 2].tiers}
                    rating={db.content[index + 2].Rating}
                  ></Movie>
                </div>
              </div>
            );
          })}
          {remainder != 0 ? (
            <div className="row">
              <div className="col-4">
                <Movie
                  description={
                    db.content[arrRows[arrRows.length - 1] + 3].Description
                  }
                  title={db.content[arrRows[arrRows.length - 1] + 3].Title}
                  tags={db.content[arrRows[arrRows.length - 1] + 3].Tags}
                  
                  links={db.content[arrRows[arrRows.length - 1] + 3].Links}
                  youtubeLinks={
                    db.content[arrRows[arrRows.length - 1] + 3].YoutubeLinks
                  }
                  downloadLinks={
                    db.content[arrRows[arrRows.length - 1] + 3].DownloadLinks
                  }
                  tiers={db.content[arrRows[arrRows.length - 1] + 3].tiers}
                  rating={db.content[arrRows[arrRows.length - 1] + 3].Rating}
                ></Movie>
              </div>
              {remainder == 2 ? (
                <div className="col-4">
                  <Movie
                    description={
                      db.content[arrRows[arrRows.length - 1] + 4].Description
                    }
                    title={db.content[arrRows[arrRows.length - 1] + 4].Title}
                    tags={db.content[arrRows[arrRows.length - 1] + 4].Tags}
                    
                    links={db.content[arrRows[arrRows.length - 1] + 4].Links}
                    youtubeLinks={
                      db.content[arrRows[arrRows.length - 1] + 4].YoutubeLinks
                    }
                    downloadLinks={
                      db.content[arrRows[arrRows.length - 1] + 4].DownloadLinks
                    }
                    tiers={db.content[arrRows[arrRows.length - 1] + 4].tiers}
                    rating={db.content[arrRows[arrRows.length - 1] + 4].Rating}
                  ></Movie>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </Provider>
  );
}

export default App;
