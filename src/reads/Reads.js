import React, { Component } from 'react'

class Reads extends Component {
    render (props) {
        return (
            <ul>
                {this.props.books.map((book) => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
        )
    }
}

export default Reads
