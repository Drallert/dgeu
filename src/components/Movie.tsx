import React from "react";

interface IMovieProps {
  img: string;
  description: string;
  title: string;
  tags: string[];
  links: string[];
  youtubeLinks: string;
  downloadLinks: string[];
  tiers: string[];
  rating:number;
}

interface IMovieState {
  collapsed: boolean;
  highlighted: boolean;
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
        src={require("../assets/images/fastest-completion.png")}
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
    this.state = { collapsed: true, highlighted: false, hidden: false };
  }
  
  public render() {
    var moonPath = "";
    var downloadLinksCaptions = ["Dolphin movie (.dtm)","MKV file via BitTorrent (Modern HQ)","MP4 file via BitTorrent (Compatibility)","Mirror archive.org (MKV Modern HQ)","Mirror archive.org (MP4 Compatibility)"];
    var linksCaptions = ["Submission","Discuss this movie","View Publication"];
    return (
      <div>
        <table className="item">
          <tbody>
            <tr>
              <td  className="shot" rowSpan={3}>
                <div>
                  <img
                    title=""
                    alt=""
                    src={this.props.img}
                  />
                  <br></br>
                </div>
              </td>
              <th>
                {this.props.tiers.includes("vault") ? vault() : ""}
                {this.props.tiers.includes("fastest") ? fastest() : ""}
                {this.props.tiers.includes("moon") ? moon() : ""}{" "}
                <span>{this.props.title}</span>
              </th>
            </tr>
            <tr>
              <td colSpan={1}>
                {this.props.downloadLinks.map((link,index)=>{
                    return <div><a href={link}>{downloadLinksCaptions[index]}<br></br></a></div>
                })}
                
                <a href={this.props.youtubeLinks}>Watch on (www.youtube.com)</a>
                <br></br>
                {this.props.links.map((link,index)=>{
                    return <a href={link}>{linksCaptions[index]}<br></br></a>
                })}
                <span>Rating: {this.props.rating}</span><br></br>
                
                {/*    <script type="text/javascript">function rateform_2679() {
                            var e = document.getElementById("rateform_2679");
                            e.innerHTML = '<form action="/rating.exe/my/2679" method="post" target="_blank"><tr><th colSpan="3">Your votes:</th></tr><br></br><tr><td className="misc" style="width:30%">The entertainment value of this movie: </td><td className="misc" colSpan="2"><select name="s336fdcf7d540e4b430a890b63da159c9"><option value="-1" selected={true}>-</option><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select>.<select name="d336fdcf7d540e4b430a890b63da159c9"><option value="0" selected={true}>0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></td></tr><br></br><tr><td className="misc" style="width:30%">The technical quality of this movie: </td><td className="misc" colSpan="2"><select name="sb3f6d9ddb22b443e40f53e50f0726c7f"><option value="-1" selected={true}>-</option><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select>.<select name="db3f6d9ddb22b443e40f53e50f0726c7f"><option value="0" selected={true}>0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></td></tr></tbody></table><br></br><input type="submit" value="Send data"></form>'
                        }
                    </script>*/}
                <br></br>
                
              </td>
              <td colSpan={1}>
                {this.props.tags.map((tag)=>{
                    return <span>-{tag}<br></br></span>
                })}
                
                
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="blah" style={{ verticalAlign: "top" }}>
                  <div dangerouslySetInnerHTML={{__html:this.props.description}}></div>
                
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movie;
