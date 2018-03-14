import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import * as booksApi from '../utils/BooksApi'

class Search extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onAddToShelf: PropTypes.func.isRequired
    }

    state = {
        query: '',
        books: []
    }

    updateQuery = (query) => {
        console.log('query: ', query)
        this.setState({ query: query.trim() })
    }

    render() {
        const { books, onAddToShelf } = this.props
        const { query } = this.state

        if (query) {
            booksApi.search(query.trim(), 20)
                .then(
                    (searchedBooks) => {
                        this.setState({ books: searchedBooks})
                    },
                    (error) => console.log(error)
                )
        }

        return (
            <div>
                <div className='row filter-row'>
                    <form>
                        <input
                            type='text'
                            placeholder='search books'
                            onChange={(event) => this.updateQuery(event.target.value )}
                        />
                    </form>
                </div>
                <ul>
                    {this.state.books
                        .map((book) => (
                            <Book
                                key={ book.id }
                                book={ book }
                                page='search'
                                onAddToShelf={ onAddToShelf }
                            />
                    ))}
                </ul>
                <ul>
                    {this.state.query === '' && books
                        .map((book) => (
                            <Book
                                key={ book.id }
                                book={ book }
                                page='search'
                                onAddToShelf={ onAddToShelf }
                            />
                    ))}
                </ul>
            </div>
        )
    }
}

export default Search
