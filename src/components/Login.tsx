import React from "react";

interface ILoginProps{
    userPlaceholder:string;
    passPlaceholder:string;
}

class Login extends React.Component<ILoginProps, {}> {
  constructor(props: ILoginProps) {
    super(props);
  }

  public render() {
    return (
      <div>
        <form method="post" action="/Login.html">
          <a href="http://tasvideos.org/Login.html">Login</a>:{" "}
          <input type="text" name="user" placeholder={this.props.userPlaceholder}/>{" "}
          <input type="text" name="pass" placeholder={this.props.passPlaceholder}/>
          <input
            type="hidden"
            name="redir"
            value="http://tasvideos.org/Movies-Wii.html"
          />
        </form>

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
