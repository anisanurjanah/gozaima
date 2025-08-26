import partners from '@/data/partners.json'

export default function Partner() {
    return (
        <>
            <section id="partner">
                <div className="section-wrapper">
                    <header>
                        <h2 className="section-title">
                            Our Clients
                        </h2>

                        <p className="section-subtitle">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
                            dicta incidunt est ipsam, officia dolor fugit natus?
                        </p>
                    </header>

                    <div className="partner-list">
                        {
                            partners.map((partner, index) => (
                                <div id={index} className="partner-card">
                                    <img 
                                        src={partner.logo}
                                        alt={`Logo of ${partner.name}`}
                                        className="partner-logo"
                                    />
                                    <h1 className="partner-title">{partner.name}</h1>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
