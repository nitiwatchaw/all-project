import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const PROD_URL = 'https://fakestoreapi.com/products'


const initialState = {
    products: [],
    status: 'idle',
    error: null,
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    summaryCart: localStorage.getItem('summaryItems') ? JSON.parse(localStorage.getItem("summaryItems")) : [],
    cartTotalAmountSummary: 0
}

// fetch products data
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    try {
        const res = await axios.get(PROD_URL)
        return [...res.data]
    }
    catch (err) {
        return err.message
    }
})

export const addNewProduct = createAsyncThunk('products/addNewProduct', async (initailProduct) => {
    try {
        const res = await axios.post(PROD_URL, initailProduct)
        return res.data
    } catch (err) {
        return err.message
    }
})

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (initailProduct) => {

    const { id } = initailProduct
    try {
        const res = await axios.delete(`${PROD_URL}/${id}`)
        if (res?.status === 200) return initailProduct
        return `${res?.status}: ${res?.statusText}`
    }
    catch (err) {
        return err.message
    }
})

export const updateProduct = createAsyncThunk('products/updateProduct', async (initailProduct) => {
    const { id } = initailProduct
    try {
        const res = await axios.put(`${PROD_URL}/${id}`, initailProduct)
        return res.data
    }
    catch (err) {
        return initailProduct
    }
})



const productSlice = createSlice({

    name: 'products',
    initialState,
    reducers: {
        addLike(state, action) {

            // Assuming action.payload contains the product ID or some identifier
            const { productId } = action.payload;
            const existingProduct = state.products.find(product => product.id === productId)

            if (existingProduct) {
                existingProduct.reactions = !existingProduct.reactions;

            }
        },
        addToCart: (state, action) => {


            const { title } = action.payload;
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)

            if (itemIndex < 0) {
                state.cartItems = [...state.cartItems, { ...action.payload, quantity: 1 }];

                alert(`Added ${title}`);

            } else {
                state.cartItems = state.cartItems.map((item, index) => {
                    if (index === itemIndex) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                });
                alert(`Added more ${title}`);
            }

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        decreaseItemFromCart: (state, action) => {
            const { id, title } = action.payload;

            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)

            if (state.cartItems[itemIndex].quantity > 1) {
                state.cartItems = state.cartItems.map((item, index) => {
                    if (index === itemIndex) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                    return item;
                });
            } else {

                const itemsCart = state.cartItems.filter(
                    cartItem => cartItem.id !== id
                )
                state.cartItems = itemsCart;
                alert(`decrease ${title}`);
            }

            alert(`decrease ${title}`);
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        deleteItemFromCart: (state, action) => {
            const { id, title } = action.payload;

            const itemsCart = state.cartItems.filter(
                cartItem => cartItem.id !== id
            )
            state.cartItems = itemsCart;
            alert(`Removed ${title}`);
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        getTotals(state, action) {
            state.cartTotalAmount = state.cartItems.reduce((total, item) => {
                return total + item.quantity * item.price;
            }, 0);

            state.cartTotalAmountSummary = state.summaryCart.reduce((total, item) => {
                return total + item.quantity * item.price;
            }, 0);

            state.cartTotalQuantity = state.cartItems.reduce((total, item) => {
                return total + item.quantity
            }, 0)
        },
        clearCart(state, action) {
            state.cartItems = []
            alert('Cleared')
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        purchaseCart(state, action) {
            state.summaryCart = [...state.cartItems];
            state.cartItems = []
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            alert('purchase success')
            localStorage.setItem("summaryItems", JSON.stringify(state.summaryCart))
        },
        endProcess(state, action) {
            state.summaryCart = []
            localStorage.setItem("summaryItems", JSON.stringify(state.summaryCart))
        }

    },
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {

                state.status = 'succeeded'

                const loadedProduct = action.payload.map(product => {
                    // add new object to each product in arr
                    product.reactions = false

                    return product;
                })
                state.products = state.products.concat(loadedProduct)
            })

            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message

            })
            .addCase(addNewProduct.fulfilled, (state, action) => {

                // เพื่ม id auto
                action.payload.id = state.products.length + 1

                action.payload.reactions = false

                state.products.push(action.payload)

                console.log('added', action.payload)

            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                if (!action.payload?.id) {
                    console.log('Delete count not complete')
                    console.log(action.payload)
                    return
                }
                const { id } = action.payload;
                const products = state.products.filter(product => product.id !== id)
                state.products = products

            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                if (!action.payload?.id) {
                    console.log('Update cound not complete')
                    return;
                }
                const { id } = action.payload
                const products = state.products.filter(product => product.id !== id)
                state.products = [...products, action.payload]
                console.log(action.payload)
            })
    }
})



export const selectAllProducts = (state) => state.products.products

export const getProductStatus = (state) => state.products.status
export const getProductError = (state) => state.products.error


export const selectProductById = (state, productId) => state.products.products.find(product => product.id === productId)

export const selectCartItems = (state) => state.products.cartItems;

export const selectTotalCart = (state) => state.products.cartTotalAmount
export const selectQuantityCart = (state) => state.products.cartTotalQuantity


export const selectSummaryCart = (state) => state.products.summaryCart
export const selectTotalCartSummary = (state) => state.products.cartTotalAmountSummary


export const {
    addLike,
    addToCart,
    deleteItemFromCart,
    decreaseItemFromCart,
    getTotals,
    clearCart,
    purchaseCart,
    endProcess
} = productSlice.actions

export default productSlice.reducer