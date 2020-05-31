import React, { useState } from 'react'

import IndexLayout from '../layouts'
import PricingBoxes from '../components/pricing/PricingBoxes'
import Plans from '../components/pricing/Plans'
import SelfHostedFAQs from '../components/pricing/SelfHostedFAQs'
import MoreInfo from '../components/MoreInfo'
import CloudGrey from '../resources/cloud-grey.svg'
import { Link } from 'gatsby'

const MoreInfoContents = {
    selfHosted: {
        img: <img src={CloudGrey} alt="Self Hosted" />,
        title: <>Gitpod <strong>Self-Hosted</strong></>,
        text: <>
                <h3>Unleash Developer Productivity.</h3>
                Run your own Gitpod and enjoy automated setups, better collaboration, higher code quality and a more streamlined workflow.
              </>,
        links: <>
            <Link to="/docs/self-hosted/latest/self-hosted/" className="btn btn--cta">See Docs</Link>
                <Link to="/enterprise/" className="btn">See Enterprise Solution</Link>
        </>
    }
}

function isSelfHostedRendered() {
    return typeof window !== `undefined` && window.location.hash === '#self-hosted';
}

const PricingPage = () => {

    const [isRendered, setIsRendered] = useState<boolean>(isSelfHostedRendered())

    const changeIsRendered = (bool: boolean) => {
        setIsRendered(bool)
    }

    const contents = isRendered ? MoreInfoContents.selfHosted : {}

    return (
        <IndexLayout
            canonical='/pricing/'
            title="Pricing"
            description="Gitpod is free for Open Source, and offers productive features for you, your team and your business at reasonable prices."
        >
            <PricingBoxes
                isRendered={isRendered}
                changeIsRendered={changeIsRendered}
            />
            <div className="grey-container">
                <div className="row">
                    { isRendered ? <SelfHostedFAQs /> : <Plans /> }
                </div>
            </div>

           <MoreInfo {...contents}/>

        </IndexLayout>
    )
}

export default PricingPage
