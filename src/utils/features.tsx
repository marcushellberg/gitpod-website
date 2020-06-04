import React from 'react'

import VSCodeExtensions from '../resources/vscode-extensions.png'
import LinuxTerminal from '../resources/linux-terminal.png'
import PrebuiltWorkspaces from '../resources/prebuilt-workspaces.png'
import ParallelWorkspaces from '../resources/parallel-workspaces.png'
import CodeReview from '../resources/code-review.png'
import SupportedLanguages from '../resources/languages.svg'
import SharedWorkspaces from '../resources/shared-workspaces.png'
import CreateASnapshot from '../resources/workspace-snapshot.png'
import { Link } from 'gatsby'
import { FeatureCardProps } from '../components/FeatureCard'
import FullAutomationGraphics from '../components/features/FullAutomationGraphics'
import FullAutomationButtons from '../components/features/FullAutomationButtons'


export const features: FeatureCardProps[] = [
    {
        id: 'vs',
        src: VSCodeExtensions,
        alt: 'VS Code Extensions',
        title: <>Use Your Favourite<br /><strong>VS Code Extensions</strong></>,
        text: (<>
            <p>Install any VS Code extension or theme via drag and drop and enjoy all the features you're used to.</p>
            <p>More about <a href="/docs/context-urls/">VS Code Extensions.</a>.</p>
        </>)
    },
    {
        id: 'prebuilt',
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
        id: 'parallel',
        src: ParallelWorkspaces,
        alt: 'Parallel Workspaces',
        title: <>Stay Productive, Work<br />on <strong>Parallel Workspaces</strong></>,
        text: (<>
            <p>Don’t postpone work because your current workspace is occupied with your work on the latest features.</p>
            <p>To sneak in a bugfix on a maintenance branch or a code review - just start more workspaces - in parallel.</p>
            <p><strong>Use clean, fresh workspaces for every task.</strong></p>
        </>)
    },
    {
        id: 'automation',
        Graphic: FullAutomationGraphics,
        title: <>No more Waiting with<br /><strong>Full Automation</strong></>,
        text: (<>
            <p>Skip the friction and get beamed into a fully setup, compiled and tested dev environment with one click.</p>
            <p>More about <Link to="/">Continuous Dev Environments.</Link></p>
        </>),
        Buttons: FullAutomationButtons
    },
    {
        id: 'linux',
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
        id: 'share',
        src: SharedWorkspaces,
        alt: 'Share Running Workspaces',
        title: <>Better Collaboration with <strong>Shared Running Workspaces</strong></>,
        text: (<>
            <p>Collaborate with your friends, colleagues and clients and hunt down bugs together. </p>
            <p>More about <Link to="/docs/sharing-and-collaboration/">Sharing a Workspace.</Link></p>
        </>)
    },
    {
        id: 'snapshot',
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
        id: "code-review",
        src: CodeReview,
        alt: 'Code Review',
        title: <>Do <strong>Code Reviews</strong><br />Within the IDE</>,
        text: (<>
            <p>Open pull requests in Gitpod to run, navigate, and review the code from within the IDE. Reply to comments and publish code reviews without switching back to GitHub.</p>
            <p>More about <Link to="/blog/when-code-reviews-lgtm/">Code Reviews.</Link></p>
        </>)
    },
    {
        id: 'intelligence',
        src: SupportedLanguages,
        alt: 'Supported Programming Languages',
        title: <>Benefit from<br />Industry-Leading<br /><strong>Code Intelligence</strong></>,
        text: (<>
            <p>Gitpod supports 20+ programming languages out of the box which are continuously improved. If your favourite language is missing: simply find your VS Code language extension via the vendor neutral marketplace of <a href="https://open-vsx.org/" target="_blank">VSX Registry</a> and drag & drop it into Gitpod.</p>
        </>),
        featuresList: ['Syntax Highlighting', 'Smart Completions', 'Linting & Quick Fixes', 'Code Navigation', 'Debugging', 'Refactoring', 'Security Vulnerability Detection', 'Suggested Optimizations']
    }
]


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
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45.944"
            height="45.945"
            viewBox="0 0 45.944 45.945"
        >
            <path
                stroke="rgba(0,0,0,0)"
                strokeMiterlimit="10"
                strokeWidth="1"
                d="M.5 22.973a22.472 22.472 0 1122.472 22.472A22.5 22.5 0 01.5 22.973zm16.174 9.355s10 .1 13.075.1c2.04 0 4.22 4.97 6.039 4.63s6.609-5.448 6.584-14.089A19.4 19.4 0 109.155 36.575c.841.852 2.267-.572 3.813-2 1.222-1.127 2.52-2.255 3.66-2.255zm2.507-6.4a3.946 3.946 0 016.226-3.219l10.042-5.117a1.554 1.554 0 011.411 2.768l-9.828 5.008a3.946 3.946 0 11-7.852.56zM6.169 19.582c0-.019.009-.038.014-.056l.005-.021v-.023a18.118 18.118 0 011.292-3.41 17.995 17.995 0 0117.156-9.9 18.2 18.2 0 013.6.585c.214.058.431.121.646.186h0l-1.513 4.952a12.68 12.68 0 00-.473-.137 13.09 13.09 0 00-2.583-.421 12.954 12.954 0 00-10.962 4.964 12.8 12.8 0 00-1.355 2.149 13.059 13.059 0 00-.928 2.447z"
                data-name="Vereinigungsmenge 101"
            ></path>
        </svg>,
        iconTitle: <span>Prebuilt<br />Workspaces</span>,
    },
    {
        id: 'parallel',
        title: "Parallel Workspaces",
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48.5"
            height="39.342"
            viewBox="0 0 48.5 39.342"
        >
            <g
                strokeLinecap="round"
                strokeWidth="4"
                data-name="Gruppe 944"
            >
                <path d="M2 2v35.342" data-name="Linie 172"></path>
                <path d="M16.833 2v35.342" data-name="Linie 173"></path>
                <path d="M31.667 2v35.342" data-name="Linie 174"></path>
                <path d="M46.5 2v35.342" data-name="Linie 175"></path>
            </g>
        </svg>,
        iconTitle: <span>Parallel<br />Workspaces</span>,
        img: <img alt="Parallel Workspaces" src={ParallelWorkspaces} />,
    },
    {
        id: "automation",
        title: "Full Automation",
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42.862"
            height="43.975"
            viewBox="0 0 42.862 43.975"
        >
            <g data-name="Gruppe 931">
                <path
                    d="M42.863 25.196a19.722 19.722 0 01-.837 3.592 9.614 9.614 0 01-1.146 2.848c-.442.119-6.61-1.391-6.673-1.406a15.31 15.31 0 01-2.385 2.988l.016.034c.442.95 2.645 5.724 2.645 6.356a.153.153 0 010 .042c-.109.371-3.709 2.423-5.3 3.088-.364.152-.58.212-.642.178-.353-.191-3.713-5.777-3.747-5.834a14.684 14.684 0 01-3.747.383l-.015.045a66.514 66.514 0 01-2.541 6.429 3.937 3.937 0 01-1.713-.248c-1.774-.451-4.61-1.408-4.742-1.754a.441.441 0 01-.016-.141c0-1.05 1.373-6.644 1.387-6.7a15.1 15.1 0 01-2.911-2.448l-.033.017c-.961.469-5.778 2.8-6.238 2.708a10.653 10.653 0 01-1.782-2.791 15.32 15.32 0 01-1.409-3.26.172.172 0 01.006-.047c.145-.493 5.633-3.81 5.688-3.844a15.9 15.9 0 01-.378-3.448v-.4l-.047-.017a67.7 67.7 0 01-6.266-2.6.292.292 0 01-.03-.166c0-1.025 1.52-6.307 1.983-6.456.5-.161 6.613 1.392 6.674 1.408a15.241 15.241 0 012.386-2.985l-.019-.041a65.3 65.3 0 01-2.642-6.371v-.024a4.971 4.971 0 011.454-1.05 21.755 21.755 0 014.493-2.215c.411.126 3.611 5.6 3.747 5.836a14.561 14.561 0 013.747-.381l.007-.024c.331-1.023 2.009-6.144 2.549-6.454.316-.181 1.993.253 3.333.679a11.121 11.121 0 013.123 1.322.545.545 0 01.038.249 55.135 55.135 0 01-1.411 6.6 15.073 15.073 0 012.911 2.447l.024-.013c.95-.472 5.718-2.819 6.249-2.715.577.114 3.159 6.039 3.185 6.1-.24.309-5.463 3.7-5.685 3.841a16.152 16.152 0 01.375 3.451v.4l.033.011c1 .37 6.019 2.232 6.281 2.611a.353.353 0 01.021.17zm-30.351-3.2a8.985 8.985 0 001.724 5.263 8.837 8.837 0 004.612 3.266 8.857 8.857 0 006.792-.673 8.857 8.857 0 004.326-5.277 8.924 8.924 0 00.384-2.586 8.99 8.99 0 00-1.724-5.265 8.838 8.838 0 00-4.612-3.267 8.929 8.929 0 00-11.118 5.954 8.911 8.911 0 00-.388 2.583z"
                    data-name="Ausschluss 22"
                ></path>
            </g>
        </svg>,
        iconText: <span>Full<br />Automation</span>,
    },
    {
        id: 'linux',
        title: "Linux Terminals",
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54.014"
            height="46.297"
            viewBox="0 0 54.014 46.297"
        >
            <path
                d="M50.155 0H3.858A3.858 3.858 0 000 3.858v38.581A3.858 3.858 0 003.858 46.3h46.3a3.858 3.858 0 003.858-3.858V3.858A3.858 3.858 0 0050.155 0zM7.716 27.007l7.716-7.716-7.716-7.716 3.858-3.858 11.574 11.574-11.574 11.574zm30.865 3.858H23.149v-3.858h15.432z"
            ></path>
        </svg>,
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
            width="43.286"
            height="42.99"
            viewBox="0 0 43.286 42.99"
        >
            <g data-name="Gruppe 691">
                <path d="M43.238 6.236V1.151A1.168 1.168 0 0042.085 0H1.153A1.168 1.168 0 000 1.151v5.085z"></path>
                <path
                    d="M23.109 38.949a4.871 4.871 0 01-1.489.192 4.871 4.871 0 01-1.489-.192L0 33.097v3.166a1.7 1.7 0 001.153 1.487l19.361 5.132a5.96 5.96 0 002.258 0l19.361-5.132a1.6 1.6 0 001.153-1.487v-3.166z"
                    data-name="Pfad 599"
                ></path>
                <path
                    d="M43.238 31.082V8.154H0v22.928l20.658 6z"
                    data-name="andy-holmes-rCbdp8VCYhQ-unsplash"
                ></path>
            </g>
        </svg>,
        iconText: <span>Code <br /> Intelligence</span>
    }
]
