import { useState } from "react"
import { Plus, Minus } from "lucide-react";
import faqs from '@/data/faqs.json'

export default function FrequentlyAskedQuestions() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    return (
        <>
            <section id="faq">
                <div className="section-wrapper">
                    <header>
                        <h2 className="section-title">
                            Frequently Asked Questions
                        </h2>

                        <p className="section-subtitle">
                           Everything you need to know before partnering with us.
                        </p>
                    </header>

                    <hr className="faq-divider" />

                        {
                            faqs.data.map((faq, index) => (
                                <div>
                                    <div key={index} className="faq-item">
                                        <button 
                                            onClick={() => toggleFAQ(index)} 
                                            className="faq-btn"
                                        >
                                            {
                                                openIndex === index ? (
                                                    <Minus className="faq-icon" />
                                                ) : (
                                                    <Plus className="faq-icon" />
                                                )
                                            }
                                            <h1 className="faq-question">{faq.question}</h1>
                                        </button>

                                        {
                                            openIndex === index && (
                                                <div className="faq-answer">
                                                    <span className="faq-answer-border"></span>
                                                    <p className="faq-answer-text">{faq.answer}</p>
                                                </div>
                                            )
                                        }
                                    </div>

                                    <hr className="faq-divider" />
                                </div>
                            ))
                        }
                </div>
            </section>
        </>
    )
}
