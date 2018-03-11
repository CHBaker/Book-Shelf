import React, { Component } from 'react'
import * as booksApi from '../utils/BooksApi'

class Book extends Component {
    currentlyReading
    wantToRead
    read

    state = {
        book: this.props.book,
        hidden: true
    }

    componentDidMount() {
        this.defineOptions()
    }

    toggleHidden = () => {
        console.log('showing')
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    addToShelf = (bookId, shelf) => {
        console.log(shelf)
        booksApi.update(bookId, shelf)
            .then((r) => console.log(r))
    }

    delete = (bookId) => {
        booksApi.update(bookId, 'None');
    }

    defineOptions = () => {
        switch(this.props.page) {
            case 'currentlyReading':
                this.read = (
                    <button onClick={() => this.addToShelf(this.state.book, 'read') } className="dropdown-item">
                        Add to Read
                    </button>
                )
                this.wantToRead = (
                    <button onClick={() => this.addToShelf(this.state.book, 'wantToRead') } className="dropdown-item">
                        Add to Want 2 Read
                    </button>
                )
                break

            case 'wantToRead':
                this.currentlyReading = (
                    <button onClick={() => this.addToShelf(this.state.book, 'currentlyReading') } className="dropdown-item">
                        Add to Currently Reading
                    </button>
                )
                this.read = (
                    <button onClick={() => this.addToShelf(this.state.book, 'read') } className="dropdown-item">
                        Add to Read
                    </button>
                )
                break

            case 'read':
                this.wantToRead = (
                    <button onClick={() => this.addToShelf(this.state.book, 'wantToRead') } className="dropdown-item">
                        Add to Want 2 Read
                    </button>
                )
                this.currentlyReading = (
                    <button onClick={() => this.addToShelf(this.state.book, 'currentlyReading') } className="dropdown-item">
                        Add to Currently Reading
                    </button>
                )
                break

            case 'filter':
                this.wantToRead = (
                    <button onClick={() => this.addToShelf(this.state.book, 'wantToRead') } className="dropdown-item">
                        Add to Want 2 Read
                    </button>
                )
                this.currentlyReading = (
                    <button onClick={() => this.addToShelf(this.state.book, 'currentlyReading') } className="dropdown-item">
                        Add to Currently Reading
                    </button>
                )
                this.read = (
                    <button onClick={() => this.addToShelf(this.state.book, 'read') } className="dropdown-item">
                        Add to Read
                    </button>
                )
                break

            default:
                this.read = (
                    <button onClick={() => this.addToShelf(this.state.book, 'read') } className="dropdown-item">
                        Add to Read
                    </button>
                )
                this.wantToRead = (
                    <button onClick={() => this.addToShelf(this.state.book, 'wantToRead') } className="dropdown-item">
                        Add to Want 2 Read
                    </button>
                )
        }
    }

    render() {
        return (
            <div className='book-element'>
                <li>{this.props.book.title}</li>
                <div className="btn-group">
                    <button onClick={this.toggleHidden.bind(this)} type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Action
                    </button>
                    {this.state.isHidden &&
                        <div className="dropdown-menu" style={{ display: 'block' }}>
                            { this.currentlyReading }
                            { this.wantToRead }
                            { this.read }
                            <div className="dropdown-divider"></div>
                            {this.props.page !== 'filter' &&
                                <button onClick={() => this.delete(this.state.book) } className="dropdown-item">Delete</button>
                            }
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Book
