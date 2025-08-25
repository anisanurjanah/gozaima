export default function Product() {
    return (
        <>
            <section>
                <div className="section-wrapper">
                    <header>
                        <h2 className="section-title text-center">
                            Product Collection
                        </h2>

                        <p className="section-subtitle text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
                            dicta incidunt est ipsam, officia dolor fugit natus?
                        </p>
                    </header>

                    <ul className="mt-8 grid grid-cols-3">
                        <li className="col-span-3">
                            <a href="#" className="group relative block">
                                <div className="relative h-[350px] sm:h-[450px]">
                                    <img
                                        src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                                        alt=""
                                        className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                                    />

                                    <img
                                        src="https://images.unsplash.com/photo-1593795899630-b6033c0fa58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                        alt=""
                                        className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                                    />
                                </div>

                                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                    <h3 className="text-xl font-medium text-white">Paket Premium Dimsum</h3>

                                    <p className="mt-1.5 text-xs text-pretty text-white">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi dicta impedit
                                        aperiam ipsum!
                                    </p>

                                    <span
                                        className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium tracking-wide text-white uppercase"
                                    >
                                        Shop Now
                                    </span>
                                </div>
                            </a>
                        </li>
                    </ul>

                    <ul className="mt-8 gap-4 grid grid-cols-3">
                        <li>
                            <a href="#" className="relative block rounded-tr-3xl border border-gray-100">
                                <span
                                    className="absolute -top-px -right-px rounded-tr-3xl rounded-bl-3xl bg-rose-600 px-6 py-4 font-medium tracking-widest text-white uppercase"
                                >
                                    Save 10%
                                </span>

                                <img
                                    src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                    className="h-80 w-full rounded-tr-3xl object-cover"
                                />

                                <div className="p-4 text-center">
                                    <strong className="text-xl font-medium text-gray-900"> Aloe Vera </strong>

                                    <p className="mt-2 text-pretty text-gray-700">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia rem vel voluptatum in
                                        eum vitae aliquid at sed dignissimos.
                                    </p>

                                    <span
                                        className="mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium tracking-widest text-white uppercase transition-colors hover:bg-white hover:text-indigo-900"
                                    >
                                        Learn More
                                    </span>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="relative block rounded-tr-3xl border border-gray-100">
                                <span
                                    className="absolute -top-px -right-px rounded-tr-3xl rounded-bl-3xl bg-rose-600 px-6 py-4 font-medium tracking-widest text-white uppercase"
                                >
                                    Save 10%
                                </span>

                                <img
                                    src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                    className="h-80 w-full rounded-tr-3xl object-cover"
                                />

                                <div className="p-4 text-center">
                                    <strong className="text-xl font-medium text-gray-900"> Aloe Vera </strong>

                                    <p className="mt-2 text-pretty text-gray-700">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia rem vel voluptatum in
                                        eum vitae aliquid at sed dignissimos.
                                    </p>

                                    <span
                                        className="mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium tracking-widest text-white uppercase transition-colors hover:bg-white hover:text-indigo-900"
                                    >
                                        Learn More
                                    </span>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="relative block rounded-tr-3xl border border-gray-100">
                                <span
                                    className="absolute -top-px -right-px rounded-tr-3xl rounded-bl-3xl bg-rose-600 px-6 py-4 font-medium tracking-widest text-white uppercase"
                                >
                                    Save 10%
                                </span>

                                <img
                                    src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                    className="h-80 w-full rounded-tr-3xl object-cover"
                                />

                                <div className="p-4 text-center">
                                    <strong className="text-xl font-medium text-gray-900"> Aloe Vera </strong>

                                    <p className="mt-2 text-pretty text-gray-700">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia rem vel voluptatum in
                                        eum vitae aliquid at sed dignissimos.
                                    </p>

                                    <span
                                        className="mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium tracking-widest text-white uppercase transition-colors hover:bg-white hover:text-indigo-900"
                                    >
                                        Learn More
                                    </span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}