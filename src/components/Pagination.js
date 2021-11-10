


function Pagination({productsPerPage,totalProducts,paginate}){
const pageNumbers=[];

for (let i = 1; i < Math.ceil(totalProducts/productsPerPage)+1; i++) {
    pageNumbers.push(i);
    
}

    return(
        
        <nav>
            <ul className="pagination ">
            {pageNumbers.map(number =>(
                <li key={number} className="page-item">
                <a onClick={()=>{paginate(number)}} herf="!#" className="page-link">
                {number}
                </a>
                </li>
            ))}
            </ul>
        </nav>
        
    );
}
export default Pagination;