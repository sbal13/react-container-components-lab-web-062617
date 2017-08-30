import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'


const NYT_API_KEY = '949757d8153f42bb9e5cd127fa7d21b1';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;


class LatestMovieReviewsContainer extends Component{

	constructor(props){
		super(props)
		this.state = {
			reviews: []
		}
	}

	processReviews = (json) => {
		this.setState({reviews: json.results})
	}



	componentWillMount(){
		fetch(URL).then(res => res.json()).then(res => this.processReviews(res))
	}

	shouldComponentUpdate(){
		return !!this.state.reviews
	}

	render(){
		return (
		<div className="latest-movie-reviews">
			<MovieReviews reviews={this.state.reviews}/>
		</div>
	)}
}

export default LatestMovieReviewsContainer