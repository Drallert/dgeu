import React from "react";
import "../assets/css/Movie.css";

import {
  Collapse,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

interface IMovieProps {
  description: string;
  title: string;
  tags: string[];
  links: string[];
  youtubeLinks: string;
  downloadLinks: string[];
  tiers: string[];
  rating: number;
  searchText: string[];
  searchTags: string[];
  default: boolean;
}

interface IMovieState {
  collapsed: boolean;
  highlighted: boolean;
  linksCollapsed: boolean;
  collapsedText: string;
  hidden: boolean;
}

function vault() {
  var vaultPath = require("../assets/images/vaulttier.png");

  return (
    <a href="http://tasvideos.org/Vault">
      <img
        title="Tier: Vault"
        alt="[Tier: Vault]"
        src={vaultPath}
        width="18"
        height="18"
      />
    </a>
  );
}

function fastest() {
  var fastestPath = require("../assets/images/fastest-completion.png");
  return (
    <a href="http://tasvideos.org/FastestCompletion">
      <img
        title="Fastest Completion"
        alt="[Fastest Completion]"
        src={fastestPath}
        width="18"
        height="18"
      />
    </a>
  );
}

function moon() {
  var moonPath = require("../assets/images/moontier.png");
  return (
    <a href="http://tasvideos.org/Moons">
      <img
        title="Tier: Moons"
        alt="[Tier: Moons]"
        src={moonPath}
        width="18"
        height="18"
      />
    </a>
  );
}

class Movie extends React.Component<IMovieProps, IMovieState> {
  constructor(props: IMovieProps) {
    super(props);
    this.state = {
      collapsed: true,
      highlighted: false,
      linksCollapsed: true,
      collapsedText: "More...",
      hidden: false,
    };
  }
  public toggleCollapse = () => {
    this.setState({
      collapsed: !!!this.state.collapsed,
      collapsedText: this.state.collapsed ? "Less" : "More...",
    });
  };

  public checkFilterDefault() {
    var hidden = false;
    var highlighted = false;
    this.props.searchText.map((text) => {
      if (!!!this.props.title.toLocaleLowerCase().includes(text.toLocaleLowerCase())) {
        hidden = true;
      }

      else{
        if (!(this.props.searchText.length == 0) && (this.props.searchText[0] != "")){
          highlighted= true;  
        }
        
      }
    });
    return [hidden,highlighted];
  }

  public checkFilterTags(tags: string[]) {
    var hidden = false;
    return hidden;
  }
  public checkHighlighted(hidden: boolean) {
    var highlighted = false;
    if (!(this.props.searchText.length == 0)) {
      if (!hidden) {
        highlighted = true;
      }
    }

    return highlighted;
  }

  public toggleLinksCollapse = () => {
    this.setState({ linksCollapsed: !!!this.state.linksCollapsed });
  };
  public render() {
    var downloadLinksCaptions = [
      "Dolphin movie (.dtm)",
      "MKV file via BitTorrent (Modern HQ)",
      "MP4 file via BitTorrent (Compatibility)",
      "Mirror archive.org (MKV Modern HQ)",
      "Mirror archive.org (MP4 Compatibility)",
    ];
    var linksCaptions = [
      "Submission",
      "Discuss this movie",
      "View Publication",
    ];
    var youtubeEmbedLinkBase = "https://www.youtube.com/embed/";
    var filterRes;
    
    if (this.props.default) {
      filterRes = this.checkFilterDefault();
    
      if (this.state.hidden != filterRes[0]) {
        this.setState({
          hidden: filterRes[0],
          highlighted: filterRes[1],
        });
      }
      else{
        if(this.state.highlighted!=filterRes[1])
        this.setState({highlighted:filterRes[1]});
      }
    } 
    // else {
    //   hidden = this.checkFilterTags(this.props.searchTags);
    //   this.setState({ hidden: hidden });
    // }

    var wrapper_classname = !!!this.state.highlighted
      ? "border bg-light border-dark rounded text-dark mb-2"
      : "border bg-success border-dark rounded text-dark mb-2";
    if (!!!this.state.hidden) {
      return (
        <div className={wrapper_classname}>
          <table className="table">
            <tbody>
              <tr>
                <td className="text-justify" rowSpan={2}>
                  <div className="text-center">
                    {this.props.tiers.includes("vault") ? vault() : ""}
                    {this.props.tiers.includes("fastest") ? fastest() : ""}
                    {this.props.tiers.includes("moon") ? moon() : ""}{" "}
                    <span className="header">
                      <b>{this.props.title}</b>
                    </span>
                  </div>
                  <div className="container">
                    <div className="row mt-1 embed-responsive embed-responsive-16by9">
                      <iframe className="embed-responsive-item"
                        width="100%"
                        height="100%"
                        src={
                          youtubeEmbedLinkBase +
                          this.props.youtubeLinks.slice(-11)
                        }
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="text-right row mt-2">
                      <Button
                        color="primary"
                        onClick={this.toggleCollapse}
                        style={{ marginBottom: "1rem" }}
                      >
                        {this.state.collapsedText}
                      </Button>
                    </div>
                  </div>

                  <Collapse className="body" isOpen={!!!this.state.collapsed}>
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          {this.props.links.map((link, index) => {
                            return (
                              <a href={link}>
                                {linksCaptions[index]}
                                <br></br>
                              </a>
                            );
                          })}
                          <span>Rating: {this.props.rating}</span>
                          <br></br>

                          <Dropdown
                            isOpen={!!!this.state.linksCollapsed}
                            toggle={this.toggleLinksCollapse}
                          >
                            <DropdownToggle>Download Links</DropdownToggle>
                            <DropdownMenu>
                              {this.props.downloadLinks.map((link, index) => {
                                return (
                                  <DropdownItem>
                                    <a href={link}>
                                      {downloadLinksCaptions[index]}
                                      <br></br>
                                    </a>
                                  </DropdownItem>
                                );
                              })}
                            </DropdownMenu>
                          </Dropdown>
                        </div>
                        <div className="col">
                          {this.props.tags.map((tag) => {
                            return (
                              <span>
                                -{tag}
                                <br></br>
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div
                          className="text-justify mt-3"
                          dangerouslySetInnerHTML={{
                            __html: this.props.description,
                          }}
                        ></div>
                      </div>
                    </div>

                    {/*    <script type="text/javascript">function rateform_2679() {
                              var e = document.getElementById("rateform_2679");
                              e.innerHTML = '<form action="/rating.exe/my/2679" method="post" target="_blank"><tr><th colSpan="3">Your votes:</th></tr><br></br><tr><td className="misc" style="width:30%">The entertainment value of this movie: </td><td className="misc" colSpan="2"><select name="s336fdcf7d540e4b430a890b63da159c9"><option value="-1" selected={true}>-</option><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select>.<select name="d336fdcf7d540e4b430a890b63da159c9"><option value="0" selected={true}>0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></td></tr><br></br><tr><td className="misc" style="width:30%">The technical quality of this movie: </td><td className="misc" colSpan="2"><select name="sb3f6d9ddb22b443e40f53e50f0726c7f"><option value="-1" selected={true}>-</option><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select>.<select name="db3f6d9ddb22b443e40f53e50f0726c7f"><option value="0" selected={true}>0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></td></tr></tbody></table><br></br><input type="submit" value="Send data"></form>'
                          }
                      </script>*/}
                  </Collapse>
                  {/* <img title="" alt="" src={this.props.img} /> */}
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default Movie;
