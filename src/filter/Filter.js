import React, { Component } from 'react'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'
import Book from '../reads/Book'
import * as booksApi from '../utils/BooksApi'

class Filter extends Component {

    state = {
        books: []
    }

    componentDidMount() {
        this.setState({books: this.props.books})
    }

    updateQuery = (query) => {
        console.log('query: ', query)
        booksApi.search(query.trim())
            .then(
                (books) => this.setState({books: books}),
                (error) => console.log(error)
            )
    }

    render() {
        return (
            <div>
                <div className='title'>
                    <h1>{this.state.title}</h1>
                </div>
                <div className='row filter-row'>
                    <form>
                        <input
                            type='text'
                            placeholder='search books'
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </form>
                </div>
                <ul>
                    {this.state.books
                        .map((book) => (
                            <Book
                                key={ book.id }
                                book={ book }
                                page={ this.props.page }
                                addToShelf={ this.addToShelf }
                            />
                    ))}
                </ul>
            </div>
        )
    }
}

export default Filter
