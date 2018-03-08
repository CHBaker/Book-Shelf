import React, { Component } from 'react'
<<<<<<< HEAD
import * as booksApi from '../utils/BooksApi'
import Book from './Book'

class Reads extends Component {

    state = {
        books: [],
        title: '',
        page: this.props.page
    }

    componentDidMount() {
        this.updatePage()
        this.getBooks()
    }

    getBooks() {
        this.getAllBooks()
    }

    getAllBooks() {
        booksApi.getAll().then((books) => {
            const current = books.filter((book) => book.shelf === this.props.page)
            this.setState({ books: current })
            console.log(this.state.books)
        })
    }

    updatePage() {
        switch (this.props.page) {
            case 'currentlyReading':
                this.setState({ title: 'Currently Reading' })
                break;
            case 'wantToRead':
                this.setState({ title: 'Want to Read' })
                break;
            case 'read':
                this.setState({ title: 'Read' })
                break;
            default:
                this.setState({ title: 'Currently Reading' })
        };
    }

    addToShelf(bookId, shelf) {
        booksApi.update(bookId, shelf);
    }

    delete(bookId) {

    }

    render(props) {
        return (
            <div>
                <div className='title'>
                    <h1>{this.state.title}</h1>
                </div>
                <ul>
                    {this.state.books.map((book) => (
                        <Book
                            key={ book.id }
                            book={ book }
                            page={ this.props.page }
                            addToShelf={ this.addToShelf }
                            delete={ this.delete }
                        />
                    ))}
                </ul>
            </div>
=======

class Reads extends Component {
    render (props) {
        return (
            <ul>
                {this.props.books.map((book) => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
>>>>>>> parent of 43f8414... FEATURE: navigation, page skeletons
        )
    }
}

export default Reads
