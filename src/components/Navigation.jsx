import React from "react";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "/",
    };
  }

  linkButton = (to, label, selected) => {
    const style = `btn btn-${selected ? "primary" : "secondary"} w-100`;
    return (
      <Link to={to}>
        <button
          className={style}
          onClick={() => this.setState({ currentPage: to })}
        >
          {label}
        </button>
      </Link>
    );
  };

  render() {
    const nav = [
      { to: "/settings", label: "Settings" },
      { to: "/", label: "Trainer" },
    ];

    return (
      <div className="container">
        <div className="row">
          {nav.map(({ to, label }) => {
            return (
              <div key={to} className="col-md-6">
                {this.linkButton(to, label, this.state.currentPage == to)}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Navigation;
