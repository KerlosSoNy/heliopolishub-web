import AboutSection3 from "@/components/aboutus/about-usSection";
import { Faq3 } from "@/components/aboutus/faq3";
import SocialCards from "@/components/card-fan-carousel";

const demoData = {
    heading: "Frequently Asked Questions",
    description: "Got questions about pre-orders, premium packaging, or sourcing rare models? We've got answers for the collector community.",
    items: [
        {
            id: "faq-1",
            question: "Are all your diecast models 100% authentic?",
            answer:
                "Absolutely. Every single model we stock—whether it's from Mini GT, Kaido House, INNO64, or Tarmac Works—is sourced directly from official distribution channels. We never deal in replicas or unauthorized variants.",
        },
        {
            id: "faq-2",
            question: "How do you guarantee the mint condition of the boxes during shipping?",
            answer:
                "We are collectors ourselves, so we know the box matters just as much as the car. All orders are meticulously wrapped in heavy-duty bubble wrap and shipped inside sturdy outer cardboard boxes to completely eliminate transit damage.",
        },
        {
            id: "faq-3",
            question: "How do pre-orders work for upcoming brand releases?",
            answer:
                "When a manufacturer announces a new casting line, we open pre-orders with estimated release windows. Secure your spot by placing a pre-order, and we will fulfill your item the exact moment our allocation arrives in Egypt.",
        },
        {
            id: "faq-4",
            question: "How long does it take for imported or pre-ordered models to arrive in Egypt?",
            answer:
                "For items coming from international shipments or specific pre-orders, please allow between 16 to 20 days for the shipment to clear customs and arrive safely at our hub before final doorstep delivery.",
        },
        {
            id: "faq-5",
            question: "Do you ship across all of Egypt?",
            answer:
                "Yes, we offer reliable shipping to all governorates in Egypt. Local delivery times generally range from 2 to 5 business days once the stock is available at our main hub.",
        },
        {
            id: "faq-6",
            question: "What happens if I receive a Kaido House or Mini GT 'Chase' car?",
            answer:
                "Lucky you! We believe in total fairness—all factory chase cars or raw versions are distributed completely at random among standard pre-orders and regular inventory orders. We do not cherry-pick or scale up the price for raw luck.",
        },
        {
            id: "faq-7",
            question: "Can I make a special request for a rare or older out-of-stock model?",
            answer:
                "Definitely. If you are hunting down a specific out-of-production Skyline R34, a vintage Porsche casting, or a hard-to-find diorama component, reach out to us and our sourcing network will do its best to track it down for you.",
        },
        {
            id: "faq-8",
            question: "Where is the Heliopolis Hub storefront or physical hub located?",
            answer:
                "We operate dynamically online across Egypt, serving as a dedicated digital storefront and community hub. All orders are safely processed online and delivered straight to your doorstep.",
        },
    ]
};

const Page = () => {
    const DEMO_CARDS = [
        { imgUrl: "/images/cars/1.JPG", alt: "Mountain landscape" },
        { imgUrl: "/images/cars/2.JPG", alt: "City night" },
        { imgUrl: "/images/cars/3.JPG", alt: "Foggy forest" },
        { imgUrl: "/images/cars/4.JPG", alt: "Sunlit woods" },
        { imgUrl: "/images/cars/5.JPG", alt: "Tropical beach" },
        { imgUrl: "/images/cars/6.JPG", alt: "Starry mountain" },
        { imgUrl: "/images/cars/7.JPG", alt: "Golden sunset" },
        { imgUrl: "/images/cars/8.JPG", alt: "Lake reflection" },
        { imgUrl: "/images/cars/9.JPG", alt: "Green valley" },
        { imgUrl: "/images/cars/10.JPG", alt: "Sunbeam nature" },
    ];
    return (
        <div className="flex flex-col px-3 md:px-6 xl:px-15 2xl:px-25 w-full">
            <AboutSection3 />
            <div className="h-fit py-18 w-full z-100">
                <SocialCards cards={DEMO_CARDS} />
            </div>
            <Faq3 {...demoData} />
        </div>
    );
}

export default Page;