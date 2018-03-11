import React, { Component } from 'react'
import * as booksApi from '../utils/BooksApi'
import PropTypes from 'prop-types'

class Book extends Component {

    static propTypes = {
        onAddToShelf: PropTypes.func,
        onDelete: PropTypes.func
    }

    state = {
        book: '',
        hidden: true
    }

    currentlyReading
    wantToRead
    read

    componentDidMount() {
        this.setState({book: this.props.book})
    }

    toggleHidden = () => {
        console.log('showing')
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    render() {
        const { onDelete, onAddToShelf } = this.props

        return (
            <div className='book-element'>
                <li>{this.props.book.title}</li>
                <div className="btn-group">
                    <button onClick={this.toggleHidden.bind(this)} type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Action
                    </button>
                    {this.state.isHidden &&
                        <div className="dropdown-menu" style={{ display: 'block' }}>
                            {
                                this.props.page !== 'currentlyReading' &&
                                <button onClick={() => onAddToShelf(this.state.book, 'currentlyReading')} className="dropdown-item">
                                    Add to Currently Reading
                                </button>
                            }
                            {
                                this.props.page !== 'wantToRead' &&
                                <button onClick={() => onAddToShelf(this.state.book, 'wantToRead')} className="dropdown-item">
                                    Add to Want 2 Read
                                </button>
                            }
                            {
                                this.props.page !== 'read' &&
                                <button onClick={() => onAddToShelf(this.state.book, 'read')} className="dropdown-item">
                                    Add to Read
                                </button>
                            }
                            {
                                this.props.page !== 'filter' &&
                                <div>
                                    <div className="dropdown-divider"></div>
                                    <button onClick={() => onDelete(this.state.book) } className="dropdown-item">
                                        Delete
                                    </button>
                                </div>
                            }
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Book
