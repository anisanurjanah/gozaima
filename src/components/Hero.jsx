export default function Hero() {
    return (
        <>
            <section className="hero-section">
                <div className="hero-container">
                    <div className="max-w-xl">
                        <h1 className="hero-title">
                            Premium Dimsum for <span className="hero-highlight">Your Business</span>
                        </h1>

                        <p className="hero-subtitle">
                            Wholesale supply of dimsum with restaurant-quality taste, competitive pricing, 
                            and consistent delivery to support your business.
                        </p>

                        <div className="hero-actions">
                            <a href="#" className="hero-btn">Let’s Talk</a>
                        </div>
                    </div>
                </div>

                <div className="hero-container hidden lg:block">
                    <img
                        src="img/1_GOZAIMA.png"
                        alt="Dimsum"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>
        </>
    )
}
