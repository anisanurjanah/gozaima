import testimonials from '../data/testimonials.json'

export default function Testimonials() {
    return (
        <>
            <section id="testimonials">
                <div className="section-wrapper">
                    <header>
                        <h2 className="section-title">
                            Apa Kata <span className="testimonial-highlight">Klien</span> Kami
                        </h2>

                        <p className="section-subtitle">
                            Pelajari bagaimana klien kami mengembangkan bisnis bersama kami. Bukti nyata, hasil nyata.
                        </p>
                    </header>
                        
                    <div className="testimonials-grid">
                        {
                            testimonials.data.map((testimonial) => (
                                <div 
                                    id={testimonial.id} 
                                    className="testimonial-card"
                                >
                                    <p className="testimonial-text">{testimonial.text}</p>

                                    <div className="testimonial-user">
                                        <img
                                            src={testimonial.avatar}
                                            className="testimonial-avatar"
                                            alt={`Image of ${testimonial.name}`} 
                                        />

                                        <div className="testimonial-info">
                                            <h1 className="testimonial-name">{testimonial.name}</h1>
                                            <span className="testimonial-role">{testimonial.role}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
