import React, { Component } from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

const getAuthosQuery = gql `
    {
        authors {
            name
            id
        }
    }
`;


 class AddBook extends Component {
  
   displayAuthors() {
       var data = this.props.data;
       if(data.loading) {
           return( <option disabled> Loading Authors ... </option>)
       } else {
           return (data.authors.map(author => {
               return ( <option key={author.id} value={author.id}> {author.name} </option>);
           }))
       }
   }
  render() {
    console.log(this.props);
    return (
      <form id="add-book">
        <div className="field">
            <label htmlFor="bookname">Book name: </label>
            <input type="text"/>
        </div>
        <div className="field">
            <label htmlFor="genre">Genre: </label>
            <input type="text"/>
        </div>
        <div className="field">
            <label htmlFor="author">Author:</label>
            <select name="author" id="author">
                <option value=""> Select Author </option>
                {this.displayAuthors()}
            </select>
        </div>
        <button> + </button>
      </form>
    )
  }
}

export default graphql(getAuthosQuery)(AddBook);