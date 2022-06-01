
import PizzaBlock from "./PizzaBlock"
function Content(){
    let pizz =[
        {
            id: 1,
            name: "Максимальная",
            mony: "550",
            uri:"https://media1.tenor.com/images/910ca8939c7dac3b14165f5ef3098614/tenor.gif?itemid=7741273"
        },
        {
            id: 2,
            name: "Билли чикен",
            mony: "550",
            uri:"https://c.tenor.com/vYNl9ddWxHQAAAAd/gachi-billy.gif"
        }
        ,
        {
            id: 3,
            name: "Ветчина и грибы",
            mony: "550",
            uri:"https://i.pinimg.com/originals/87/94/01/8794015f7ba5befdc8f07e1665554dc4.gif "
        }
    ]

let res =pizz.map(function(item){
  return  <PizzaBlock uri={item.uri} name={item.name} mony={item.mony}/>
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