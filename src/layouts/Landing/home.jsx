import React from 'react'

import { Layout } from '../../components/Landing/layout'
import { Hero } from '../../components/Landing/hero'
import { HeroIllustration } from '../../components//Landing/hero-illustration'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Add your business domain"
        // content="For example. Search for bat if your are interset into that domain."
        illustration={HeroIllustration}
      />
    </Layout>
  )
}
