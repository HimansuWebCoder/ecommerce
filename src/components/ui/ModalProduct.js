import { useState, useEffect } from "react";
import HomeSalesProducts from "./HomeSalesProducts";
import homesalesdata from "../data/homesalesdata.json";

function ModalProduct() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const storedProducts = JSON.parse(localStorage.getItem("products"));
		setProducts(Array.isArray(storedProducts) ? storedProducts : []);
	}, []);
    
	return (         	              	
             <div className="grid grid-cols-2 gap-4 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 m-14">
			{products.map((item) => (
				<div key={item.id}>
					<HomeSalesProducts 
						itemName={item.name}
						itemPrice={item.price}
						itemImg={item.image}
						rating={item.star}
					/>
				</div>
			))}
		</div>
		)
}

export default ModalProduct;