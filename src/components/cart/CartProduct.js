import ProductDetailsNaming from "./ProductDetailsNaming";
import ProductCounter from "./ProductCounter";
import Image from "../ui/Image";
function CartProduct() {
	return (
          <div className="max-w-full m-4 md:m-14 p-4">
             <div className="max-w-full overflow-x-auto">
                <table className="w-full">
                	<tbody className="">
                		<tr className="">
                			<td className="p-4">Product</td>
                			<td className="p-4 text-left">Price</td>
                			<td className="p-4 text-center">Quantity</td>
                			<td className="p-4 text-center">Subtotal</td>
                		</tr>
                		<tr className="">
                			<td className="p-4 flex">
                			   <div className="flex justify-center gap-4 items-center">
                				<Image image="./images/gaming-monitor.png" altImage="" style="w-12 h-12" />
                			   	<p>LCD Monitor</p>
                			   </div>
                			</td>
                			<td className="p-4">$650</td>
                			<td className="p-4 flex justify-center"><ProductCounter /></td>
                			<td className="p-4 text-center">$650</td>
                		</tr>
                		<tr className="">
                			<td className="p-4 flex">
                			<div className="flex justify-center gap-4 items-center">
                				<Image image="./images/gamepad.png" altImage="" style="w-12 h-12" />
                				<p>LCD Monitor</p>
                		    </div>
                			</td>
                			<td className="p-4">$550</td>
                			<td className="p-4 flex justify-center"><ProductCounter /></td>
                			<td className="p-4 text-center">$1100</td>
                		</tr>
                	</tbody>
                </table>
             </div>
                <div className="w-full md:flex justify-between">
                	 <div className="md:basis-1/5 basis-1/2 grid grid-cols-1 place-content-center border p-2 col-span-8 border border-gray-600 rounded-md">
                	 	<button className="font-poppins font-medium">Return To Shop</button>
                	 </div>
                	 <div className="grid grid-cols-1 md:mt-0 mt-4 basis-1/2 md:basis-1/5 place-content-center border p-2 col-span-2 border border-gray-600 rounded-md">
                	 	<button className="font-poppins font-medium text-wrap">Update Cart</button>
                	 </div>
                </div>
          </div>
		)
} 

export default CartProduct;
