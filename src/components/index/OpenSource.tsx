import React from 'react'

import styled from '@emotion/styled'
import OSSBg from '../../resources/section-oss-bg.png'

const Styled = styled.section`
    background: url(${OSSBg});
    background-size: cover;

    h2 + p {
        margin: 0;
    }

    div {
        max-width: 660px;
    }
`

const OpenSource = () => (
    <Styled>
        <div className="row">
            <div>
                <h2>Giving Back to Open-Source!</h2>
                <p>Gitpod is built on open-source and wouldn’t exist without it. We’re happy to give something back by supporting the open-source community with a free Open-Source Plan.</p>
            </div>
        </div>
    </Styled>
)

export default OpenSource
