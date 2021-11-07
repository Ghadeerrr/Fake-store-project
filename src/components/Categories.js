
import axios from "axios";


function setFilter() {

  useEffect(() => {

    axios.get('https://fakestoreapi.com/products')
    .then(function (response) {
      console.log(response.data);

    }).catch(function (error) {
      console.error(error);
    });
  },[]);
}

  function filterCategory(Category) {

    useEffect(() => {
  
      axios.get(`https://fakestoreapi.com/${Category}`)
      .then(function (response) {
        console.log(response.data);
  
      }).catch(function (error) {
        console.error(error);
      });
    },[]);

  }


function Categories() {
 
    return(  
     <div>

      <nav>
      <div >
          <button  onClick={()=>setFilter()}>All</button>
          <button  onClick={()=>filterCategory("men's clothing")}>Men's Clothing</button>
          <button  onClick={()=>filterCategory("women's clothing")}> Women's Clothing</button>
          <button  onClick={()=>filterCategory("jewelery")}>Jewelery</button>
          <button  onClick={()=>filterCategory("electronics")}>Electronic</button>
        </div>
      </nav>
     </div>
          
    );  
  }

  

  export default Categories;