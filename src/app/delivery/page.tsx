export default function Delivery() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Delivery Policy</h1>
                <div className="bg-white rounded-lg shadow-md p-8 space-y-8">

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Shipping Methods</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">We offer the following shipping options:</p>
                        <div className="space-y-4 ml-2">
                            <div className="border-l-4 border-blue-500 pl-4">
                                <h3 className="font-semibold text-gray-800">J&T Express</h3>
                                <p className="text-gray-700">2-3 business days</p>
                            </div>
                            <div className="border-l-4 border-blue-500 pl-4">
                                <h3 className="font-semibold text-gray-800">Same-Day Delivery</h3>
                                <p className="text-gray-700">Available in Cairo only | EGP 100-200 | Orders placed before 12 PM</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Delivery Timeline</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Delivery times are estimated from the date the order is confirmed and payment is received.
                            Delivery times do not include weekends and public holidays in Egypt.
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                            <li>Cairo and Giza: 2-5 business days</li>
                            <li>Alexandria and surrounding areas: 3-6 business days</li>
                            <li>Other Egyptian cities: 5-7 business days</li>
                            <li>Remote areas: 7-10 business days</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Delivery Tracking</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Once your order ships, you will receive a tracking number via email. You can use this number to track your package status
                            through our website or our delivery partners tracking system. We recommend saving this number for reference.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Delivery Address</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Please ensure that your delivery address is accurate and complete during checkout. We are not responsible for undeliverable packages
                            resulting from incorrect or incomplete addresses provided by the customer.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            We deliver to all addresses within Egypt where our delivery partners operate.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Delivery Charges</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Delivery charges are calculated based on your location and the selected shipping method:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                            <li>Orders under EGP 500: Standard delivery fee applies</li>
                            <li>Orders EGP 500 or more: Free standard delivery</li>
                            <li>Express and same-day options have fixed fees</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Failed Delivery Attempts</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            If the delivery attempt is unsuccessful:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                            <li>Our delivery partner will attempt to contact you</li>
                            <li>Package will be returned to our warehouse after 3 failed attempts</li>
                            <li>You will be notified of the return and can arrange redelivery</li>
                            <li>Redelivery may incur additional charges</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Damaged or Lost Packages</h2>
                        <p className="text-gray-700 leading-relaxed">
                            If your package arrives damaged or is lost during transit, please contact us immediately with photos of the damage.
                            We will file a claim with the delivery partner and work to replace or refund your order. Claims must be reported within 48 hours of delivery.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. International Shipping</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Currently, we only ship within Egypt. International shipping may be available in the future.
                            Please contact us for inquiries about shipping to other countries.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Delivery Partner</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We work with reliable local delivery partners to ensure your order reaches you safely and on time.
                            All our delivery partners are insured and trained professionals.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Contact for Delivery Issues</h2>
                        <p className="text-gray-700 leading-relaxed">
                            If you have any issues with your delivery, please contact our customer service team at delivery@diecastshop.com
                            or call us at +20 XXX XXXX XXX (within Egypt). We are available Sunday to Thursday, 10 AM to 6 PM EET.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}