import PizzaBlock from "./PizzaBlock"

function Content({items}){


let res =items.map(function(item){
  return  <PizzaBlock uri={item.uri} name={item.name} mony={item.price}/>
})
    return(      
  <div class="content__items">

      
  {res}


  {/* <PizzaBlock uri={pizz[0].uri} name={pizz[0].name} mony={pizz[0].mony}/>  
  <PizzaBlock uri={pizz[1].uri} name={pizz[1].name} mony={pizz[1].mony}/>  
  <PizzaBlock uri={pizz[2].uri} name={pizz[2].name} mony={pizz[2].mony}/>  */}

      
      

     

  </div>)
  }

  
  export default Content
