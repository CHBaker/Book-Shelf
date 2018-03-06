import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import * as booksApi from './utils/BooksApi'
import Nav from './nav/Nav'
import Reads from './reads/Reads'

class App extends Component {

    render() {
        return (
            <div>
                <Nav />
                <Route exact path='/' render={() => (
                    <Reads page={'currentlyReading'} />
                )} />
                <Route exact path='/toread' render={() => (
                    <Reads page={'wantToRead'} />
                )} />
                <Route exact path='/read' render={() => (
                    <Reads page={'read'} />
                )} />
                <Route exact path='/search' render={() => (
                    <h1>search shit</h1>
                )} />
            </div>
        )
    }
}

export default App;
