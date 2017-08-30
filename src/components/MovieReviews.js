import React from 'react';


// class MovieReviews extends React.Component{

const MovieReviews  = function MovieReviews (props){

		const renderedReviews = props.reviews.map( (review, index) => {
			return <div key= {index} className="review">
				<h2>{review.display_title}</h2>
				<p>MPAA Rating : {review.rating || "Unrated"}</p>

				<h4><a href={review.link.url}>{review.headline}</a></h4>
				<p>{review.summary_short}</p>
				<p>By: {review.byline} | Date: {review.publication_date}</p>
			</div>
		})

		return (
		<div className="review-list">
			{renderedReviews}
		</div>
	)}


MovieReviews.defaultProps = {
	reviews: []
}

export default MovieReviews