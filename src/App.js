import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import * as booksApi from './utils/BooksApi'
import Nav from './nav/Nav'
import Reads from './reads/Reads'
import Filter from './filter/Filter';

class App extends Component {

    state = {
        books: []
    }

    componentDidMount() {
        this.getAllBooks()
    }

    getAllBooks () {
        booksApi.getAll().then((books) => {
            this.setState({ books: books })
            console.log(this.state.books)
        })
    }

    render() {
        return (
            <div>
                <Nav />
                <Route exact path='/' render={() => (
                    <Reads
                        books={this.state.books}
                        page={'currentlyReading'}
                    />
                )} />
                <Route exact path='/wanttoread' render={() => (
                    <Reads
                        books={this.state.books}
                        page={'wantToRead'}
                    />
                )} />
                <Route exact path='/read' render={() => (
                    <Reads
                        books={this.state.books}
                        page={'read'}
                    />
                )} />
                <Route exact path='/search' render={() => (
                    <Filter
                        books={this.state.books}
                        page={'filter'}
                    />
                )} />
            </div>
        )
    }
}

export default App;
