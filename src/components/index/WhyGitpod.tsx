import React from 'react'

import styled from '@emotion/styled'
import { sizes } from '../../styles/variables'
import ToolIntegration from '../../resources/tool-integration.svg'
import FullDevEnvironments from '../../resources/full-dev-environments.svg'
import Pattern from '../../resources/pattern-2.png'

const Styled = styled.div`
    /* ------------------------------------------- */
    /* ----- Section Why Gitpod? ----- */
    /* ------------------------------------------- */

    .why-gitpod {
        padding-bottom: 5rem;

        h2 + p {
            margin: 0;
        }

        @media(max-width: ${sizes.breakpoints.sm}) {
            text-align: center;
        }

        &__box {
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

            &-container {
                display: flex;
                flex-direction: column;
                transform: translateY(-5rem);
            }
        }

        &__text {
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

        &__img {
            height: 100%;
            width: 100%;

            &-container {
                min-height: 24rem;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                @media(min-width: 881px) {
                    position: relative;
                    padding: 15rem 0;
                    padding-right: 8rem;
                }

                @media(max-width: 880px) {
                    padding: 6rem 0;
                }

                @media(min-width: 881px) {
                    flex: 0 0 52%;

                    &::before {
                        content: "";
                        position: absolute;
                        right: 0;
                        display: block;
                        width: 55vw;
                        height: 100%;
                        background: url(${Pattern});
                        background-size: cover;
                        background-repeat: repeat;
                        transition: all .2s;
                    }

                    &:hover::before {
                        transform: translateX(5rem);
                    }
                }
            }
        
            @media(max-width: ${sizes.breakpoints.md}) {
                max-height: 42rem;
            }
        }

        img {
            transition: transform 0.7s cubic-bezier(0.55, 0.085, 0.68, 0.53);
        }
    }
`

const WhyGitpod = () => (
    <Styled>
        <section className="why-gitpod">
            <div className="why-gitpod__box-container">
                <div className="why-gitpod__box why-gitpod__box--3 row">
                    <div className="why-gitpod__img-container">
                        <img
                            alt="Tools Integration"
                            src={ToolIntegration}
                            className="why-gitpod__img"
                            style={{ transform: 'scale(.8)' }}
                        />
                    </div>
                    <div className="why-gitpod__text">
                        <h2>Stay in the Flow -<br /><strong>GitLab, GitHub & Bitbucket Integration</strong></h2>
                        <p>Start your workflow from your Git hosting platform and let Gitpod beam you in a ready-to-code dev environment.</p>
                        <p>Whether you want to fix a bug, add a feature or do a code review, Gitpod get's you started immediately.</p>
                        <p>More about <a href="/docs/context-urls/">context URLs</a>.</p>
                    </div>
                </div>

                <div className="why-gitpod__box why-gitpod__box--3 row">
                    <div className="why-gitpod__img-container">
                        <img
                            alt="Tools Integration"
                            src={ToolIntegration}
                            className="why-gitpod__img"
                            style={{ transform: 'scale(.8)' }}
                        />
                    </div>
                    <div className="why-gitpod__text">
                        <h2>Save Resources -<br/><strong>Use your Chromebook or Tablet</strong></h2>
                        <p>No more need for expensive high-end notebooks, with Gitpod coding gets accessible for everyone.</p>
                        <p>It works just as smoothly on a Chromebook as on a high-end notebook. You can even code on the go with a tablet.</p>
                    </div>
                </div>

                <div className="why-gitpod__box why-gitpod__box--2 row">
                    <div className="why-gitpod__img-container">
                        <object tabIndex={-1}
                            aria-label="Theia - VS Code based online IDE"
                            data={FullDevEnvironments}
                            className="why-gitpod__img why-gitpod__img--full-dev-env" />
                    </div>
                    <div className="why-gitpod__text">
                        <h2>Code Like Usual -<br/><strong>Based on the Online IDE Theia</strong></h2>
                        <p>Gitpod is just like your local IDE.</p>
                        <p>It includes fully-functional Linux terminals, you can install any VS Code extensions and it provides all good features of Theia, the vendor neutral and highly extensible VS Code alternative.</p>
                        <p>Read more about <a href="/docs/ide/">Theia</a>.</p>
                    </div>
                </div>

            </div>
        </section>
    </Styled>
)

export default WhyGitpod
