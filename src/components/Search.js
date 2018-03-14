import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
        books: [],
        results: true,
        loading: false
    }

    updateQuery = (query) => {
        this.loading()
        this.setState({ loading: true })
        console.log('query: ', query)
        this.setState({ query: query.trim() })
    }

    loading = () => {
        setTimeout(() => {
            this.setState({ loading: false })
        }, 1400)
    }

    render() {
        const { books, onAddToShelf } = this.props
        const { query } = this.state

        if (query) {
            booksApi.search(query.trim(), 20)
                .then(
                    (searchedBooks) => {
                        if (searchedBooks.error) {
                            console.log(searchedBooks)
                            this.setState({books: [], results: false})
                        } else {
                            this.setState({ books: searchedBooks, results: true})
                            console.log(this.state.books)
                        }
                    }
                )
        }


        return (
            <div className='search-wrapper'>
                <div className='row filter-row'>
                    <div className='col-1'>
                        <Link to='/' className='arrow-wrapper'>
                            <i className="fa fa-arrow-left"></i>
                        </Link>
                    </div>
                    <form className='col input-wrapper'>
                        <input
                            className='search-input'
                            type='text'
                            placeholder='Search Books'
                            onChange={(event) => this.updateQuery(event.target.value )}
                        />
                    </form>
                    {
                        this.state.loading &&
                        <i className="fa fa-spinner"></i>
                    }
                </div>
                <div className='container'>
                    {
                        !this.state.results && this.state.query !== '' &&
                        <div className='row no-results'>
                            <div className='col'>
                                no results...
                            </div>
                        </div>
                    }
                    <div className='row'>
                        {
                            this.state.books !== []
                            && this.state.query !== '' && this.state.books
                            .map((book) => (
                                <Book
                                    key={ book.id }
                                    book={ book }
                                    page='search'
                                    onAddToShelf={ onAddToShelf }
                                />
                        ))}
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        {this.state.query === '' && books
                            .map((book) => (
                                <Book
                                    key={ book.id }
                                    book={ book }
                                    page='search'
                                    onAddToShelf={ onAddToShelf }
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Search
