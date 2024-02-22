import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllCategory } from "../category/categorySlice";
import { addNewProduct } from "./productSlice";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')


    const onTitleChange = e => setTitle(e.target.value)
    const onDescriptionChange = e => setDescription(e.target.value)
    const onCategoryChange = e => setCategory(e.target.value)
    const onPriceChange = e => setPrice(e.target.value)
    const onImageChange = e => setImage(e.target.value)


    const categoryState = useSelector(selectAllCategory)

    const categoryStateOptions = categoryState.map(category => (
        <option key={category} value={category.id}>
            {category}
        </option>
    ))

    const canSave = [title, price, description, image, category].every(Boolean)


    const onSavePostClicked = () => {
        if (canSave) {
            try {
                dispatch(addNewProduct({ title, price, description, image, category }))
                setTitle('')
                setPrice('')
                setDescription('')
                setImage('')
                setCategory('')
                navigate('/product/All')


            }
            catch {
                console.error('Failed to add the Product', err)
            }
        }
    }

    return (
        <>
            <form className="flex flex-col gap-16 max-w-5xl mx-auto bg-slate-50 p-10 mt-10">

                <h2 className="text-center text-2xl ">Add Product</h2>
                <div className="flex flex-col gap-6">
                    <label htmlFor="title" className="font-bold text-lg">Product Title:</label>
                    <input
                        className="border boder-gray-800 p-3"
                        type="text"
                        id="postTitle"
                        name="postTitle"
                        value={title}
                        onChange={onTitleChange}
                    />
                </div>
                <div className="flex flex-col gap-6">
                    <label htmlFor="title" className="font-bold text-lg">Product Price:</label>
                    <input
                        className="border boder-gray-800 p-3"
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
                        className="border boder-gray-800 p-3"
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
                        className="border boder-gray-800 p-3 h-60"
                        name="postContent"
                        id="postContent"
                        value={description}
                        onChange={onDescriptionChange}
                    />
                </div>

                <div className="flex flex-col gap-6">
                    <label htmlFor="postAuthor" className="font-bold text-lg" >Category:</label>
                    <select
                        className="border boder-gray-800 p-3 "
                        id="postAuthor"
                        value={category}
                        onChange={onCategoryChange}>
                        <option value=""></option>
                        {categoryStateOptions}
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

export default AddProduct