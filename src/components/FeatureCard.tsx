import React, { useRef, useEffect, useState } from 'react'

import styled from '@emotion/styled'
import { sizes } from '../styles/variables'
import Pattern from '../resources/pattern-2.png'
import IconTick from '../resources/icon-tick.svg'

const Styled = styled.div<{ direction?: string, flexDirectionColumnForImgContainer?: boolean }>`
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
        margin: 18rem auto;
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
        width: 100%;
        max-height: 440px;
    }

    .img-container {
        display: flex;
        flex-direction: ${
    ({ flexDirectionColumnForImgContainer }) =>
        flexDirectionColumnForImgContainer ? 'column' : ''
    };
        justify-content: center;
        align-items: ${
    ({ flexDirectionColumnForImgContainer }) =>
        flexDirectionColumnForImgContainer ? '' : 'center'
    };;
        width: 100%;
        
        @media(min-width: 881px) {
            position: relative;
            padding-right: ${({ direction }) => (direction === 'right') ? '8rem' : ''};
            padding-left: ${({ direction }) => !(direction === 'right') ? '8rem' : ''};
            min-height: 520px;
            max-height: 500px;
            flex: 0 0 52%;

            &::before {
                content: "";
                position: absolute;
                right: ${({ direction }) => !(direction === 'right') ? '' : 0};
                left: ${({ direction }) => (direction === 'right') ? '' : 0};
                display: block;
                width: 55vw;
                height: 100%;
                background: url(${Pattern});
                background-size: cover;
                background-repeat: repeat;
                z-index: -1;
            }
        }

        @media(max-width: 880px) {
            margin-bottom: 5rem;
        }
    }

    @keyframes slideInLeft {
        100% {
            transform: translateX(5rem);
        }
    }

    @keyframes slideInRight {
        100% {
            transform: translateX(-5rem)
        }
    }

    .in-view::before {
        animation: ${({ direction }) => direction === 'right' ? 'slideInLeft' : 'slideInRight'} 0.6s cubic-bezier(0.16, 1, 0.3, 1) 1 normal forwards;
    }

    .buttons {
        margin-top: 6rem;
    }

    @media(min-width: 881px) {
        .btn {
            margin-bottom: 2rem;
        }
    }

    ul {
        margin-top: 5rem;
        font-size: 1.9rem;
    }

    li {
        display: flex;
        &::before {
            content: url(${IconTick});
            transform: scale(1.4);
            display: block;
            margin: 0 2rem 0 1rem;
            left: -.5rem;
        }
    }
`

export interface FeatureCardProps {
    src?: string
    alt?: string
    Graphic?: any
    title: string | JSX.Element
    text: string | JSX.Element
    direction?: string
    id?: string
    featuresList?: string[],
    Buttons?: any
}

const FeatureCard = ({ src, alt, Graphic, title, text, direction, id, featuresList, Buttons }: FeatureCardProps) => {
    const imageContainerRef = useRef<HTMLDivElement>(null)
    const [imageContainerClassList, setImageContainerClassList] = useState<string>('img-container')
    const [renderedGraphic, setRenderedGraphic] = useState<string>('')

    const isInView = () => {
        if (imageContainerRef.current) {
            const rect = imageContainerRef.current.getBoundingClientRect()
            return rect.top >= 0 && rect.bottom <= window.innerHeight
        }
        return false
    }

    const addInViewClass = () => {
        if(isInView()) {
            setImageContainerClassList('img-container in-view')
        }
    }

    const scrollHandler = () => {
        addInViewClass()
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)
        addInViewClass()
        return (() => {
            window.removeEventListener('scroll', scrollHandler)
        })
    })

    return (
        <Styled className="row" direction={direction} id={id} flexDirectionColumnForImgContainer={featuresList && featuresList.length ? true : false}>
            <div
                className={imageContainerClassList}
                ref={imageContainerRef}
            >
                {Graphic ? <Graphic 
                    renderedGraphic={renderedGraphic}
                /> : null}
                {src ? <img
                    src={src}
                    alt={alt}
                    style={ featuresList && featuresList.length ? { transform: 'scale(.9)' } : {}}
                /> : null}
                {featuresList && featuresList.length ? (<ul>
                    {featuresList.map(
                        (feat, i) => <li key={i + feat}>{feat}</li>
                    )}
                </ul>) : null}
            </div>
            <div className="text">
                <h2>{title}</h2>
                {text}
                { Buttons ? <Buttons 
                    setRenderedGraphic={setRenderedGraphic}
                /> : null}
            </div>
        </Styled>
    )
}

export default FeatureCard
