class RestaurantManager{
    constructor(){
        this.restaurantList = [];
    }
    addRestaurant(name,address,city){
        const restaurant={name,address,city};
        this.restaurantList.push(restaurant)
    }
    printAllRestaurantNames(){
        this.restaurantList.forEach(restaurant=>{
            console.log(restaurant.name)
        })
    }
    filterRestaurantByCity(city){
        
      const  filteredRestaurants=this.restaurantList.filter(restaurant=>{
        return restaurant.city.toLowerCase()===city.toLowerCase()
      })
      return filteredRestaurants
    }
} 

const rstManager= new RestaurantManager();
rstManager.addRestaurant("Restaurant A", "Address A1", "City X")
rstManager.addRestaurant("Restaurant B", "Address A2", "City Y")
rstManager.addRestaurant("Restaurant C", "Address A3", "City Z")
rstManager.printAllRestaurantNames();
console.log(rstManager.filterRestaurantByCity('City X')) 

// second one.....

const orderData = { 'Below 500': 20, '500-1000': 29, '1000-1500': 30, '1500-2000': 44, 'Above 2000': 76 }; 

class RestaurantOrderCalculator {
    constructor(orderData, restaurantName){
        this.orderData=orderData;
        this.restaurantName= restaurantName

    }
  getTotalNumberOfOrders(){
    const orderValues=Object.values(orderData)
    let orderValue=0
    for (let i = 0; i <orderValues.length ; i++){
      orderValue+=orderValues[i]
    }
    return orderValue
  }  
  getNumberOfOrderProportion(){
    return Object.keys(this.orderData).length
  }
  getPercentageOfEachProportion(){
    const totalOrders=this.getTotalNumberOfOrders()
    let percentageProportion=[]
    let id=1
    for(let[order,quantity] of Object.entries(this.orderData)){
      const percentage=((quantity/totalOrders)*100).toFixed(2)
      percentageProportion.push({
        id:id++,
        order,
        'order percentage':percentage,
        restaurant:this.restaurantName
      })
    }
    
    return percentageProportion
  }
} 

const orderCalculator = new RestaurantOrderCalculator(orderData,'Punjabi Tadka');
//get total orders 
const totalOrders=orderCalculator. getTotalNumberOfOrders()
console.log(`Total number of orders placed = ${totalOrders}`)
//get no of proportions
const totalProportion=orderCalculator.getNumberOfOrderProportion()
console.log(`Total number of order proportions = ${totalProportion}`) 
//get percentage of each proportion 
const percentageArray=orderCalculator.getPercentageOfEachProportion()
console.log(percentageArray)
     
