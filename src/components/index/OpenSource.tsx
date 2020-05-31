import React from 'react'

import styled from '@emotion/styled'
import OSSBg from '../../resources/section-oss-bg.png'
import { colors, borders } from '../../styles/variables'
import { Link } from 'gatsby'

const Styled = styled.section`
    text-align: center;
    background: url(${OSSBg});
    background-size: cover;

    h2 + p {
        margin: 0;
    }

    .text {
        max-width: 600px;
        margin: auto;
        padding: 12rem 6rem 6rem;
        background: ${colors.white};
        border: ${borders.light};
    }
`

const OpenSource = () => (
    <Styled>
        <div className="row">
            <div className="text">
                <h2><strong>Giving Back to Open-Source!</strong></h2>
                <p>Gitpod is built on open-source and wouldn’t exist without it. We’re happy to give something back by supporting the open-source community with a <Link to="/docs/professional-open-source/">free Open-Source Plan</Link>.</p>
            </div>
        </div>
    </Styled>
)

export default OpenSource
