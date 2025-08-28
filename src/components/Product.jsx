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
                            Koleksi Dimsum
                        </h2>

                        <p className="section-subtitle text-center">
                            Jelajahi pilihan dimsum terbaik kami, dibuat dengan rasa otentik dan sentuhan modern. 
                            Cocok untuk stok bisnis, jadi menu andalan resto, atau sekadar camilan premium.
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
                                                className="product-highlight-img"
                                            />
                                        </div>

                                        <div className="product-highlight-content">
                                            <h3 className="product-highlight-title">{productHighlight.title}</h3>
                                            <p className="product-highlight-description">{productHighlight.description}</p>
                                            <button
                                                onClick={() => productHighlight.link}
                                                className="product-highlight-btn"
                                            >
                                                Lihat Detail
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
