import React, { Component } from 'react'
import * as booksApi from '../utils/BooksApi'
import Book from './Book'

class Reads extends Component {

    state = {
        page: '',
        books: [],
        title: ''
    }

    componentDidMount() {
        this.updatePage()
        this.getBooks()
    }

    getBooks() {
        booksApi.getAll().then((books) => {
            const filteredBooks = books.filter((book) => book.shelf === this.props.page)
            this.setState({ books: filteredBooks, page : this.props.page })
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
                            page={ this.state.page }
                            addToShelf={(bookId, shelf) => this.addToShelf(bookId, shelf) }
                            delete={(bookId) => this.delete(bookId) }
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

export default Reads
