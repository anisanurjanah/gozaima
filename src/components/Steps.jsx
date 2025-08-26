import * as LucideIcons from 'lucide-react'
import steps from '@/data/steps.json'

export default function Steps() {
    return (
        <>
            <section id="steps">
                <div className="section-wrapper">
                    <header>
                        <h2 className="section-title">
                            How It Works
                        </h2>

                        <p className="section-subtitle">
                            Discover a simple step-by-step process designed to make your experience 
                            effortless, fast, and enjoyable.
                        </p>
                    </header>

                    <div className="steps-grid">
                        {
                            steps.data.map((step) => {
                                const Icon = LucideIcons[step.icon];

                                return (
                                    <div 
                                        key={step.id} 
                                        className="steps-card"
                                    >
                                        <span className="steps-icon">
                                            {Icon && <Icon className="w-6 h-6" />}
                                        </span>
                                        <h1 className="steps-heading">{step.title}</h1>
                                        <p className="steps-text">{step.description}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
