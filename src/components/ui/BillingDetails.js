import Form from "./Form";
import CheckType from "./CheckType";
function BillingDetails() {
	return (
          <div className="grid grid-cols-1 mt-12 place-content-center place-items-start gap-2">
          	  <div>
          	  	 <h1 className="text-4xl font-inter">Billing Details</h1>
          	  </div>
          	  <Form/>
          </div>
		)
}

export default BillingDetails;
