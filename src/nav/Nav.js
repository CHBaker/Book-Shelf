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
                        <a className="nav-link">Currently Reading<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Want 2 Read</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Read</a>
                    </li>
                    <li className='nav-item search'>
                        <a className='nav-link'><i className="fa fa-search"></i></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
