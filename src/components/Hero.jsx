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
                        src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Dimsum"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>
        </>
    )
}
