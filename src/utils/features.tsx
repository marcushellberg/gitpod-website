import React from 'react'

import Terminal from '../resources/terminal.svg'
import IconPrebuilt from '../resources/icon-prebuilt.svg'
import IconParallel from '../resources/icon-parallel.svg'
import IconLanguage from '../resources/icon-language.svg'
import VSCodeExtensions from '../resources/vscode-extensions.png'
import LinuxTerminal from '../resources/linux-terminal.png'
import PrebuiltWorkspaces from '../resources/prebuilt-workspaces.png'
import ParallelWorkspaces from '../resources/parallel-workspaces.png'
import CodeReview from '../resources/code-review.png'
import SupportedLanguages from '../resources/supported-languages.svg'
import ShareWorkspaces from '../resources/share-workspace.svg'
import CreateASnapshot from '../resources/create-snapshot.svg'
import { Link } from 'gatsby'
import { FeatureCardProps } from '../components/FeatureCard'

export const featuresCardsData = [
    {
        id: 'vs',
        title: "VS Code Extensions",
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            width="53"
            height="53"
            viewBox="0 0 53 53"
            fill="#BCBCBC"
        >
            <g>
                <path d="M39.276 0v44.981L.004 39.148l39.272 13.225 13.093-5.447V5.45L39.276 0z"></path>
                <path d="M25.531 7.663L13.502 19.554 6.259 14.1l-2.985 1 7.368 7.284-7.368 7.284 2.985 1 7.243-5.455 12.029 11.884 7.2-3.061v-23.31l-7.2-3.063zm0 8.485v12.464l-8.276-6.232 8.276-6.232z"></path>
            </g>
            <defs>
                <clipPath id="clip0">
                    <path fill="#fff" d="M0 0H52.373V52.373H0z"></path>
                </clipPath>
            </defs>
        </svg>,
        iconTitle: <span>VS Code<br />Extensions</span>,
    },
    {
        id: 'prebuilt',
        title: "Prebuilt Workspaces",
        icon: IconPrebuilt,
        iconTitle: <span>Prebuilt<br />Workspaces</span>,
    },
    {
        id: 'parallel',
        title: "Parallel Workspaces",
        icon: IconParallel,
        iconTitle: <span>Parallel<br />Workspaces</span>,
        img: <img alt="Parallel Workspaces" src={ParallelWorkspaces} />,
    },
    {
        id: "programming-languages",
        title: "Supports All Programming Languages",
        icon: IconLanguage,
        iconText: <span>Full<br />Automation</span>,
    },
    {
        id: 'linux',
        title: "Linux Terminals",
        icon: Terminal,
        iconText: <span>Linux<br />Terminals</span>
    },
    {
        id: 'share',
        title: "Share Running Workspaces",
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="49"
            fill="#BCBCBC"
            viewBox="0 0 50 49"
        >
            <g clip-path="url(#clip0)">
                <path
                    d="M40.953 31.664a8.43 8.43 0 00-6.126 2.636l-18.01-8.817c.138-.828.14-1.672.005-2.5l17.983-8.721a8.452 8.452 0 10-2.314-5.8c.003.413.037.826.1 1.234l-17.983 8.72a8.46 8.46 0 10-.021 11.627l18.01 8.817a8.456 8.456 0 108.357-7.2l-.001.004z"
                ></path>
            </g>
            <defs>
                <clipPath id="clip0">
                    <path fill="#fff" d="M0 0H49.414V48.587H0z"></path>
                </clipPath>
            </defs>
        </svg>,
        iconText: <span>Share Running<br />Workspaces</span>,
    },
    {
        id: 'snapshot',
        title: "Create Snapshots",
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="42"
            viewBox="0 0 54 42"
            fill="#BCBCBC"
        >
            <g clip-path="url(#clip0)">
                <path d="M49.15 6.555h-8.676l-5.193-5.244s-.026-.026-.039-.026l-.026-.026A4.201 4.201 0 0032.223 0h-10.8a4.251 4.251 0 00-3.162 1.4v.013l-5.077 5.141H4.319A4.268 4.268 0 000 10.822V36.8a4.323 4.323 0 004.319 4.331H49.15a4.33 4.33 0 004.319-4.331V10.822a4.275 4.275 0 00-4.319-4.267zM26.734 34.639a11.9 11.9 0 1111.876-11.9 11.912 11.912 0 01-11.876 11.9zM48.34 13.431a1.812 1.812 0 11-.024-3.624 1.812 1.812 0 01.024 3.624z"></path>
                <path d="M26.734 13.74a9 9 0 108.971 9 8.976 8.976 0 00-8.971-9z"></path>
            </g>
            <defs>
                <clipPath id="clip0">
                    <path fill="#fff" d="M0 0H53.469V41.13H0z"></path>
                </clipPath>
            </defs>
        </svg>,
        iconText: <span>Create<br />Snapshots</span>,
    },
    {
        id: "code-review",
        title: "Code Reviews",
        icon:
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="57"
                height="49"
                viewBox="0 0 57 49"
                fill="#BCBCBC"
            >
                <g clip-path="url(#clip0)">
                    <path

                        d="M53.735 0H2.542C1.257 0 .215 1.356.215 3.028L0 33.847c0 1.673 1.042 3.028 2.327 3.028h31.431L45.768 48.4l-3.089-11.524H53.52c1.285 0 2.327-1.356 2.327-3.028l.215-30.819C56.062 1.356 55.02 0 53.735 0z"
                    ></path>
                    <path
                        className="white"
                        strokeLinecap="round"
                        strokeWidth="2"
                        d="M47.352 11.587H9.029M47.352 18.11H9.029M47.352 24.634H9.029"
                    ></path>
                </g>
                <defs>
                    <clipPath id="clip0">
                        <path d="M0 0H56.062V48.399H0z"></path>
                    </clipPath>
                </defs>
            </svg>,
        iconText: <span>Code<br />Reviews</span>,
    },
    {
        id: 'intelligence',
        title: "",
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="29"
            fill="#9F9F9F"
            viewBox="0 0 44 29"
        >
            <path
                d="M43.238 22.928V0H0v22.928l20.658 6 22.58-6z"
            ></path>
        </svg>,
        iconText: <span>Code <br /> Intelligence</span>
    }
]


