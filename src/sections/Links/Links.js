import React from 'react';
import {Link} from 'react-router-dom';

import './Links.scss';

const Links = () => {
    return (
        <nav className="nav">
            <Link to="/">Medusa</Link>
            <Link to="/b">Nix</Link>
            <Link to="/c">Persefone</Link>
        </nav>
    );
}

export default Links;