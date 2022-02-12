import React from "react"
import Cardsh from "./UI/Cardsh"
import Rec from "./UI/Rec"
const Products =(props)=>{
  let i =0
       
        const Product_names = Array.from(
          new Set(props.products.map((x) => x.product_name))
        );
      
        const Brandswithproduct = Product_names.map((x) =>
        props.products.map((product) => product.product_name === x && product)
        );
        /*  for (var i =0 ; i<brand.length ; i++){
          for  (var j =0 ; j<products.length ;j++ ){
            if (products[j].Productname== brand[i]){
              brands [brand[i]].p(products[j];
            }
          }
        }*/
        
        //console.log(brands);
    return (
    <React.Fragment >
    <h2>Edvora</h2>
    <h2 id="small">Products</h2>
    {Brandswithproduct.map((brand) => (
        <div>
        <h4 style={{ fontSize: "25px", color: "white", marginLeft: "20px" }}>
          {Product_names[i++]}
        </h4>
        <hr></hr>
        <Rec cs ="right">
          {brand.map(
              (product) =>
              product && (
                <div>
                  <Cardsh
                    url={product.image}
                    Productname={product.product_name}
                    Location={product.address}
                    Date={product.date}
                    Brand={product.brand_name}
                    price={(product.price)}
                    des={product.discription}
                    ></Cardsh>
                </div>
              )
          )}
        </Rec>
      </div>
    ))}
    </React.Fragment>
    )
}
export default Products;