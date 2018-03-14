import React, { Component } from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Reads extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onAddToShelf: PropTypes.func.isRequired,
        onDelete: PropTypes.func.isRequired
    }

    render(props) {
        const { books, onAddToShelf, onDelete } = this.props
        let currentBooks, wantBooks, readBooks

        currentBooks = books.filter((book) => book.shelf === 'currentlyReading')
        wantBooks = books.filter((book) => book.shelf === 'wantToRead')
        readBooks = books.filter((book) => book.shelf === 'read')

        return (
            <div>
                <div className='row title-row'>
                    <div className='col'></div>
                    <div className='col header-title'>
                        My Books
                    </div>
                    <div className='col'>
                    <div className='search'>
                        <Link to='/search' className='search-link'>
                            <i className="fa fa-search"></i>
                        </Link>
                    </div>
                    </div>
                </div>

                <div className='row shelf-header-current'>
                    <div className='col-1'></div>
                    <div className='col shelf-title'>
                        Currently Reading
                    </div>
                    <div className='col-1'></div>
                </div>
                <div className='row shelf-background-current'>
                    <div className='container'>
                        <div className='row'>
                            {currentBooks.map((book) => (
                                <Book
                                    key={book.id}
                                    book={book}
                                    page='currentlyReading'
                                    onAddToShelf={onAddToShelf}
                                    onDelete={onDelete}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className='row shelf-header-want'>
                    <div className='col-1'></div>
                    <div className='col shelf-title'>
                            Want To Read
                    </div>
                    <div className='col-1'></div>
                </div>
                <div className='row shelf-background-want'>
                    <div className='container'>
                        <div className='row'>
                            {wantBooks.map((book) => (
                                <Book
                                    key={book.id}
                                    book={book}
                                    page='wantToRead'
                                    onAddToShelf={onAddToShelf}
                                    onDelete={onDelete}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className='row shelf-header-read'>
                    <div className='col-1'></div>
                    <div className='col shelf-title'>
                        Read
                    </div>
                    <div className='col-1'></div>
                </div>
                <div className='row shelf-background-read'>
                    <div className='container'>
                        <div className='row'>
                            {readBooks.map((book) => (
                                <Book
                                    key={book.id}
                                    book={book}
                                    page='read'
                                    onAddToShelf={this.props.onAddToShelf}
                                    onDelete={onDelete}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Reads
