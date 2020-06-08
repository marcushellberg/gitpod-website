import React from 'react'

import styled from '@emotion/styled'
import { colors, sizes } from '../../styles/variables'

const Styled = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;

    @media(max-width: ${sizes.breakpoints.md}) {
        flex-direction: column;
        max-width: 450px;
        margin:  auto;
    }

    .bar {

        &-wrapper {
            flex: 0 0 38%;
            
            @media(max-width: 960px) {
                flex: 0 0 32%;
                transform: scale(.8);
            }

            @media(max-width: ${sizes.breakpoints.md}) {
                margin-bottom: 3rem;
            }
        }

        &-container {
            position: relative;
            display: inline-block;
            transform: rotate(-45deg);

            &::before {
                content: '';
                position: absolute;
                display: block;
                top: 0;
                left: 0;
                right: 0;
                height: 100%;
                background: url(galaxy-big.jpg);
                background-size: cover;
                z-index: -1;
                border-radius: 50%;
                transform: translateY(-100%);
                opacity: 0;
                transition: all .2s;
            }

            &:hover::before {
                opacity: 1;
                transform: translateY(0);
            }
        }

        display: flex;
        justify-content: center;
        align-items: center;
        height: 260px;
        width: 260px;
        font-size: 5rem;
        border: 35px solid ${colors.offWhite2};
        border-radius: 50%;

        &:hover {
            border-right-color: transparent;
            transition: all .2s;
        }
    }

    .content {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        background: ${colors.white};
        border-radius: 50%;
        transform: scale(1.01);
        transform: rotate(45deg);
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
            <div className="bar-wrapper">
                <div className="bar-container">
                    <div className="bar">
                        <div className="content">
                            <strong>24</strong>%
                    </div>
                    </div>
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
