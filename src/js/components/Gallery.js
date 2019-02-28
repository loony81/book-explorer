import React, {Component} from 'react';

class Gallery extends Component {
	render(){

		let alternative = "https://drive.google.com/uc?id=1H7UPlh6K1k-LSxZfX0XT48i1VLHyrV04";

		return (
			<div>
			{
				this.props.items.map((item,index) => {
					let {title, imageLinks, infoLinks} = item.volumeInfo;
					return (
						<div key={index}>
						<img 
							src={imageLinks !== undefined ? imageLinks.thumbnail : alternative} 
							alt="book image"
						/>
						{title}
						</div>
					)
				})
			}
			</div>
		)
	}
}

export default Gallery;