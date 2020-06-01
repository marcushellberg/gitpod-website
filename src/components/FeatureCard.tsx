import React from 'react'

import styled from '@emotion/styled'
import { sizes } from '../styles/variables'
import Pattern from '../resources/pattern-2.png'

const Styled = styled.div<{direction?: string}>`
    h2 + p {
        margin: 0;
    }

    @media(max-width: ${sizes.breakpoints.sm}) {
        text-align: center;
    }

    display: flex;
    justify-content: space-between;
            
    &:not(:last-child) {
        margin-bottom: 10rem;
    }
    
    @media(min-width: 881px) {
        margin: 15rem auto;
    }

    @media(max-width: 880px) {
        flex-direction: column;
        max-width: 700px;
    }

    &:nth-of-type(2n) {
        @media(min-width: 880px) {
            flex-direction: row-reverse;
        }

        @media(min-width: 881px) {
            .why-gitpod__img-container {
                padding-left: 8rem;
                &::before {
                    left: 0;
                }

                &:hover::before {
                    transform: translateX(-5rem);
                }
            }
        }
    }

    .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-width: 28rem;

        @media(min-width:  881px) {
            flex: 0 0 38%;
        }

        @media(max-width: 1150px) {
            padding: 0 4rem;
        }

        @media(max-width: ${sizes.breakpoints.md}) {
            padding: 0 2rem;
        }

        @media(max-width: ${sizes.breakpoints.sm}) {
            padding: 0 1rem;
        }
    }

    img {
        height: 100%;
        width: 100%;
    }

    .img-container {
        min-height: 24rem;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;

        @media(min-width: 881px) {
            position: relative;
            padding: 15rem 0;
            padding-right: ${({direction}) => (direction === 'right') ? '8rem' : ''};
            padding-left: ${({direction}) => !(direction === 'right') ? '8rem' : ''};
        }

        @media(max-width: 880px) {
            padding: 6rem 0;
        }

        @media(min-width: 881px) {
            flex: 0 0 52%;

            &::before {
                content: "";
                position: absolute;
                right: ${({direction}) => !(direction === 'right') ? '' : 0};
                left: ${({direction}) => (direction === 'right') ? '' : 0};
                display: block;
                width: 55vw;
                height: 100%;
                background: url(${Pattern});
                background-size: cover;
                background-repeat: repeat;
                transition: all .2s;
            }

            &:hover::before {
                transform: ${({direction}) => direction === 'right' ? 'translateX(5rem)' : 'translateX(-5rem)'};
            }
        }
    }
`

export interface FeatureCardProps {
    src: string
    alt: string
    title: string | JSX.Element
    text: string | JSX.Element,
    direction?: string
}

const FeatureCard = ({ src, alt, title, text, direction }: FeatureCardProps) => (
    <Styled className="row" direction={direction}>
        <div className="img-container">
            <img 
                src={src}
                alt={alt}
            />
        </div>
        <div className="text">
            <h2>{title}</h2>
            {text}
        </div>
    </Styled>
)

export default FeatureCard
