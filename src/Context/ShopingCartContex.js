import {  createContext, useContext, useState , useEffect } from "react"
import ShopingCar from "../Commpont/ShopingCar";

const ShopingCartContex = createContext({});

const inatshealcartitem = localStorage.getItem("shoping-cart")? JSON.parse(localStorage.getItem("shoping-cart")):[]


const ShopingCartpProvider = ({children}) => {
    const [isOpen , setIsOoen] = useState(false);
    const[ cartitems , setcartitems] = useState(inatshealcartitem);

    useEffect(()=>{
        localStorage.setItem("shoping-cart" ,JSON.stringify(cartitems))
    }, [cartitems])

    const openCart = () =>{
        setIsOoen(true);
    };
    
    const CloseCart = () =>{
        setIsOoen(false);
    };
    
    const Quantitycart = cartitems.reduce(
        (quantity , item) => item.quantity + quantity
       , 0
    )
    const getItemQuantity = (id) =>{
        return cartitems.find((item) => item.id === id)?.quantity || 0 ;  // Quantity of items
    };

    const increaseCartQuantity = (id) =>{
        setcartitems((currItem) =>{
            if(currItem.find((item)=> item.id === id)==null){
                return [ ...currItem , {id , quantity: 1}];
            }else{
                return currItem.map((item)=>{
                    if(item.id ===id){
                        return {...item , quantity : item.quantity + 1};
                    }else{
                        return item;
                    }
                })
            }
        }
        )

    };

    const decreaseCartQuantity = (id) =>{
        setcartitems((currItem) =>{
            if(currItem.find((item)=> item.id === id)==null){
                return currItem.filter((item)=> item.id !== id);
            }else{
                return currItem.map((item)=>{
                    if(item.id ===id){
                        return {...item , quantity : item.quantity - 1};
                    }else{
                        return item;
                    }
                })
            }
        }
        )

    };

    const removeItemfromCart = (id) =>{
        setcartitems((currItem)=> currItem.filter((item)=> item.id !==id));
    };


    return <ShopingCartContex.Provider value={{
        cartitems,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeItemfromCart,
        openCart,
        CloseCart,
        Quantitycart,
    }}>
           {children}
           <ShopingCar isOpen={isOpen}/>
          </ShopingCartContex.Provider>
  };
  
  export default ShopingCartpProvider;


  // I access the data through it

  export const useShopingCart = ()=>{
    return useContext(ShopingCartContex);

  };
  