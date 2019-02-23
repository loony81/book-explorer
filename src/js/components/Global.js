import React, {Component} from 'react';
import {Form, Button, InputGroup, FormControl} from 'react-bootstrap';

class Global extends Component {

	search(){
		console.log("search");
	}

	render(){
		return (
			<div>
				<h2>Book Explorer!</h2>
				
	  				<Form.Group controlId="formBasicInput">
					<InputGroup>
					    <FormControl
					      placeholder="Search for a book"
					      aria-label="Search for a book"
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