import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import * as booksApi from './utils/BooksApi'
import Nav from './nav/Nav'
import Reads from './reads/Reads'

class App extends Component {
    // constructor(props) {
    //     super(props)
    //     this.handler = this.handler.bind(this)
    // }

    // handler(e) {
    //     e.preventDefault()
    //     this.setState({
    //         someVar: someValue
    //     })
    // }

    state = {
        books: []
    }

    componentDidMount() {
        this.getBooks()
    }

    getBooks () {
        booksApi.getAll().then((books) => {
            const current = books.filter((book) => book.shelf === 'currentlyReading')
            this.setState({ books: current })
            console.log(this.state.books)
        })
    }

    render() {
        return (
            <div>
                <Nav />
                <Route exact path='/' render={() => (
                    <Reads books={this.state.books} />
                )} />
                <Route exact path='/toread' render={() => (
                    <Reads books={this.state.books} />
                )} />
            </div>
        )
    }
}

export default App;
