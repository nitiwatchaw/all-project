import Products from './features/product/ProductsAll'
import SingleProduct from './features/product/SingleProduct'
import ProductJew from './features/product/Product.Jew'
import ProductMenCloth from './features/product/Product.Men'
import ProductWomenCloth from './features/product/Product.Women'
import ProductElectronics from './features/product/Product.Electronics'
import AddProduct from './features/product/AddProduct'
import EditProduct from './features/product/EditProduct'
import Cart from './features/cart/Cart'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import ProductHeader from './features/product/ProductHeader'
import Summary from './features/cart/Summary'
function App() {



  return (
    <>


      <Header />

      <Routes>
        <Route path='/' element={<Home />}></Route>


        <Route path='/product' element={<ProductHeader />}>
          <Route path='/product/All' element={<Products />} />
          <Route path='/product/jewelery' element={<ProductJew />} />
          <Route path='/product/men-clothing' element={<ProductMenCloth />} />
          <Route path='/product/women-clothing' element={<ProductWomenCloth />} />
          <Route path='/product/electronics' element={<ProductElectronics />} />

        </Route>


        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/product/add' element={<AddProduct />}>   </Route>
        <Route path='/product/:productId' element={<SingleProduct />}></Route>

        <Route path='/product/edit/:productId' element={<EditProduct />}></Route>
        <Route path='/product/summary' element={<Summary />}></Route>
        <Route path='*' element={<Products />}></Route>
      </Routes>

    </>
  )
}

export default App
