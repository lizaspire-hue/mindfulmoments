import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Why } from '@/components/why'
import { Offerings } from '@/components/offerings'
import { Gallery } from '@/components/gallery'
import { Schedule } from '@/components/schedule'
import { Membership } from '@/components/membership'
import { Coaching } from '@/components/coaching'
import { Massage } from '@/components/massage'
import { About } from '@/components/about'
import { Retreats } from '@/components/retreats'
import { Testimonials } from '@/components/testimonials'
import { QuoteBand } from '@/components/quote-band'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <Hero />
        <Why />
        <Offerings />
        <Gallery />
        <Schedule />
        <Membership />
        <Coaching />
        <Massage />
        <About />
        <Retreats />
        <Testimonials />
        <QuoteBand />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
