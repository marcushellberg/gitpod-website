import React from 'react'

import styled from '@emotion/styled'
import { colors, sizes } from '../../styles/variables'

const Styled = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 900px;

    @media(max-width: ${sizes.breakpoints.md}) {
        flex-direction: column;
        max-width: 450px;
        margin:  auto;
    }

    .bar {
        &-container {
            flex: 0 0 38%;

            @media(max-width: 960px) {
                flex: 0 0 32%;
                transform: scale(.8);
            }

            @media(max-width: ${sizes.breakpoints.md}) {
                margin-bottom: 3rem;
            }
        }

        display: flex;
        justify-content: center;
        align-items: center;
        height: 260px;
        width: 260px;
        font-size: 5rem;
        border: 35px solid ${colors.offWhite2};
        border-radius: 50%
    }

    .text {
        flex: 1;
    }

    h2 + p {
        margin: 0;
        margin-top: 4rem;
    }
`

const Tagline = () => (
    <div className="row">
        <Styled>
            <div className="bar-container">
                <div className="bar">
                    <strong>24</strong>%
            </div>
            </div>
            <div className="text">
                <h2><strong>Increase your productivity up to 24%</strong> with prebuilts & automated dev environments.</h2>
                <p>No more waiting for tests and builds to complete, No more tedious environment management to maintain.</p>
            </div>
        </Styled>
    </div>
)

export default Tagline
