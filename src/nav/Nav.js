import React from 'react'
import { Link } from 'react-router-dom'

function Nav () {
    return (
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to='/' className='nav-link'>
                            Currently Reading
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/wanttoread' className='nav-link'>
                            Want 2 Read
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='read' className='nav-link'>
                            Read
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='search' className='nav-link'>
                            <i className="fa fa-search"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
