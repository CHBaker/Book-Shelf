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
                    <Reads
                        page={'currentlyReading'}
                    />
                )} />
                <Route exact path='/wanttoread' render={() => (
                    <Reads
                        page={'wantToRead'}
                    />
                )} />
                <Route exact path='/read' render={() => (
                    <Reads
                        page={'read'}
                    />
                )} />
                <Route exact path='/search' render={() => (
                    <h1>search stuff</h1>
                )} />
            </div>
        )
    }
}

export default App;
