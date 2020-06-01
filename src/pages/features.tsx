import React from 'react'

import IndexLayout from '../layouts'
import ScrollToTopButton from '../components/ScrollToTopButton'
import Intro from '../components/features/Intro'
import FeatureCards from '../components/FeatureCards'
import StartFree from '../components/features/StartFree'

import { features } from '../utils/features'


const FeaturesPage: React.SFC<{}> = () => (
    <IndexLayout
        canonical='/features/'
        title="Features"
        description="Learn about Gitpod's collaboration tools, workspace snapshots, supported programming languages, and much more."
    >
        <div className="row">
            <ScrollToTopButton />
            <Intro />
        </div>

        <FeatureCards 
            features={features}
        />

        <StartFree />
    </IndexLayout>
)


export default FeaturesPage
