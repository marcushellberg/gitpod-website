import React from 'react'

import { Link } from 'gatsby'
import ReadyToCodeImg from '../resources/automated-setup-default.png'
import AutomatedSetupGraphicGitpod from '../resources/automated-setup-gitpod.png'
import AutomatedSetupGraphicOrdinary from '../resources/automated-setup-ordinary.png'

class ReadyToCode extends React.Component {
    state = {
        isGraphicGitpodRendered: false,
        isGraphicOridinaryRendered: false,
        isDefaultRendered: true
    }

    handleClick = (val: string) => {
        if (val === 'gitpod') {
            this.setState({
                isGraphicGitpodRendered: true,
                isGraphicOridinaryRendered: false,
                isDefaultRendered: false
            })
        }
        else if (val === 'ordinary') {
            this.setState({
                isGraphicGitpodRendered: false,
                isGraphicOridinaryRendered: true,
                isDefaultRendered: false
            })
        }
        else {
            this.setState({
                isGraphicGitpodRendered: false,
                isGraphicOridinaryRendered: false,
                isDefaultRendered: true
            })
        }
    }

    render() {
        const { isDefaultRendered, isGraphicGitpodRendered, isGraphicOridinaryRendered } = this.state

        const graphicGitpodStyles: React.CSSProperties = {
            display: isGraphicGitpodRendered ? 'block' : 'none'
        }

        const graphicOridnaryStyles: React.CSSProperties = {
            display: isGraphicOridinaryRendered ? 'block' : 'none'
        }

        const defaultStyles: React.CSSProperties = {
            display: isDefaultRendered ? 'block' : 'none'
        }

        return (
            <div className="why-gitpod__box why-gitpod__box--1 row">
                <div className="why-gitpod__img-container why-gitpod__img-container--1">
                    <div style={{ display: 'flex', width: '90%', height: '100%', justifyContent: 'center' }}>

                        <img
                            src={AutomatedSetupGraphicOrdinary}
                            alt="Ordinary setup wihtout Gitpod."
                            style={{ ...graphicOridnaryStyles, width: '100%' }}
                            className="why-gitpod__img why-gitpod__img--1 rtc_ordinary"
                        />
                        <img
                            src={ReadyToCodeImg}
                            alt="Graphic that visualizes setups both with and without Gitpod."
                            style={defaultStyles}
                            className="why-gitpod__img why-gitpod__img--1 rtc_default"
                        />
                        <img
                            src={AutomatedSetupGraphicGitpod}
                            alt="Automated setup with Gitpod."
                            style={graphicGitpodStyles}
                            className="why-gitpod__img why-gitpod__img--1 rtc_gitpod"
                        />
                    </div>
                </div>

                <div className="why-gitpod__text">
                    <h3>Automated Dev Environments</h3>
                    <p>Gitpod is to your traditional local dev environment what Netflix is to a dusty shelf of DVDs.</p>
                    <p>Skip the friction and get beamed into a fully <strong>setup, compiled and tested dev environment</strong> with one click.</p>
                    <p>Read more about <Link to="/blog/continuous-dev-environment-in-devops/">Continuous Dev Environments.</Link></p>
                    <div className="buttons">
                        <button
                            className="toggle toggle--active"
                            onClick={() => this.handleClick('gitpod')}
                            onMouseEnter={() => this.handleClick('gitpod')}
                            onMouseLeave={() => this.handleClick('')}
                        >
                            With Gitpod
                        </button>
                        <button
                            className="toggle"
                            onClick={() => this.handleClick('ordinary')}
                            onMouseEnter={() => this.handleClick('ordinary')}
                            onMouseLeave={() => this.handleClick('')}
                        >
                            Ordinary Way
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReadyToCode

/* 
.toggle {
    display: inline-block;
    padding: 1rem 3rem;
    font-weight: 600;
    color: ${colors.textLight};
    background: ${colors.offWhite2};
    border: none;

    @media(max-width: 1240px) {
        font-size: 1.4rem;
        padding: .8rem 1rem;
    }

    &--active {
        color: ${colors.white};
        background: url("https://www.gitpod.io/galaxy.jpg");
        background-size: cover;
        background-position: top;
    }
}

&--1 {

                transform: translateY(-.8rem);

                @media(min-width: 880px) {
                    height: auto;
                }

                @media(max-width: 800px) {
                    transform: none;
                    margin-bottom: 3rem;
                }
                
                @media(min-width: 800px) {
                    height: 440px;
                }

                @media(max-width: 700px) {
                    height: 500px;
                    margin-bottom: -7rem;
                }

                @media(max-width: 560px) {
                    height: 33rem;
                    margin-bottom: 0;
                }

                @media(max-height: 500px) {
                    height: 29rem;
                }

                @media(max-width: ${sizes.breakpoints.sm}) {
                    height: 25rem;
                }
            }

            &--full-dev-env {
                transform: translate(-2rem);

                @media(max-width: 530px) {
                    transform: translate(-1.3rem);
                }
            }

            &--3 {
                @media(min-width: ${sizes.breakpoints.lg}) {
                    transform: translateY(13.5rem) scale(.93) translateX(-2rem);
                }

                @media(min-width: ${sizes.breakpoints.md}) {
                    transform: translateY(13.5rem) scale(0.93) translateX(-2rem);
                }

                @media(max-width: ${sizes.breakpoints.md}) {
                    transform: translateY(10rem);
                }

                @media(max-width: ${sizes.breakpoints.sm}) {
                    transform: translateY(6rem);
                }
            }
*/
