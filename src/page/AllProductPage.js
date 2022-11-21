import React, { useState, useContext } from 'react';
import Central from '../component/central/Central';
import Product from '../component/product/Product';
import { productContext } from '../Context/ProductContext';
import Footer from '../component/footer/Footer';
import '../component/Pagination/Pagination.css';
import ReactPagination from 'react-paginate';

function AllProductPage(){
    const [products, setProducts] = useContext(productContext);
    const [pageNumber, setPageNumber] = useState(0);
    
    const productPerPage = 8;
    const pagesVisited = pageNumber * productPerPage;
    const totalPage = Math.ceil(products.length / productPerPage)
    const displayProduct = products.slice(pagesVisited, pagesVisited + productPerPage);
    const changePage = ({selected}) =>{
        setPageNumber(selected);
        document.documentElement.scrollTop = 0; 
    };

    return(
        <div>
            <Central text="Tất cả sản phẩm"></Central>
            <Product cateProduct ={displayProduct}></Product>
            <ReactPagination
                previousLabel={"<"}
                nextLabel={">"}
                pageCount={totalPage}
                onPageChange={changePage}
                containerClassName={"pagination-container"}
                previousLinkClassName={"page-item"}
                nextLinkClassName={"page-item"}
                disabledClassName={"disabled"}
                activeClassName={"active"}
            />
        <Footer></Footer>
        </div>  
    )
    
}

export default AllProductPage;