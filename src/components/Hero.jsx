export default function Hero() {
    return (
        <>
            <section className="hero-section">
                <div className="hero-container">
                    <div className="max-w-xl">
                        <h1 className="hero-title">
                            Dimsum Premium untuk <span className="hero-highlight">Bisnismu</span>
                        </h1>

                        <p className="hero-subtitle">
                            Pasokan dimsum grosir dengan rasa setara restoran, harga kompetitif, 
                            dan pengiriman konsisten untuk mendukung bisnismu berkembang.
                        </p>

                        <div className="hero-actions">
                            <a href="/contact" className="hero-btn">Diskusi Sekarang</a>
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
