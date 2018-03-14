import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import * as booksApi from './utils/BooksApi'
import Reads from './components/Reads'
import Search from './components/Search';

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
            .then(() => this.getAllBooks())
    }

    delete = (book) => {
        booksApi.update(book, 'none')
            .then(() => this.getAllBooks())
    }

    render() {
        return (
            <div>
                <Route exact path='/' render={() => (
                    <Reads
                        books={this.state.books}
                        onAddToShelf={this.addToShelf}
                        onDelete={this.delete}
                    />
                )} />
                <Route exact path='/search' render={() => (
                    <Search
                        books={this.state.books}
                        onAddToShelf={this.addToShelf}
                    />
                )} />
            </div>
        )
    }
}

export default App;
