import React, { Component } from 'react'
import * as booksApi from '../utils/BooksApi'

class Reads extends Component {

    state = {
        books: [],
        title: '',
        page: this.props.page
    }

    componentDidMount () {
        this.updatePage()
        this.getBooks()
    }

    getBooks () {
        booksApi.getAll().then((books) => {
            console.log(this.props)
            const current = books.filter((book) => book.shelf === this.props.page)
            this.setState({ books: current })
            console.log(this.state.books)
        })
    }

    updatePage() {
        switch (this.props.page) {
            case 'currentlyReading':
                this.setState({title: 'Currently Reading'})
                break;
            case 'wantToRead':
                this.setState({title: 'Want to Read'})
                break;
            case 'read':
                this.setState({title: 'Read'})
                break;
            default:
                this.setState({title: 'Currently Reading'})
        };
    }

    addToShelf(bookId, shelf) {
        this.booksApi.shelf(bookId, shelf);
    }

    render(props) {
        return (
            <div>
                <div className='title'>
                    <h1>{this.state.title}</h1>
                </div>
                <ul>
                    {this.state.books.map((book) => (
                        <li key={book.id}>{book.title}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Reads
