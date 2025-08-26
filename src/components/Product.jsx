import products from '@/data/products.json'

export default function Product() {
    const product = products.data;
    const productHighlight = product[0];
    const productItem = product.slice(1);

    return (
        <>
            <section id="product">
                <div className="section-wrapper">
                    <header>
                        <h2 className="section-title text-center">
                            Dimsum Collection
                        </h2>

                        <p className="section-subtitle text-center">
                            Discover our handpicked selection of dimsum, crafted with authentic taste 
                            and a modern twist. Perfect for sharing, snacking, or indulging anytime.
                        </p>
                    </header>

                    <ul className="product-highlight-grid">
                        <li className="product-highlight">
                            {
                                productHighlight && (
                                    <a href={productHighlight.link} className="product-highlight-link">
                                        <div className="product-highlight-image-wrapper">
                                            <img
                                                src={productHighlight.image}
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
                                            <h3 className="product-highlight-title">{productHighlight.title}</h3>
                                            <p className="product-highlight-description">{productHighlight.description}</p>
                                            <button
                                                onClick={() => productHighlight.link}
                                                className="product-highlight-btn"
                                            >
                                                Learn More
                                            </button>
                                        </div>
                                    </a>
                                )
                            }
                        </li>
                    </ul>

                    <ul className="product-card-grid">
                        {
                            productItem.map((product) => (
                                <li key={product.id}>
                                    <a href={product.link} className="product-card">
                                        <img
                                            src={product.image}
                                            alt=""
                                            className="product-card-img"
                                        />
                                        <div className="product-card-body">
                                            <strong className="product-card-title">{product.title}</strong>
                                            <p className="product-card-description">{product.description}</p>
                                            <button
                                                onClick={() => product.link}
                                                className="product-card-btn"
                                            >
                                                Learn More
                                            </button>
                                        </div>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}
