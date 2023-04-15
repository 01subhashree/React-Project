import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import style from './ContextData.module.css';
const DataContext = React.createContext();

export const ContextData = () => {

    const [products, setProducts] = useState([]);
    // const [userBody,setUserBody] = useState("")

    function fetchProducts() {
        return axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.data);
    }
    // function addUserBody(p) {
    //     console.log(p)
    //     // pBody = products.body
    //     setUserBody(p);
    // }
    
    
    useEffect(() => {
        fetchProducts().then((products) => {
          setProducts(products);
        });
      }, []);


    const value = {
        products,
        // addUserBody,
        // userBody,
    };
    
    return (
        <div className={style.wrapper}>
            <DataContext.Provider value={value}>
                <UserData />  
            </DataContext.Provider>
        </div>
    )
}
function UserData() {
    const { products } = useContext(DataContext);
    return (
        <>
            {products.map((elem) => (
                <div>
                    <UserDetails key={elem.id} product={elem} />
                </div>
            ))}
        </>
    )
}

function UserDetails({ product }) {
    
    const [userBody, setUserBody] = useState("")
    function addUserBody(pBody) {
        // console.log(product)
        setUserBody(pBody);
    }
    return (
        <div className={style.table}>
                   <div className={style.container1}>
                        <button onClick={() => addUserBody(product.body)}>
                            {product.title}       
                        </button>  
                    </div>
                    <div className={style.container2}>
                        {userBody}
                     </div>
        </div>
    )
}
