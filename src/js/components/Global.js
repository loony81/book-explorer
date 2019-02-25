import React, {Component} from 'react';
import {Form, Button, InputGroup, FormControl} from 'react-bootstrap';

class Global extends Component {

	constructor(props){
		super(props);
		this.state = {
			query: ""
		};
	}

	search(){
		const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=";
		fetch(`${BASE_URL}${this.state.query}`, {method: "GET"})
			.then(response => response.json())
				.then(json => console.log(json));
	}

	render(){
		return (
			<div className="Global">
				<h2>Book Explorer!</h2>
				
	  				<Form.Group controlId="formBasicInput">
					<InputGroup>
					    <FormControl
					      placeholder="Search for a book"
					      aria-label="Search for a book"
					      onChange={event => this.setState({query: event.target.value})}
					      onKeyPress={event => event.key === 'Enter' && this.search()}
					    />
					    <InputGroup.Append onClick={()=> this.search()}>
					      <Button variant="outline-primary"><i data-feather="search"></i></Button>
					    </InputGroup.Append>
					  </InputGroup>
					  </Form.Group>
				  
			</div>
		)
	}
}

export default Global;