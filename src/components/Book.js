import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {

    static propTypes = {
        onAddToShelf: PropTypes.func.isRequired,
        onDelete: PropTypes.func,
        book: PropTypes.object.isRequired,
        page: PropTypes.string.isRequired
    }

    state = {
        hidden: true
    }

    componentDidMount() {
        this.setState({ book: this.props.book })
    }

    toggleHidden = () => {
        console.log('showing')
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    render() {
        const {
            onAddToShelf,
            onDelete,
            page,
            book
        } = this.props

        return (
            <div className='col book-wrapper'>
                {page !== 'search' &&
                    <div className='book-element'>
                        <div className='img-container'>
                            <img className='book-background' src={book.imageLinks.thumbnail} alt={`${book.title} by ${book.author}`}/>
                        </div>
                        <div className="btn-group">
                            <button onClick={this.toggleHidden.bind(this)} type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                Action
                            </button>
                            {this.state.isHidden &&
                                <div className="dropdown-menu" style={{ display: 'block' }}>
                                    {
                                        page !== 'currentlyReading' &&
                                        <button
                                            onClick={() => {
                                                onAddToShelf(this.state.book, 'currentlyReading')
                                            }}
                                            className="dropdown-item"
                                        >
                                            Add to Currently Reading
                                        </button>
                                    }
                                    {
                                        page !== 'wantToRead' &&
                                        <button onClick={() => {
                                            onAddToShelf(this.state.book, 'wantToRead')
                                        }}
                                            className="dropdown-item"
                                        >
                                            Add to Want 2 Read
                                        </button>
                                    }
                                    {
                                        page !== 'read' &&
                                        <button onClick={() => {
                                            onAddToShelf(this.state.book, 'read')
                                        }}
                                            className="dropdown-item"
                                        >
                                            Add to Read
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
                            <img className='book-background' src={book.imageLinks.thumbnail} alt={`${book.title} by ${book.author}`}/>
                        </div>
                        <div className="btn-group">
                            <button onClick={this.toggleHidden.bind(this)} type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                Action
                            </button>
                            {this.state.isHidden &&
                                <div className="dropdown-menu" style={{ display: 'block' }}>
                                    <button
                                        onClick={() => {
                                            onAddToShelf(this.state.book, 'currentlyReading')
                                        }}
                                        className="dropdown-item"
                                    >
                                        {book.shelf === 'currentlyReading' &&
                                            <div className='check'>
                                                check
                                            </div>
                                        }
                                        Add to Currently Reading
                                        </button>
                                    <button
                                        onClick={() => {
                                            onAddToShelf(this.state.book, 'wantToRead')
                                        }}
                                        className="dropdown-item"
                                    >
                                        {book.shelf === 'wantToRead' &&
                                            <div className='check'>
                                                check
                                            </div>
                                        }
                                        Add to Want 2 Read
                                        </button>
                                    <button
                                        onClick={() => {
                                            onAddToShelf(this.state.book, 'read')
                                        }}
                                        className="dropdown-item"
                                    >
                                        {book.shelf === 'read' &&
                                            <div className='check'>
                                                check
                                            </div>
                                        }
                                        Add to Read
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
