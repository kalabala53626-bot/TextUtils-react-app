
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} px-3`}>
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.titleAbout}</Link>
            
          </li>
        </ul>
        <div className={`form-check form-switch ms-auto text-${props.mode==='light'? 'dark': 'light'} `}>
          <input className="form-check-input" type="checkbox" role="switch" onClick={props.togglemode} id="switchCheckDefault"/>
          <label className="form-check-label" htmlFor="switchCheckDefault">Enable Dark Mode</label>
      </div>
      <button
        className="btn btn-danger mx-2 border border-light rounded-1 ms-2"
        onClick={props.red_color}
      >
        Red
      </button>

      <button
        className="btn btn-success mx-2 border border-light rounded-1"
        onClick={props.green_color}
      >
        Green
      </button>

      <button
        className="btn btn-warning border border-light rounded-1"
        onClick={props.Yellow_color}
      >
        Yellow
      </button>

</div>
    </nav>
  );
}



export default Navbar;
