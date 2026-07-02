export default function Returns() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Return Policy</h1>
                <div className="bg-white rounded-lg shadow-md p-8 space-y-8">

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Return Window</h2>
                        <p className="text-gray-700 leading-relaxed">
                            You have <strong>14 days</strong> from the date of delivery to initiate a return or exchange.
                            Items returned after this period will not be accepted unless they are defective or damaged.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Eligibility for Returns</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Items must meet the following conditions to be eligible for return:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                            <li>Item must be in original, unused condition</li>
                            <li>Original packaging and all accessories must be included</li>
                            <li>No signs of wear, damage, or tampering</li>
                            <li>Proof of purchase (order receipt) must be provided</li>
                            <li>Item must not have been modified or assembled</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Non-Returnable Items</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The following items cannot be returned:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                            <li>Items marked as Final Sale</li>
                            <li>Opened or used items</li>
                            <li>Damaged items due to customer misuse</li>
                            <li>Clearance or discount items (unless defective)</li>
                            <li>Custom or special orders</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. How to Initiate a Return</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            To start a return process:
                        </p>
                        <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-2">
                            <li>Log into your account and go to My Orders</li>
                            <li>Select the order containing the item you wish to return</li>
                            <li>Click Request Return and provide your reason</li>
                            <li>Follow the instructions to print the return shipping label</li>
                            <li>Pack the item securely in its original packaging</li>
                            <li>Drop off at the specified courier location</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Return Shipping</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            <strong>Return Shipping Costs:</strong>
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                            <li>Defective or damaged items: We cover return shipping costs</li>
                            <li>Change of mind: Customer covers return shipping (EGP 25-50 depending on location)</li>
                            <li>Wrong item or our error: We cover return shipping costs</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            A prepaid return label will be provided via email once your return is approved.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Inspection and Refund Processing</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Once we receive your return:
                        </p>
                        <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-2">
                            <li>We inspect the item (typically 3-5 business days)</li>
                            <li>If approved, we process your refund</li>
                            <li>Refund is issued to the original payment method</li>
                            <li>Processing time: 5-7 business days after approval</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Refund Amount</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            <strong>Full refund includes:</strong>
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                            <li>Product price</li>
                            <li>Any applicable taxes</li>
                            <li>Original delivery charges (for defective items only)</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            <strong>Return shipping costs</strong> are deducted from refunds for non-defective items returned due to change of mind.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Exchanges</h2>
                        <p className="text-gray-700 leading-relaxed">
                            You can exchange an item for a different variant or size within the 14-day return window.
                            If the new item costs more, you will pay the difference. If it costs less, we will refund the difference
                            (minus return shipping costs for non-defective items). Exchange items will be shipped once we receive and inspect your original item.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Defective Items</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            If you receive a defective or damaged item:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                            <li>Report the issue within 48 hours of delivery</li>
                            <li>Provide photos of the defect</li>
                            <li>We will replace or refund the item at no cost to you</li>
                            <li>Return shipping will be covered by us</li>
                            <li>No inspection period is necessary for clearly defective items</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Return Tracking</h2>
                        <p className="text-gray-700 leading-relaxed">
                            You can track your return shipment using the tracking number provided with your return label.
                            You can also check the status of your return request in your account under My Orders.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Refused Deliveries</h2>
                        <p className="text-gray-700 leading-relaxed">
                            If you refuse delivery of an order, return shipping costs will apply (EGP 25-50 depending on location).
                            Once we receive and inspect the item, a refund will be issued minus return shipping costs and any applicable restocking fees.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Contact Us</h2>
                        <p className="text-gray-700 leading-relaxed">
                            If you have questions about our return policy or need assistance with a return, please contact:
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            <strong>Email:</strong> returns@diecastshop.com<br />
                            <strong>Phone:</strong> +20 XXX XXXX XXX (Sunday-Thursday, 10 AM - 6 PM EET)<br />
                            <strong>Hours:</strong> Sunday to Thursday, 10 AM to 6 PM Egypt Time
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}