import React from 'react';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '949757d8153f42bb9e5cd127fa7d21b1';

class SearchableMovieReviewsContainer extends React.Component{

	constructor(){
		super()
		this.state = {
			reviews: [],
			searchTerm: ""
		}
	}

	handleChange = (event)=>{
		this.setState({searchTerm: event.target.value})
	};

	processReviews = (json) => {
		this.setState({reviews: json.results})
	}

	handleClick = ()=>{
		const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?query='
            + this.state.searchTerm + `&api-key=${NYT_API_KEY}`

        fetch(URL).then(res => res.json()).then(res => this.processReviews(res))

	}



	render(){
		return (
		<div className="searchable-movie-reviews">
			<input value={this.state.searchTerm} placeholder="enter movie title..." onChange={this.handleChange}></input>
			<button onClick={this.handleClick}>Search</button>
			<MovieReviews reviews={this.state.reviews}/>
		</div>
	)}
}

export default SearchableMovieReviewsContainer