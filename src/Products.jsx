import React from "react";
import axios from "axios";
function Products(){
    var [products,setproducts]=React.useState([])
    var [cart,setcart]=React.useState([])
    React.useEffect(function(){
      axios.get('https://fakestoreapi.com/products').then((res)=>{
        setproducts([...res.data])
      })
    },[])
    var count=0
    function addtocart(a,event){
      a.count=1
      setcart([...cart,a])
      
    }
    function inc(b){
        b.count++
        setcart([b])
    }
    function dec(c){
        c.count--
        setcart([c])
    }

    return(
        <div className="d-flex flex-wrap">
            <div className="w-75">
            <ul className="d-flex flex-wrap">
            {
                products.map((a)=>{
                    return <div className="card m-2" style={{width: '12rem'}}>
                    <img className="card-img-top" src={a.image} alt="Card image cap"/>
                    <div className="card-body">
                      <h5 className="card-title">{a.title}</h5>
                      <p class="card-text">{a.price}</p>
                      <button onClick={(event)=>{addtocart(a,event.target.style.display='none')}} id='d1'>Add to Cart</button>
                      <button onClick={()=>{inc(a)}}>+</button>
                      <button onClick={()=>{dec(a)}}>-</button>
                      
                    </div>
                  </div>
                })
            }
           </ul>
            </div>
            <div className="w-25">
               {
                cart.length>0 && cart.map((b)=>{
                    return <li>{b.title}:{b.count}
                    <button onClick={()=>{inc(b)}}>+</button>
                      <button onClick={()=>{dec(b)}}>-</button>
                    </li>
                })
               }
            </div>
           
        </div>
    )
}
export default Products;