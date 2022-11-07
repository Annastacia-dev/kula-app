export function makeRatingStars (rating){
    let stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(<i className="fa-solid fa-star" key={i}></i>)
    }
    return stars;
}