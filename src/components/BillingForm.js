import { useState } from 'react';
import style from "./BillingForm.module.css"
import {  cartData, selectedProductData, Quantity } from './Atom';
import { useRecoilState,useSetRecoilState, useRecoilValue } from 'recoil';
import { productData } from './ProductData';


const BillingForm = () => {
    
    const [userName, setUserName] = useState("")
    const [inputData, setInputData] = useState([<UserInputTable />]);
    const [userCartList, setUserCartList] = useRecoilState(cartData)
    const selectData = useRecoilValue(selectedProductData);
    const quantity = useRecoilValue(Quantity)
    const [isVisible, setIsVisible] = useState(false)
    
    const addData = () => {
        setInputData(inputData.concat(<UserInputTable key={inputData.length} />));
        setUserCartList([...userCartList, { 'selectedProduct': selectData, 'productQty': quantity }])
        setIsVisible(false)
    }
    // console.log(userCartList);

    const billAdd = () => {
        setIsVisible(true);
    }
    let total = 0
    let date = new Date().toISOString().slice(0, 10)
    return (
        <>
            <div>
            <h3> Customer Name</h3>
            <input type='text' placeholder='Customer name' value={userName}
                onChange={(e) => setUserName(e.target.value)}
                />
            </div>
            <hr />
            <div className={style.wrapper2}>
                <div>
                    {inputData}
                </div>
                <div>
                    <button onClick={addData}>Add More Item</button>
                </div>
            </div>
            <hr />
            <button onClick={billAdd}>Create Bill</button>
            {isVisible ?
                <>
                    <div className={style.BillData}>
                        <table>
                            <thead>
                            <tr>
                                <th colSpan="3">Customer Name: {userName}</th>
                                <th></th>
                            </tr>
                            <tr>
                                    <td colSpan="3">Date: { date}</td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>total</th>
                                </tr>
                            </thead>
                            <tbody>
                             
                                {
                                    userCartList.map((elem) => {
                                        return (
                                        <tr>
                                     <td>{elem.selectedProduct}</td>
                                    <td>{productData.filter(pro =>
                                        pro.productName === elem.selectedProduct)
                                        .map(filteredPro => (
                                        <span>
                                            {filteredPro.price}
                                        </span>
                                        ))}
                                    </td>

                                    <td>{elem.productQty}</td>

                                    <td>{productData.filter(pro =>
                                        pro.productName === elem.selectedProduct)
                                        .map(filteredPro => {
                                        total += filteredPro.price * elem.productQty
                                        return (
                                            <span>
                                                {filteredPro.price * elem.productQty}
                                            </span>
                                        )
                                        })}
                                                    </td>
                                                
                                                </tr>
                                        )  
                                    })                 
                                    }
                            
                            </tbody>
                            <tr>
                                <td colSpan="3"><b>Total</b></td>
                                <td>{total}</td>
                            </tr>
                        </table>
                    </div>
                </>
                : null}
        </>
    )
}
export default BillingForm;

const UserInputTable = () =>{

    const [products,setproducts] = useRecoilState(selectedProductData)
    const setQuantity = useSetRecoilState(Quantity)

    const changeHandler = (e) => {
        setproducts(e.target.value)
        
    }
    console.log(products);
    const changeQuantity = (e) => {
        setQuantity(e.target.value)
    }

    return (
        <>
            <div className={style.wrapper}>
                <div>
                    <tr>
                        <th> Select Products </th>
                    </tr>
                    <tr>
                        <td>
                            <select name='' onChange={changeHandler}>
                            <option key="default" value="products" >Products</option>
                                {productData.map((elem) => {
                                    return <option key={elem.id} value={elem.productName} >{elem.productName }</option>
                            })}      
                        </select>
                        </td>
                    </tr>
                </div>
                <div>
                    <tr>
                        <th>Select Products</th>
                    </tr>
                    <tr>
                        <td>
                            <input type='number' placeholder='Quantity'
                                onChange={changeQuantity } />
                        </td>
                    </tr>
                </div>
            </div>
        </>
    )
}