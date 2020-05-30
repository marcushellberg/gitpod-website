import React from 'react'

import { Link } from 'gatsby'
import styled from '@emotion/styled'
import PatternLong from '../../resources/pattern-long.png'

const Styled = styled.section`
    h2 + p {
        margin: 0;
    }

    text-align: center;
    background: url(${PatternLong});
    background-size: cover;

    div {
        max-width: 660px;
        margin: auto;
    }
`

const HighlySecure = () => (
    <Styled>
        <div className="row">
            <h2><strong>Highly Secure</strong></h2>
            <p>The safety of your data is crucial for us. Gitpod uses SSL technology to protect your data using both server authentication and strong encryption standards in transit.</p>
            <p>More about <Link to="/">Security</Link>.</p>
        </div>
    </Styled>
)

export default HighlySecure
