
import PizzaBlock from "./PizzaBlock"
function Content(){
    let pizz =[
        {
            name: "Максимальная",
            mony: "550",
            uri:"https://dodopizza-a.akamaihd.net/static/Img/Products/7a8164f7c43646e19c20001eaec9b031_366x366.jpeg"
        },
        {
            name: "Ветчина и грибы",
            mony: "550",
            uri:"https://dodopizza-a.akamaihd.net/static/Img/Products/aa845b6e841241fbbff1a770b3ad3103_366x366.jpeg"
        }
        ,
        {
            name: "Ветчина и грибы",
            mony: "550",
            uri:"https://dodopizza-a.akamaihd.net/static/Img/Products/aa845b6e841241fbbff1a770b3ad3103_366x366.jpeg"
        }
    ]

    function Piza(){
        for(let i=0; i<pizz.length; i++){
           return <PizzaBlock uri={pizz[i].uri} name={pizz[i].name} mony={pizz[i].mony}/>   
        }
    }
    return(      
  <div class="content__items">

      
        <Piza/>
      
      

     

  </div>)
  }

  
  export default Content