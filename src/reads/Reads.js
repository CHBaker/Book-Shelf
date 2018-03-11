import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'
import * as booksApi from '../utils/BooksApi'

class Reads extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        page: PropTypes.string.isRequired
    }

    state = {
        books: [],
        title: '',
        page: ''
    }

    componentDidMount() {
        console.log(this.props.page)
        const pageBooks = this.props.books.filter((book) => book.shelf = this.props.page)
        console.log('filtered page books: ', pageBooks)
        this.setState({books: pageBooks, page: this.props.page})
        this.updatePage()
    }

    addToShelf = (book, shelf) => {
        console.log(book.title, shelf)
        booksApi.update(book, shelf)
            .then((r) => console.log(r))
        const updated = this.state.book
        updated.shelf = shelf
        this.setState({book: updated})
    }

    delete = (book) => {
        booksApi.update(book, 'none');
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

    render(props) {
        const { books, page } = this.props
        let pageBooks

        pageBooks = books.filter((book) => book.shelf = this.props.page)

        return (
            <div>
                <div className='title'>
                    <h1>{this.state.title}</h1>
                </div>
                <ul>
                    {pageBooks
                        .map((book) => (
                            <Book
                                key={ book.id }
                                book={ book }
                                page={ this.props.page }
                                onAddToShelf={ this.addToShelf }
                                onDelete={ this.delete }
                            />
                    ))}
                </ul>
            </div>
        )
    }
}

export default Reads
