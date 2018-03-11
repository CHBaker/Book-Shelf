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
        console.log(this.props.page)
        const pageBooks = this.props.books.filter((book) => book.shelf = this.props.page)
        this.setState({books: pageBooks})
        this.updatePage()
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
        return (
            <div>
                <div className='title'>
                    <h1>{this.state.title}</h1>
                </div>
                <ul>
                    {this.props.books
                        .map((book) => (
                            <Book
                                key={ book.id }
                                book={ book }
                                page={ this.props.page }
                            />
                    ))}
                </ul>
            </div>
        )
    }
}

export default Reads
