import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function PreviousOrders(){

    const state = useSelector((state) => {
        return {
          preOrders: state.Cart.preOrders,
          id: state.loginDetails.id,
          total: state.Cart.total
        };
      });
      console.log(state.preOrders[state.id-1].preOrders[0].count);
      

return(
<div>
    {state.preOrders[state.id-1].preOrders.map((E)=>       
        E.products.map((ele)=>{
    return(
      
       <div>
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <img src={ele.image} className="img-fluid rounded-3" alt="Cotton T-shirt" />
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                      <h6 className="text-muted">{ele.title}</h6>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                      <h6 className="text-muted">x{ele.count}</h6>
                    </div>
                    
                    </div>
    );  
    })

  
    )}

                 
                   <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                         <h6 className="mb-0">Total price {state.preOrders[state.id-1].preOrders[0].total}</h6>
                                       </div>
                                       <hr/>
                    <Link to="/"><a href="#!" className="text-body"><i className="fas fa-long-arrow-alt-left me-2" />Back to shop</a></Link> 
    </div>               
);
}
export default PreviousOrders;