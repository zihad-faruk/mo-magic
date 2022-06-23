import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header">
      <ul>
        <li>
          {" "}
          <Link to="/">{props.title}</Link>{" "}
        </li>
      </ul>
    </div>
  );
}

export default Header;
