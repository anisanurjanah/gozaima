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
                            Trusted by amazing brands and businesses who believe in what we do.  
                            Here’s a glimpse of the people we’ve partnered with along the way.
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
