import partners from '@/data/partners.json'

export default function Partner() {
    return (
        <>
            <section id="partner">
                <div className="section-wrapper">
                    <header>
                        <h2 className="section-title">
                            <span className='partner-highlight'>Partner</span> Kami
                        </h2>

                        <p className="section-subtitle">
                            Dipercaya berbagai brand dan bisnis keren yang connect dengan visi kami.  
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
