import React, { Component } from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as booksApi from '../utils/BooksApi'

class Reads extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onAddToShelf: PropTypes.func.isRequired
    }

    render(props) {
        const { books, onAddToShelf, OnUpdateBooks } = this.props
        let currentBooks, wantBooks, readBooks

        currentBooks = books.filter((book) => book.shelf === 'currentlyReading')
        wantBooks = books.filter((book) => book.shelf === 'wantToRead')
        readBooks = books.filter((book) => book.shelf === 'read')

        return (
            <div>
                <div>
                    <div className='title'>
                        <h1>Currently Reading</h1>
                    </div>
                    <ul>
                        {currentBooks.map((book) => (
                            <Book
                                key={book.id}
                                book={book}
                                page='currentlyReading'
                                onAddToShelf={this.props.onAddToShelf}
                            />
                        ))}
                    </ul>
                </div>

                <div>
                    <div className='title'>
                        <h1>Want 2 Read</h1>
                        <hr />
                    </div>
                    <ul>
                        {wantBooks.map((book) => (
                            <Book
                                key={book.id}
                                book={book}
                                page='wantToRead'
                                onAddToShelf={this.props.onAddToShelf}
                            />
                        ))}
                    </ul>
                </div>

                <div>
                    <div className='title'>
                        <h1>Read</h1>
                        <hr />
                    </div>
                    <ul>
                        {readBooks.map((book) => (
                            <Book
                                key={book.id}
                                book={book}
                                page='read'
                                onAddToShelf={this.props.onAddToShelf}
                            />
                        ))}
                    </ul>
                </div>

                <div className='search'>
                    <Link to='/search'>
                        search
                    </Link>
                </div>
            </div>
        )
    }
}

export default Reads
