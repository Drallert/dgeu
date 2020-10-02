import React from "react";
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import '../assets/css/Login.css';
interface ILoginProps { 
  userPlaceholder: string;
  passPlaceholder: string;
}

library.add(faUser);

class Login extends React.Component<ILoginProps, {}> {
  constructor(props: ILoginProps) {
    super(props);
  }

  public render() {
    return (
      <div className="container-fluid login" >
        <div className="row justify-content-end">
          
          <div className="col-3">
            <form method="post" action="/Login.html" className="border border-primary rounded bg-secondary">
              <div className="row">
              <a className="col-1" href="http://tasvideos.org/Login.html"><FontAwesomeIcon icon={faUser} size="2x"></FontAwesomeIcon></a>{" "}
              <input
                className="rounded col-5"
                type="text"
                name="user"
                placeholder={this.props.userPlaceholder}
              />{" "}
              <input
                className="rounded col-5"
                type="text"
                name="pass"
                placeholder={this.props.passPlaceholder}
              />
              <input
                type="hidden"
                name="redir"
                value="http://tasvideos.org/Movies-Wii.html"
              />
              </div>
            </form>
          </div>
        </div>

        <noscript>
          <div style={{ display: "inline" }}>
            <a href="/Login.html">Login</a>
          </div>
        </noscript>
      </div>
    );
  }
}

export default Login;
