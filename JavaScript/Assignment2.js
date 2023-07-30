const ratingData = [  {restaurant: 'KFC', rating:5}, {restaurant: 'Burger King', rating:4}, {restaurant: 'KFC', rating:3}, {restaurant: 'Domino', rating:2}, {restaurant: 'Subway', rating:3}, {restaurant: 'Domino', rating:1}, {restaurant: 'Subway', rating:4}, {restaurant: 'Pizza Hut', rating:5} ]

// Calculate the Average rating for all the restaurants.

function calculateAverageRating(ratingData){
  let restaurantRatings={}
  let restaurantCount={}
  for(let data of ratingData){
    const {restaurant,rating}=data
   
    if(restaurant in restaurantRatings){
      restaurantRatings[restaurant]+=rating;
      restaurantCount[restaurant]+=1
    }
    else{
      restaurantRatings[restaurant]=rating;
      restaurantCount[restaurant]=1
    }
  }
  const averageRatings=[]
  for (let restaurant in restaurantRatings){
    let averageRating=restaurantRatings[restaurant]/restaurantCount[restaurant]
    averageRatings.push({restaurant,averageRating})
  }
  return averageRatings
}

//List of all restaurants with average rating greater than or equal to 4. 
let minRating=4
let averageRatings=calculateAverageRating(ratingData) 
console.log(averageRatings)

function filteredRestaurants(averageRatings,minRating){
  return averageRatings.filter(each=>{
    return each.averageRating>=minRating
  })
}

console.log(filteredRestaurants(averageRatings,minRating))

