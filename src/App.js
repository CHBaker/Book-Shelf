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
<<<<<<< HEAD
                <Route exact path='/wanttoread' render={() => (
                    <Reads page={'wantToRead'} />
                )} />
                <Route exact path='/read' render={() => (
                    <Reads page={'read'} />
                )} />
                <Route exact path='/search' render={() => (
                    <h1>search shit</h1>
=======
                <Route exact path='/toread' render={() => (
                    <Reads books={this.state.books} />
>>>>>>> parent of 43f8414... FEATURE: navigation, page skeletons
                )} />
            </div>
        )
    }
}

export default App;