export const features: FeatureCardProps[] = [
    {
        src: VSCodeExtensions,
        alt: 'VS Code Extensions',
        title: <>Use Your Favourite<br /><strong>VS Code Extensions</strong></>,
        text: (<>
            <p>Install any VS Code extension or theme via drag and drop and enjoy all the features you're used to.</p>
            <p>More about <a href="/docs/context-urls/">VS Code Extensions.</a>.</p>
        </>)
    },
    {
        src: PrebuiltWorkspaces,
        alt: 'Prebuilt Workspaces',
        title: <>Save Time with <strong>Prebuilt Workspaces</strong></>,
        text: (<>
            <p>Gitpod continuously builds your git branches like a CI server. This means no more waiting for dependencies to be downloaded and builds to finish. Just coding.</p>
            <p><strong>Gitpod is the first IDE that builds your project before you even open it.</strong></p>
            <p>Read more about <Link to="/docs/prebuilds/">Prebuilt Workspaces.</Link></p>
        </>)
    },
    {
        src: PrebuiltWorkspaces,
        alt: 'Parallel Workspaces',
        title: <>Stay Productive, Work<br />on <strong>Parallel Workspaces</strong></>,
        text: (<>
            <p>Don’t postpone work because your current workspace is occupied with your work on the latest features.</p>
            <p>To sneak in a bugfix on a maintenance branch or a code review - just start more workspaces - in parallel.</p>
            <p><strong>Use clean, fresh workspaces for every task.</strong></p>
        </>)
    },
    {
        src: PrebuiltWorkspaces,
        alt: 'Parallel Workspaces',
        title: <>No more Waiting with<br /><strong>Full Automation</strong></>,
        text: (<>
            <p>Skip the friction and get beamed into a fully setup, compiled and tested dev environment with one click.</p>
            <p>More about <Link to="/">Continuous Dev Environments.</Link></p>
        </>),
        buttons: (<>
            <button className="btn">With Gitpod</button>
            <button className="btn btn--grey">Usual Way</button>
        </>)
    },
    {
        src: LinuxTerminal,
        alt: 'Linux Terminals',
        title: <>Just like Your Local IDE Including <strong>Linux Terminals</strong></>,
        text: (<>
            <p>Gitpod instantly starts a machine in the cloud based on a Docker image. Tools that are required for your project or popular are readily installed and configured.</p>
            <p>And still, if you like to do configurations yourself, you can adjust everything to your satisfaction.</p>
            <p>More about <Link to="/docs/config-docker/">Terminals.</Link></p>
        </>)
    },
    {
        src: ShareWorkspaces,
        alt: 'Share Running Workspaces',
        title: <>Better Collaboration with <strong>Shared Running Workspaces</strong></>,
        text: (<>
            <p>Collaborate with your friends, colleagues and clients and hunt down bugs together. </p>
            <p>More about <Link to="/docs/sharing-and-collaboration/">Sharing a Workspace.</Link></p>
        </>)
    },
    {
        src: CreateASnapshot,
        alt: 'Create A Snapshot',
        title: <>Spread Your Work and <strong>Create a Snapshot</strong></>,
        text: (<>
            <p>Create a snapshot of your work and share it with the world.</p>
            <p>Based on your snapshot new workspaces can be created and edited independently.</p>
            <p>More about <Link to="/docs/sharing-and-collaboration/#sharing-snapshots">Sharing a Snapshot.</Link></p>
        </>)
    },
    {
        src: CodeReview,
        alt: 'Code Review',
        title: <>Do <strong>Code Reviews</strong><br />Within the IDE</>,
        text: (<>
            <p>Open pull requests in Gitpod to run, navigate, and review the code from within the IDE. Reply to comments and publish code reviews without switching back to GitHub.</p>
            <p>More about <Link to="/blog/when-code-reviews-lgtm/">Code Reviews.</Link></p>
        </>)
    },
    {
        src: SupportedLanguages,
        alt: 'Supported Programming Languages',
        title: <>Benefit from<br/>Industry-Leading<br/><strong>Code Intelligence</strong></>,
        text: (<>
            <p>Gitpod supports 20+ programming languages out of the box which are continuously improved. If your favourite language is missing: simply find your VS Code language extension via the vendor neutral marketplace of <a href="https://open-vsx.org/" target="_blank">VSX Registry</a> and drag & drop it into Gitpod.</p>
        </>)
    }
]