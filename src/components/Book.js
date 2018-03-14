import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as booksApi from '../utils/BooksApi'

class Book extends Component {

    static propTypes = {
        onAddToShelf: PropTypes.func.isRequired,
        onDelete: PropTypes.func,
        book: PropTypes.object.isRequired,
        page: PropTypes.string.isRequired
    }

    state = {
        show: false
    }

    componentWillMount() {
        this.setState({book: this.props.book})
        booksApi.get(this.props.book.id)
            .then((book) => this.setState({book: book}))
    }

    toggleHidden = () => {
        console.log('showing')
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        const {
            onAddToShelf,
            onDelete,
            page
        } = this.props

        const { show, book } = this.state

        return (
            <div className='col book-wrapper'>
                {page !== 'search' &&
                    <div className='book-element'>
                        <div className='img-container'>
                            {
                                book.imageLinks !== undefined &&
                                <img className='book-background' src={book.imageLinks.thumbnail} alt={`${book.title} by ${book.author}`}/>
                            }
                            {
                                book.imageLinks === undefined &&
                                <div className='container book-background no-img'>
                                    <div className='row'>
                                        <div className='col no-padding'>
                                            { book.title }
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className='col no-padding'>
                                            { book.authors }
                                    </div>
                                    <hr/>
                                </div>
                            }
                        </div>
                        <div className="btn-group">
                            <button onClick={this.toggleHidden.bind(this)} type="button" className="btn btn-info book-actions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <i className="fa fa-chevron-circle-down"></i>
                            </button>
                            {show &&
                                <div className="dropdown-menu" style={{ display: 'block' }}>
                                    <i className="fa fa-caret-up"></i>
                                    {
                                        page !== 'currentlyReading' &&
                                        <button
                                            onClick={() => {
                                                onAddToShelf(this.state.book, 'currentlyReading')
                                            }}
                                            className="dropdown-item"
                                        >
                                            Currently Reading
                                        </button>
                                    }
                                    {
                                        page !== 'wantToRead' &&
                                        <button onClick={() => {
                                            onAddToShelf(this.state.book, 'wantToRead')
                                        }}
                                            className="dropdown-item"
                                        >
                                            Want 2 Read
                                        </button>
                                    }
                                    {
                                        page !== 'read' &&
                                        <button onClick={() => {
                                            onAddToShelf(this.state.book, 'read')
                                        }}
                                            className="dropdown-item"
                                        >
                                            Read
                                            </button>
                                    }
                                    {
                                        page !== 'search' &&
                                        <button onClick={() => {
                                            onDelete(this.state.book)
                                        }}
                                            className="dropdown-item"
                                        >
                                            Delete
                                        </button>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                } { page === 'search' &&
                    <div className='book-element'>
                        <div className='img-container'>
                            {book.imageLinks &&
                                <img className='book-background' src={book.imageLinks.thumbnail} alt={`${book.title} by ${book.author}`}/>
                            }
                            {
                                book.imageLinks === undefined &&
                                <div className='container book-background no-img'>
                                    <div className='row'>
                                        <div className='col no-padding'>
                                            { book.title }
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className='col no-padding'>
                                            { book.authors }
                                    </div>
                                    <hr/>
                                </div>
                            }
                        </div>
                        <div className="btn-group">
                            <button onClick={this.toggleHidden.bind(this)} type="button" className="btn btn-info book-actions-search" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <i className="fa fa-chevron-circle-down"></i>
                            </button>
                            {show &&
                                <div className="dropdown-menu" style={{ display: 'block' }}>
                                    <i className="fa fa-caret-up"></i>
                                    <button
                                        onClick={() => {
                                            onAddToShelf(this.state.book, 'currentlyReading')
                                        }}
                                        className="dropdown-item"
                                    >
                                        {book.shelf === 'currentlyReading' &&
                                            <i className="fa fa-check"></i>
                                        }
                                        Currently Reading
                                        </button>
                                    <button
                                        onClick={() => {
                                            onAddToShelf(this.state.book, 'wantToRead')
                                        }}
                                        className="dropdown-item"
                                    >
                                        {book.shelf === 'wantToRead' &&
                                            <i className="fa fa-check"></i>
                                        }
                                        Want 2 Read
                                        </button>
                                    <button
                                        onClick={() => {
                                            onAddToShelf(this.state.book, 'read')
                                        }}
                                        className="dropdown-item"
                                    >
                                        {book.shelf === 'read' &&
                                            <i className="fa fa-check"></i>
                                        }
                                        Read
                                    </button>
                                    <button
                                        className="dropdown-item"
                                    >
                                        {
                                            book.shelf === 'none' &&
                                            <i className="fa fa-check"></i>
                                        }
                                        None
                                    </button>
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Book
