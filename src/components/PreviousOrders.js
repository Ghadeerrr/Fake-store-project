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

return(
<section className="h-100 h-custom" style={{backgroundColor: '#d2c9ff'}}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12">
          <div className="card card-registration card-registration-2" style={{borderRadius: '15px'}}>
            <div className="card-body p-0">
              <div className="row g-0">
                <div className="col-lg-8">
                  <div className="p-5">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                    </div>
                    {/* products */}
                    {state.preOrders[state.id-1].preOrders[0].products.map((ele)=>{
                      // total2+=ele.price;
                      return(
                        <div>
                            <hr className="my-4" />
                                    <div className="row mb-4 d-flex justify-content-between align-items-center">
                                      <div className="col-md-2 col-lg-2 col-xl-2">
                                        <img src={ele.image} className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                      </div>
                                      <div className="col-md-3 col-lg-3 col-xl-3">
                                        <h6 className="text-muted">{ele.title}</h6>
                                      </div>
                                      <div className="col-md-3 col-lg-3 col-xl-3">
                                        <h6 className="text-muted">x{state.preOrders[state.id-1].preOrders[0].count}</h6>
                                      </div>
                                      <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                        <button className="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                          <i className="fas fa-minus" />
                                        </button>
                                          <i className="fas fa-plus" />
                                       
                                      </div>
                                      <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                        <h6 className="mb-0">{ele.price}</h6>
                                       
                                      </div>
                                      <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                        <a href="#!" className="text-muted"><i className="fas fa-times" /></a>
                                      </div>
                                    </div>
                
                        </div>
                    );
                    })}
                    {/* end of products */}
                    
                    <hr className="my-4" />
                    <div className="pt-5">
                      <h6 className="mb-0"><Link to="/"><a href="#!" className="text-body"><i className="fas fa-long-arrow-alt-left me-2" />Back to shop</a></Link></h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 bg-grey">
                  <div className="p-5">
                    
                    <hr className="my-4" />
                    <div className="d-flex justify-content-between mb-4">
                      
                    </div>
                    
                    <div className="mb-4 pb-2">
                     
                    </div>
                    
                    <div className="mb-5">
                      <div className="form-outline">
                        
                        
                      </div>
                    </div>
                    <hr className="my-4" />
                    <div className="d-flex justify-content-between mb-5">
                      <p className="text-uppercase">Total price</p>
                      <p>{state.total}</p>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
}
export default PreviousOrders;