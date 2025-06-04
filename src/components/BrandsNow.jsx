    "use client";

    import { images } from '@/constants/images';
    export default function BrandsNow() {
    const brandLogos = [
        { name: "Bajaj", src: images.Bajaj },
        { name: "Century", src: images.Century },
        { name: "CSB Bank", src: images.CSBbank },
        { name: "HDFC Bank", src: images.HDFCbank },
        { name: "Megamart", src: images.Megamaart }, // Corrected spelling if 'Megamaart' is intended
        { name: "Tata ClassEdge", src: images.Tataclass },
        { name: "Tata Steel", src: images.TataSteel }, // You can add more logos here if needed, or remove if you only have these 7
    ];

    return (
        <section className="py-16 bg-white font-sans antialiased">
        <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-12 text-center uppercase tracking-wide">
            Empowered brands for over 11 years now
            </h2>

            <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center justify-items-center"
            >
            {brandLogos.map((brand, index) => (
                <div
                key={index}
                className="flex items-center justify-center p-4"
                >
                <img
                    src={brand.src}
                    alt={`${brand.name} Logo`}
                    className="max-w-full h-auto max-h-16 object-contain hover:opacity-100 transition-opacity duration-300 mx-auto"
                    onError={(e) => {
                    e.target.onerror = null; // Prevent infinite loop
                    e.target.src = `https://placehold.co/120x60/cccccc/333333?text=Logo`;
                    }}
                />
                </div>
            ))}
            </div>

        </div>
        </section>
    );
    }
