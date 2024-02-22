import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"
import { selectProductById, updateProduct } from "./productSlice"
import { selectAllCategory } from "../category/categorySlice"



const EditProduct = () => {

    const { productId } = useParams()
    const navigate = useNavigate()

    const product = useSelector((state) => selectProductById(state, Number(productId)))


    console.log('the product',product)
    const categorys = useSelector(selectAllCategory)

    const [title, setTitle] = useState(product?.title)
    const [price, setPrice] = useState(product?.price)
    const [description, setDescription] = useState(product?.description)
    const [image, setImage] = useState(product?.image)
    const [category, setCategory] = useState(product?.category)

    const dispatch = useDispatch()

    if (!product) {
        return (
            <section>
                <h2>Product is not found</h2>
            </section>
        )

    }

    const onTitleChange = e => setTitle(e.target.value)
    const onPriceChange = e => setPrice(e.target.value)
    const onDescriptionChange = e => setDescription(e.target.value)
    const onImageChange = e => setImage(e.target.value)
    const onCategoryChange = e => setCategory(e.target.value)

    const canSave = [title, price, description, image, category].every(Boolean)

    const categoryOptions = categorys.map(category => (
        <option key={category} value={category.id}>
            {category}
        </option>
    ))

    const onSavePostClicked = () => {
        try {
            dispatch(updateProduct({ id: product.id, title, price, description, image, category })).unwrap()
            navigate(`/product/${product.id}`)
        }
        catch (err) {
            console.error('Faied update product')
        }
    }




    return (
        <>
            <form className="flex flex-col gap-16 max-w-5xl mx-auto bg-slate-50 p-10 mt-10">

                <h2 className="text-center text-2xl ">Edit Product</h2>
                <div className="flex flex-col gap-6">
                    <label htmlFor="title" className="font-bold text-lg">Product Title:</label>
                    <input
                        className="border boder-gray-100 p-3"
                        type="text"
                        id="postTitle"
                        name="postTitle"
                        value={title}
                        onChange={onTitleChange}
                    />
                </div>
                <div className="flex flex-col gap-6">
                    <label htmlFor="title" className="font-bold text-lg">Product Price: (Number)</label>
                    <input
                        className="border boder-gray-100 p-3"
                        type="number"
                        id="postTitle"
                        name="postTitle"
                        value={price}
                        onChange={onPriceChange}
                    />
                </div>
                <div className="flex flex-col gap-6">
                    <label htmlFor="title" className="font-bold text-lg">Product Image:</label>
                    <input
                        className="border boder-gray-100 p-3"
                        type="text"
                        id="postTitle"
                        name="postTitle"
                        value={image}
                        onChange={onImageChange}
                    />
                </div>
                <div className="flex flex-col gap-6">
                    <label htmlFor="postContent" className="font-bold text-lg">Description:</label>
                    <textarea
                        className="border boder-gray-100 p-3 h-60"
                        name="postContent"
                        id="postContent"
                        value={description}
                        onChange={onDescriptionChange}
                    />
                </div>
                <div className="flex flex-col gap-6">
                    <label htmlFor="postAuthor" className="font-bold text-lg">Category:</label>
                    <select
                        className="border boder-gray-100 p-3 "
                        id="postAuthor"
                        value={category}
                        onChange={onCategoryChange}>
                        <option value=""></option>
                        {categoryOptions}
                    </select>
                </div>
                <button
                    className="bg-indigo-600 text-white h-10 rounded disabled:bg-indigo-200"
                    onClick={onSavePostClicked}
                    type="button"
                    disabled={!canSave}
                >Save Product</button>
            </form>

        </>
    )
}

export default EditProduct