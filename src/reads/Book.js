import React, { Component } from 'react'

class Book extends Component {
    currentlyReading
    wantToRead
    read

    state = {
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

    defineOptions = () => {
        switch(this.props.page) {
            case 'currentlyReading':
                this.read = (
                    <button onClick={ this.props.addToShelf(this.props.book, 'read') } className="dropdown-item">
                        Add to Read
                    </button>
                )
                this.wantToRead = (
                    <button onClick={ this.props.addToShelf(this.props.book, 'wantToRead') } className="dropdown-item">
                        Add to Want 2 Read
                    </button>
                )
                break

            case 'wantToRead':
                this.currentlyReading = (
                    <button onClick={ this.props.addToShelf(this.props.book, 'currentlyReading') } className="dropdown-item">
                        Add to Currently Reading
                    </button>
                )
                this.read = (
                    <button onClick={ this.props.addToShelf(this.props.book, 'read') } className="dropdown-item">
                        Add to Read
                    </button>
                )
                break

            case 'read':
                this.wantToRead = (
                    <button onClick={ this.props.addToShelf(this.props.book, 'wantToRead') } className="dropdown-item">
                        Add to Want 2 Read
                    </button>
                )
                this.currentlyReading = (
                    <button onClick={ this.props.addToShelf(this.props.book, 'currentlyReading') } className="dropdown-item">
                        Add to Currently Reading
                    </button>
                )
                break
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
                            <button onClick={ this.props.delete(this.props.book) } className="dropdown-item">Delete</button>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Book
