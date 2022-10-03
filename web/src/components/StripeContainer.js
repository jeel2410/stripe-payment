import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51Log3ESAtyuzKp96w04Ddy2hlTfh0q6PUsggo4ypZpM4G33FDfSahydRwKUWFifZ5ya2cC3HlbJlyYi5x6DreLAd00nwkUOs4D"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}
