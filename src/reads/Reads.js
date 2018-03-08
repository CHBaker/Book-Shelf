import React, { Component } from 'react'
import Book from './Book'
import * as booksApi from '../utils/BooksApi'

class Reads extends Component {

    state = {
        books: [],
        title: '',
        page: ''
    }

    componentDidMount() {
        this.setState({page: this.props.page})
        this.updatePage()
        this.getBooks()
    }

    getBooks() {
        booksApi.getAll().then((books) => {
            const current = books.filter((book) => book.shelf === this.state.page)
            this.setState((prevState) => ({ books: current }))
            console.log(this.state.books)
            console.log(this.state.page)
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
        )
    }
}

export default Reads
