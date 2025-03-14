import frame2 from "../assets/Frame 6.png"
import frame4 from "../assets/Frame 11.png"
import frame5 from "../assets/image1.png"
import frame6 from "../assets/image2.png"

const BentoGrid = () => {
    return (
        <section className="w-full py-12 bg-[#F7F7F7]">
            <div className="container mx-auto px-4">
                {/* Header Text */}
                <div className="text-center mb-8">
                    <p className="text-sm text-gray-600 mb-2">
                        <span className="inline-block w-1 h-1 bg-gray-400 rounded-full mr-1"></span>
                        What we have to offer
                    </p>
                    <p className="text-gray-800 max-w-3xl mx-auto text-sm md:text-base">
                        Whether it's bringing joy through good food, helping you find the perfect home, powering communities with
                        sustainable energy and affordable metering solutions, or getting your goods where they need to be, we do it
                        with passion and purpose.
                    </p>
                </div>

                {/* Bento Grid Layout with adjusted sizing */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    {/* Properties Card - Shorter, takes 5/12 of the grid */}
                    <div className="md:col-span-5 relative  rounded-2xl overflow-hidden h-64 md:h-auto">
                        <div className="w-full h-full">
                            <img
                                src={frame2 || "/placeholder.svg"}
                                alt="Modern building interior"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>

                    </div>

                    {/* Cargo & Logistics Card - Stretched, takes 7/12 of the grid and taller */}
                    <div className="md:col-span-7 relative  rounded-2xl overflow-hidden h-64 md:h-auto">
                        <div className="w-full h-full">
                            <img
                                src={frame6 || "/placeholder.svg"}
                                alt="Delivery person on motorcycle"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>

                    </div>

                    {/* Energy Card - Rectangle, takes 7/12 of the grid */}
                    <div className="md:col-span-7 relative  rounded-2xl overflow-hidden h-64 md:h-auto">
                        <div className="w-full h-full">
                            <img
                                src={frame5 || "/placeholder.svg"}
                                alt="Solar panels at sunset"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>

                    </div>

                    {/* Agric Card - Square, takes 5/12 of the grid */}
                    <div className="md:col-span-5 relative  rounded-2xl overflow-hidden h-64 md:h-auto">
                        <div className="w-full h-full">
                            <img
                                src={frame4 || "/placeholder.svg"}
                                alt="Grain products"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default BentoGrid

