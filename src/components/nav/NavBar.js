import React, { Component } from 'react';
import { NavLink, withRouter} from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {
  handleLogout = () => {
    this.props.clearUser();
    this.props.history.push('/');
}

  render(){

    return (
      <header>
        <h1 className="site-title">Student Kennels<br />
          <small>Loving care when you're not there.</small>
        </h1>
        <nav>
          <ul className="container">
            <li><NavLink className="nav-link" exact activeClassName="nav-link-active" to="/">Home</NavLink></li>
            {(this.props.user) ?
                <li><NavLink className="nav-link" exact activeClassName="nav-link-active" to="/animals">Animals</NavLink></li>
            : null }
            <li><NavLink className="nav-link" exact activeClassName="nav-link-active" to="/locations">Locations</NavLink></li>
            {(this.props.user) ?
                <>
                <li><NavLink className="nav-link" exact activeClassName="nav-link-active" to="/employees">Employees</NavLink></li>
                <li><NavLink className="nav-link" exact activeClassName="nav-link-active" to="/owners">Owners</NavLink></li>
                
                 <li><span className="nav-link" onClick={this.handleLogout}>Logout</span></li>
                 </>
               : <li><NavLink className="nav-link" exact activeClassName="nav-link-active" to="/login">Login</NavLink></li>
            }
          </ul>
        </nav>
      </header>
    )
  }
}

export default withRouter(NavBar);