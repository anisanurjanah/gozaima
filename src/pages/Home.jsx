import Hero from '@/components/Hero'
import Product from '@/components/Product'
import Steps from '@/components/Steps'
import Testimonials from '@/components/Testimonials'
import CallToAction from '@/components/CTA'
import FrequentlyAskedQuestions from '@/components/FAQ'
import Partner from '@/components/Partner'

export default function Home() {
    return (
        <>
            <Hero />
            <div className="container max-w-screen-xl  mx-auto p-4">
                <Product />
                <Steps />
                <Testimonials />
            </div>
            <CallToAction />
            <div className="container max-w-screen-xl  mx-auto p-4">
                <FrequentlyAskedQuestions />
                <Partner />
            </div>
        </>
    )
}
