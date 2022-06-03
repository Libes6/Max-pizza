import PizzaBlock from "./PizzaBlock"

function Content({items}){


let res =items.map(function(item,i){
//   return  <PizzaBlock uri={item.uri} name={item.name} mony={item.price} sizes={item.sizes} types={item.types} />
return  <PizzaBlock key={i} {...item} />
})
    return(      
  <div className="content__items">

      
  {res}


  {/* <PizzaBlock uri={pizz[0].uri} name={pizz[0].name} mony={pizz[0].mony}/>  
  <PizzaBlock uri={pizz[1].uri} name={pizz[1].name} mony={pizz[1].mony}/>  
  <PizzaBlock uri={pizz[2].uri} name={pizz[2].name} mony={pizz[2].mony}/>  */}

      
      

     

  </div>)
  }

  
  export default Content
