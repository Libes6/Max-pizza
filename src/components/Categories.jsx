import React from 'react';


function Categories(){
const categories =['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']
  const[active,setActive] = React.useState(0)

const onClickCategory =(index) =>{
  setActive(index);
}
    return(<div class="categories">
    <ul>
      {/* <li onClick={()=>onClickCategory(0)}  className={active == 0 ? 'active' : ''}>Все</li>
      <li onClick={()=>onClickCategory(1)} className={active == 1 ? 'active' : ''}>Мясные</li>
      <li onClick={()=>onClickCategory(2)} className={active == 2 ? 'active' : ''}>Вегетарианская</li>
      <li onClick={()=>onClickCategory(3)} className={active == 3 ? 'active' : ''}>Гриль</li>
      <li onClick={()=>onClickCategory(4)} className={active == 4 ? 'active' : ''}>Острые</li>
      <li onClick={()=>onClickCategory(5)} className={active == 5 ? 'active' : ''}>Закрытые</li> */}
{
categories.map((value,i)=>(
  <li onClick={()=>onClickCategory(i)}  className={active == i ? 'active' : ''}>
    {value}
  </li>
))
}

    </ul>
  </div>)
  }


  export default Categories
  