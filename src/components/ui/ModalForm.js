import { useState, useEffect } from "react";
import homesalesdata from "../data/homesalesdata.json";
import productCard from "./HomeSalesProducts";

function ModalForm({display}) {
	const [ itemName, setItemName ] = useState("");
	const [ price, setPrice ] = useState("");
	const [ star, setStar ] = useState("");
	const [ image, setImage ] = useState("");

	const [products, setProducts] = useState(() => {
		const productStored = JSON.parse(localStorage.getItem("products"));
		return Array.isArray(productStored) ? productStored : [];
	});
   

	function handleSubmit(e) {
         e.preventDefault();
         const newProduct = {
			id: Date.now(), // unique id
			name: itemName,
			price: price,
			star: star,
			image: image
		};
		setProducts(prev => [...prev, newProduct]);
		window.location.reload();

		setItemName("");
		setPrice("");
		setStar("");
		setImage("");
	}

	console.log(products);

	useEffect(() => {
		localStorage.setItem("products", JSON.stringify(products));
	}, [products]);


	return (
		<div className={`border w-[500px] h-auto ${display} absolute top-[740px] bg-blue-400 rounded-lg z-10 right-8`}>
		  <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 p-2 ">
            <input className="border border-ModalProductblack p-2 focus:outline-none" type="text" placeholder="Product name" value={itemName} onChange={(e) => setItemName(e.target.value) } />
            <input className="border border-black p-2 focus:outline-none" type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value) } />
            <input className="border border-black p-2 focus:outline-none" type="text" placeholder="Rating" value={star} onChange={(e) => setStar(e.target.value) } />
            <input className="border border-black p-2 focus:outline-none" type="text" placeholder="Product Image" value={image} onChange={(e) => setImage(e.target.value) } />
            <button className="bg-red-500 text-white" type="submit">Submit</button>
		  </form>
         </div>
		)
}


export default ModalForm;
