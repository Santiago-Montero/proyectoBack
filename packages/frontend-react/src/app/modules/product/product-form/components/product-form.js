import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router";
import { createProduct, updateProduct } from "../../product.service";

const ProductForm = ({product, action}) => {
    let navigate = useNavigate();
    const [ isSubmit, setSubmit] = useState(false)
    let {name, price, stock, description, photo, category} = product
    return(
        <>
           <Formik
                initialValues={{ name: name || '', price: price || '', stock: stock || '', description: description || '', photo: photo || '', category:category || ''}}
                validate={values => {
                const errors = {};
                if (!values.name) {
                    errors.name = 'Required';
                }
                return errors;
                }}
                onSubmit={(values) => {
                    if(action === 'update'){
                        console.log(values)
                        updateProduct(product._id, values).then((res) => {
                            setSubmit(true)
                            setTimeout(() => {
                                setSubmit(false)
                                navigate('/');
                            },1000)
                        }).catch((error) => { console.log(error)})
                    }else if(action === 'create'){
                        createProduct(values).then((res) => {
                            setSubmit(true)
                            setTimeout(() => {
                                setSubmit(false)
                                navigate('/');
                            },1000)
                        }).catch((error) => { console.log(error)})
                    }
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                 !isSubmit ?

                    <form onSubmit={handleSubmit} className="box-form box">
                        <div className="field box">
                            <label className="label">Name</label>
                            <div className="control has-icons-left has-icons-right">
                                <input
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                            </div>
                        </div>
                        {errors.name && touched.name}
                        <div className="field">
                            <label className="label">Price</label>
                            <div className="control has-icons-left has-icons-right">
                                <input
                                    type="number"
                                    name="price"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.price}
                                />
                            </div>
                        </div>
                        {errors.price && touched.price}
                        <div className="field">
                            <label className="label">Stock</label>
                            <div className="control has-icons-left has-icons-right">
                                <input
                                    type="number"
                                    name="stock"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.stock}
                                />
                            </div>
                        </div>
                        {errors.stock && touched.stock}
                        <div className="field">
                            <label className="label">Photo</label>
                            <div className="control has-icons-left has-icons-right">
                                <input
                                    type="text"
                                    name="photo"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.photo}
                                    className="input"
                                />
                            </div>
                        </div>
                        {errors.photo && touched.photo}
                        <div className="field">
                            <label className="label">Description</label>
                            <div className="control has-icons-left has-icons-right">
                                <input
                                    type="text"
                                    name="description"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description}
                                />
                            </div>
                        </div>
                        {errors.description && touched.description}
                        <div className="field">
                            <label className="label">Category</label>
                            <div className="control has-icons-left has-icons-right">
                                <input
                                    type="text"
                                    name="category"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.category}
                                />
                            </div>
                        </div>
                        {errors.category && touched.category}
                        <div className="field is-grouped">
                            <div className="control">
                                <button className="button is-link" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                :
                `<h2> The ${action} was succefully </h2>` // en algun momento poner un lindo mensaje
            
                )}
            </Formik>
        </>
    )
}

export default ProductForm;