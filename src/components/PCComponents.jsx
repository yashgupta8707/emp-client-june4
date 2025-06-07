import ComponentModel from "./ComponentModel";

export function PCComponents() {
    return (
        <div className="bg-[#0D0D0D] m-12 p-4 lg:p-6 min-h-screen rounded-2xl overflow-hidden shadow-md">
            <h2 className="text-[#F47C5A] text-xl lg:text-2xl text-center font-semibold mb-8">
                Get to know our Components:
            </h2>

            <div className="grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 gap-4">
                <div className="flex flex-col flex-row items-center justify-around gap-6">
                    <ComponentModel i={1} />
                    <div className="bg-[#1e1e1e] p-6 rounded-2xl text-gray-300 text-center transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/40 w-1/3 h-2/3 lg:h-1/3">
                        <h2 className="text-xl mb-5 font-semibold text-[#76B900]">Nvidia GPUs</h2>
                    </div>
                </div>

                <div className="flex flex-col flex-row-reverse lg:flex-row items-center justify-around gap-6">
                    <ComponentModel i={2} />
                    <div className="bg-[#1e1e1e] p-6 rounded-2xl text-gray-300 text-center transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/40 w-1/3 h-2/3 lg:h-1/3">
                        <h2 className="text-xl mb-5 font-semibold text-[#1E90FF]">CPU Coolers</h2>
                    </div>
                </div>

                <div className="flex flex-col flex-row lg:flex-row-reverse items-center justify-around gap-6">
                    <ComponentModel i={3} />
                    <div className="bg-[#1e1e1e] p-6 rounded-2xl text-gray-300 text-center transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/40 w-1/3 h-2/3 lg:h-1/3">
                        <h2 className="text-xl mb-5 font-semibold text-[#64748B]">PC Cases</h2>
                    </div>
                </div>

                <div className="flex flex-col flex-row-reverse items-center justify-around gap-6">
                    <ComponentModel i={4} />
                    <div className="bg-[#1e1e1e] p-6 rounded-2xl text-gray-300 text-center transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/40 w-1/3 h-2/3 lg:h-1/3">
                        <h2 className="text-xl mb-5 font-semibold text-[#006400]">RAMs</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
