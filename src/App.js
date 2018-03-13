import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import * as booksApi from './utils/BooksApi'
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

    addToShelf = (book, shelf) => {
        console.log(book.title, shelf)
        booksApi.update(book, shelf)
            .then((r) => console.log(r))
        this.getAllBooks()
    }

    render() {
        return (
            <div>
                <Route exact path='/' render={() => (
                    <Reads
                        books={this.state.books}
                        onAddToShelf={this.addToShelf}
                    />
                )} />
                <Route exact path='/search' render={() => (
                    <Filter
                        books={this.state.books}
                        onAddToShelf={this.addToShelf}
                    />
                )} />
            </div>
        )
    }
}

export default App;
