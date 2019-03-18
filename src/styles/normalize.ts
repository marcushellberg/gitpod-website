import { dimensions, fonts, colors, breakpoints } from './variables'
import { getEmSize } from './mixins'

export default `
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: ${dimensions.fontSize.regular}px !important;
    line-height: ${dimensions.lineHeight.regular} !important;
  }

  body {
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    font-family: ${fonts.sansSerif};
    color: ${colors.fontColor1};
    background-color: ${colors.background1};
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    padding: 0;
  }

  a {
    color: ${colors.brand};
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
      color: ${colors.brand};
    }
  }
  a.anchor svg {
      fill: ${colors.fontColor1};
  }

  img {
    max-width: 100%;
    object-fit: contain;
    position: relative;
  }

  figure {
    margin: 2rem 0;
  }

  figcaption {
    font-size: 80%;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 1.414rem;
    margin-bottom: 1.5rem;
    color: ${colors.fontColor1};
    font-weight: 400;
    line-height: ${dimensions.lineHeight.heading};
    text-rendering: optimizeLegibility;
  }

  h1 {
    margin-top: 0;
    font-size: ${dimensions.headingSizes.h1}rem;
  }

  h2 {
    font-size: ${dimensions.headingSizes.h2}rem;
    font-weight: 400;
  }

  h3 {
    font-size: ${dimensions.headingSizes.h3}rem;
  }

  h4, h5, h6 {
    font-size: ${dimensions.headingSizes.h4}rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  strong {
    color: #fff;
    font-weight: 600;
  }

  ul,
  ol,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  dt {
    font-weight: bold;
  }

  dd {
    margin-bottom: .5rem;
  }

  hr {
    position: relative;
    margin: 1.5rem 0;
    border: 0;
    border-top: 1px solid ${colors.ui.light};
  }

  button {
    margin: 10px 0px;
    padding: 8px 14px;
    border-radius: 2px;
    border: 1px solid ${colors.brand};
    background-color: var(--background1);
    cursor: pointer;
    &.primary {
      border-color: ${colors.brand};
      color: ${colors.brand};
      box-shadow: 0px 0px 1px ${colors.brand};
      &:hover {
        box-shadow: inset 0px 0px 3px ${colors.brand}, 0px 0px 3px ${colors.brand};
      }
    }
    &.secondary {
      border-color: ${colors.fontColor1};
      color: ${colors.fontColor1};
      &:hover {
        box-shadow: inset 0px 0px 3px ${colors.fontColor1}, 0px 0px 3px ${colors.fontColor1};
      }
    }
  }





  blockquote {
    margin: .8rem 0;
    padding: .5rem 1rem;
    border-left: .25rem solid ${colors.brand};
    color: ${colors.fontColor1};
    background-color: ${colors.background2};

    p {
      &:last-child {
        margin-bottom: 0;
      }
    }

    @media (min-width: ${getEmSize(breakpoints.md)}em) {
      padding-right: 5rem;
      padding-left: 1.25rem;
    }
  }

  table {
    width: 100%;
    margin-bottom: 1rem;
    border-collapse: collapse;
  }

  td,
  th {
    padding: .25rem .5rem;
  }

  th {
    text-align: left;
  }

  thead {
    font-size: 1.2em;
  }

  tbody {
    tr {
        border-top-style: solid;
        border-top-width: 1px;
        border-top-color: ${colors.background2};
    }
    td {
        padding-left: 20px;
    }
  }

  .glow {
    color: ${colors.brand}
  }

  .button-like:hover {
      filter: drop-shadow( 0 0 1px ${colors.fontColor1});
  }

  @-webkit-keyframes glow {
    from {
        text-shadow: 0 0 0px ${colors.fontColor1};
    }

    to {
        text-shadow: 0 0px 2px #fff;
    }
  }

  .gatsby-highlight {
      font-size: 12px;
  }

  .stargraph {
      @media (max-width: ${getEmSize(breakpoints.md)}em) {
          display: none;
      }
  }

  .draggable {
      cursor: move;
  }

  .article {

      @media (min-width: ${getEmSize(breakpoints.sm)}em) {
          max-width: 80%;
          margin-left: 10%;
      }

      h1 {
          font-size: 3em;
      }
      h2, h3, h4, h5, h6 {
        text-transform: none;
        margin-top: 60px;
        margin-bottom: 10px;
      }

      img {
          margin: 20px 0px;
      }

      p {
          margin-bottom: 30px;
      }

      li p {
          margin-bottom: 10px;
      }

      table {
        width: 100%;
        margin-bottom: 1rem;
        border: 1px solid ${colors.fontColor2};
        font-size: 85%;
        border-collapse: collapse;
    }

    td,
    th {
        padding: .25rem .5rem;
    }

    th {
        text-align: left;
    }

    thead {
        border: 1px solid ${colors.fontColor2};
    }

    tbody {
        tr {
        &:nth-of-type(odd) {
            td {
            background-color: ${colors.ui.whisper};
            }
            tr {
            background-color: ${colors.ui.whisper};
            }
        }
        }
    }
  }
`