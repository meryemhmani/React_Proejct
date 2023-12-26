import React from "react";
import { Link } from "react-router-dom";

function Menu() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#fefae0'}}>
      <div style={{display:"flex",justifyContent:"space-around",marginLeft:550}}>
           <h1 ><Link exact to="/" className="nav-link"  style={{color:"#6f1d1b" }}>Accueil</Link></h1>
           <h1><Link to="/articles" className="nav-link"  style={{color:"#6f1d1b" }}>liste des livres </Link></h1>
           <h1><Link to="/addArticle" className="nav-link"  style={{color:"#6f1d1b" }}>Ajout d'un livre </Link></h1>
      
   
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">recherche</button>
                    </form>

            </div>
        </nav>
    );
}

export default Menu;
