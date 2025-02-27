// import React from "react";



const HelpSection = () => {
    return (
        
        <div className="bg-gray-100 py-10 px-5 flex flex-col">
            <h2 className="text-2xl font-bold text-left p-10">
            Apple Store App. <span className=" font-bold text-gray-500">Your own personal store.</span>
            </h2>
            <div className="flex gap-6 max-w-6xl w-full overflow-x-auto">
                {/* First Card */}
                <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center min-w-[300px]">
                    <span className="text-sm uppercase text-gray-500 font-medium">Apple Store App</span>
                    <h3 className="text-xl font-semibold my-2">Discover a new way to shop.</h3>
                    <img width="400" height="500" alt="" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-india-asa-launch-202501?wid=800&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1736763680757" className="rf-ccard-img-full"></img>
                </div>

                {/* Second Card */}
                <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center min-w-[300px]">
                    <span className="text-sm uppercase text-gray-500 font-medium">PERSONALSATION</span>
                    <h3 className="text-xl font-semibold my-2">Explore recommendations customised for you.</h3>
                    <img width="400" height="500" alt="" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-india-asa-personalisation-202501?wid=800&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1736763681484" className="rf-ccard-img-full"/>
                </div>

                {/* Third Card */}
                <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center min-w-[300px]">
                    <span className="text-sm uppercase text-gray-400 font-medium">Seamless shopping</span>
                    <h3 className="text-xl font-semibold my-2">Browser. Save.Pick up where you left off.</h3>
                    <img width="400" height="500" alt="" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-india-asa-for-you-202501?wid=800&amp;hei=1000&amp;fmt=jpeg&amp;qlt=90&amp;.v=1736763680936" className="rf-ccard-img-full"/>
                </div>

                {/* Additional Cards */}
                <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center min-w-[300px] ">
                    <span className="text-sm uppercase text-gray-400 font-medium">GO FURTHER</span>
                    <h3 className="text-xl font-semibold my-2">Learn how to get more from your devices.</h3>
                    <img width="400" height="500" alt="" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-india-asa-go-further-202501?wid=800&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1737095125109" className="rf-ccard-img-full"/>
                </div>
            </div>
        </div>
    );
};
export default HelpSection;