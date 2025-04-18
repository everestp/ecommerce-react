import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { products } from "../../Utils/data";

const ProductDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
const {increaseQty} = useContext(StoreContext)
useEffect(() =>{
    const index = products.findIndex(item => item.id === id);
    setData(products[index]);
    console.log(data)
},[id])



    return (
        <div className="container py-5">
            <div className="row">
                {/* Product Images */}
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <img
                            src={data.imageUrl}
                            className="card-img-top"
                            alt="Product Image"
                        />
                    </div>
                </div>

                {/* Product Details */}
                <div className="col-md-6">
                    <h1 className="h2 mb-3">{data.name}</h1>
                    <div className="mb-3">
                        <span className="h4 me-2">
                            RS{" "}
                            <span style={{ color: "orange" }}>
                               {data.price}.00
                            </span>
                        </span>
                    </div>

                    <div className="mb-3">
                        <div className="d-flex align-items-center">
                            <div className="text-warning me-2">
                                {[...Array(4)].map((_, i) => (
                                    <i key={i} className="fas fa-star"></i>
                                ))}
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            <span className="text-muted">(128 reviews)</span>
                        </div>
                    </div>

                    <p className="mb-4">{data.description}</p>

                    {/* Color Selection */}
                    <div className="mb-4">
                        <h6 className="mb-2">Color</h6>
                        <div className="btn-group" role="group">
                            {["silver", "gold", "black"].map((color) => (
                                <React.Fragment key={color}>
                                    <input
                                        type="radio"
                                        className="btn-check"
                                        name="color"
                                        id={color}
                                    />
                                    <label
                                        className="btn btn-outline-secondary"
                                        htmlFor={color}
                                    >
                                        {color.charAt(0).toUpperCase() + color.slice(1)}
                                    </label>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* Quantity */}
                    <div className="mb-4">
                        <div className="d-flex align-items-center">
                            <label className="me-2">Quantity:</label>
                            <select className="form-select w-auto">
                                {[1, 2, 3, 4, 5].map((quantity) => (
                                    <option key={quantity}>{quantity}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="button" onClick={()=>increaseQty(id)}>
                            Add to Cart
                        </button>
                        <button className="btn btn-outline-secondary" type="button">
                            <i className="far fa-heart me-2"></i>Add to Wishlist
                        </button>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-4">
                        {[
                            {
                                icon: "fas fa-truck",
                                text: "Free shipping on orders over $50",
                            },
                            {
                                icon: "fas fa-undo",
                                text: "30-day return policy",
                            },
                            {
                                icon: "fas fa-shield-alt",
                                text: "2-year warranty",
                            },
                        ].map((info, i) => (
                            <div
                                key={i}
                                className="d-flex align-items-center mb-2"
                            >
                                <i className={`${info.icon} text-primary me-2`}></i>
                                <span>{info.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;