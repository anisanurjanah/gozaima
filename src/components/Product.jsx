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
                        <li className="product-highlight">
                            <a href="#" className="product-highlight-link">
                                <div className="product-highlight-image-wrapper">
                                    <img
                                        src="https://images.unsplash.com/photo-1593795899768-947c4929449d?auto=format&fit=crop&w=2672&q=80"
                                        alt=""
                                        className="product-highlight-img-primary"
                                    />
                                    <img
                                        src="https://images.unsplash.com/photo-1593795899630-b6033c0fa58d?auto=format&fit=crop&w=774&q=80"
                                        alt=""
                                        className="product-highlight-img-hover"
                                    />
                                </div>

                                <div className="product-highlight-content">
                                    <h3 className="product-highlight-title">Paket Premium Dimsum</h3>

                                    <p className="product-highlight-description">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi dicta impedit
                                        aperiam ipsum!
                                    </p>

                                    <span
                                        className="product-highlight-btn"
                                    >
                                        Shop Now
                                    </span>
                                </div>
                            </a>
                        </li>
                    </ul>

                    <ul className="mt-4 gap-2 grid grid-cols-3">
                        {[1, 2, 3].map((i) => (
                            <li key={i}>
                            <a href="#" className="product-card">
                                <img
                                    src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2672&auto=format&fit=crop"
                                    alt=""
                                    className="product-card-img"
                                />
                                <div className="product-card-body">
                                    <strong className="product-card-title"> Aloe Vera </strong>
                                    <p className="product-card-desc">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia rem vel voluptatum in
                                        eum vitae aliquid at sed dignissimos.
                                    </p>
                                    <span className="product-card-btn">Learn More</span>
                                </div>
                            </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}