import axios from "axios";
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setProducts, setFilter } from "../reducers/products/products";
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
function Admin(){

    const [Product, setProduct] = useState('');

    const [Category, setCategory] = useState('');
    const [Description, setDescription] = useState('');
    const [Id, setId] = useState('');
    const [Price, setPrice] = useState('');
    const [Title, setTitle] = useState('');
    const [Image, setImage] = useState('');
    
    const dispatch = useDispatch();
  
    const state = useSelector((state) => {
      return {

        products: state.products.products,
        filter: state.products.filter
      };
    });

    const addNewProduct = () =>{
     
        let  newArray = state.products.slice();
            
        let my_object = {}; 
    
        my_object.id= newArray.length +1
        my_object.title= Title
        my_object.price= Price
        my_object.category= Category
        my_object.description= Description
        my_object.image= Image
    
                  
        newArray.unshift(my_object)
        const action = setProducts(newArray);
        const action2 = setFilter(newArray);
        dispatch(action);
        dispatch(action2);
    }


    const updateProduct = () =>{      
     
       
        let  newArray = state.products.slice();
            
        newArray.map((element) => {

            if(element.id == Id ){

                element.category = Category
                element.description = Description
                element.price = Price
                element.title = Title
                
            }
        })
      
            
            const action = setProducts(newArray);
            const action2 = setFilter(newArray);
            dispatch(action);
            dispatch(action2);
        
    }


   
    const deleteProduct = () =>{   
        
            let  newArray = state.products.slice();
            let newArray2 = newArray.filter((e) => e.id != Product)
            
            const action = setProducts(newArray2);
            const action2 = setFilter(newArray2);
            dispatch(action);
            dispatch(action2);
            
    }


    const InputIdNumber = (e)=>{
        setProduct(e.target.value)
    }
    const dele = ()=>{
        
        deleteProduct()
    }

    
    const InputCategory = (e)=>{
        setCategory(e.target.value)
    }
    const InputDescription = (e)=>{
        setDescription(e.target.value)
    }
    const InputId = (e)=>{
        setId(e.target.value)
    }
    const InputPrice = (e)=>{
        setPrice(e.target.value)
    }
    const InputTitle = (e)=>{
        setTitle(e.target.value)
    }
    const InputImage = (e)=>{
        setImage(e.target.value)
    }
    const modify = ()=>{
      
        updateProduct()
    }
    const NewProduct = ()=>{
      
        addNewProduct()
    }

    return(

        <div>
         <Button component={Link} to="/">
         Go Back to the Home Page
         </Button>
        <div className="modify-Product">
            <input type="text" placeholder="Id Number" onChange={InputIdNumber} />
            <button type="button" onClick={dele}>delete</button>
        </div>
        <div>
            <input type="text" placeholder="Category" onChange={InputCategory} />
            <input type="text" placeholder="Description" onChange={InputDescription} />
            <input type="text" placeholder="Id" onChange={InputId} />
            <input type="text" placeholder="Price" onChange={InputPrice} />
            <input type="text" placeholder="Title" onChange={InputTitle} />
            <button type="button" onClick={modify}>modify Product</button>
        </div>
        <div>
            <input type="text" placeholder="Category" onChange={InputCategory} />
            <input type="text" placeholder="Description" onChange={InputDescription} />
            <input type="text" placeholder="Price" onChange={InputPrice} />
            <input type="text" placeholder="Title" onChange={InputTitle} />
            <input type="text" placeholder="Image" onChange={InputImage} />
            <button type="button" onClick={NewProduct}>add New Product</button>
        </div>
        
    
        </div>
    )
} 

export default Admin