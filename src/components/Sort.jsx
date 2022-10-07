import React from 'react'





function Sort({value,setSort,asc,setAscSort}){
  const [open,setOpen] = React.useState(false)
  const list =[
    {name:"популярности",sort:"rating" },
    {name:"цене",sort:"price" },
    {name:"алфавиту",sort:"title" },
    
  ];


  // const [select,setSelect] =React.useState(0)
  const onClickItem =(i)=>{
    setSort(i)
    setOpen(false)
  }
  // onClick={alert("Сменилось")}
    return ( <div class="sort">
    <div class="sort__label">
      <span
      onClick={()=>{setAscSort('desc')}}>
      d
      </span>
      <b>Сортировка по :</b>
      <span onClick={()=>{setOpen(!open)}}>{value.name}</span>
    </div>
    {open &&(
      <div class="sort__popup">
      <ul>
        {
          list.map((obj,i)=>(
            <li
            key={i}
            onClick={()=>{onClickItem(obj)}}
            className ={value.sort === i ? 'active' :''}
            >{obj.name}</li>
          ))
        }
       
      </ul>
    </div>
    )}
    
  </div>)
  }


  export default Sort
  