import PizzaBlock from "./PizzaBlock"
import Placeholder from "./Placeholder"





function Content({items}){


let res =items.map(function(item,i){
//   return  <PizzaBlock uri={item.uri} name={item.name} mony={item.price} sizes={item.sizes} types={item.types} />
// return  <PizzaBlock key={i} {...item} />

})
    return(      
  <div className="content__items">

{
  items.map((item,i)=>(
   <PizzaBlock key={i} {...item}/> 
  ))
}
 
  </div>)
  }

  
  export default Content
