import React, { Component } from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import Book from '../reads/Book';

class Filter extends Component {

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({ query: query.trim() })
    }

    render() {
        const { books } = this.props
        const { query } = this.state
        let showingBooks

        if(query) {
            const match = new RegExp(escapeRegExp(query),  'i')
            showingBooks = books.filter((book) => match.test(book.name || book.author))
        } else {
            showingBooks = books
        }

        showingBooks.sort(sortBy('name'))

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
                                addToShelf={ this.addToShelf }
                            />
                    ))}
                </ul>
            </div>
        )
    }
}

export default Filter
