import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html {
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    font-family: Roboto, "游ゴシック体", YuGothic, "Yu Gothic", "Hiragino Sans", "Hiragino Kaku Gothic ProN", Meiryo, Arial, sans-serif;
    font-size: 62.5%;
    line-height: 1.2;
    -webkit-text-size-adjust: 100%;
  }
  
  body, div, span, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  abbr, address, cite, code,
  del, dfn, em, img, ins, kbd, q, samp,
  small, strong, sub, sup, var,
  b, i,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    font-size: 100%;
    vertical-align: baseline;
  }
  
  body {
    font-size: 1.6rem;
    color: '#222';
  }
  
  body.is-locked {
    overflow: hidden;
  }
  
  article, aside, details, figcaption, figure,
  footer, header, main, hgroup, menu, nav, section {
    display: block;
  }
  
  ul, ol {
    list-style: none;
  }
  
  blockquote, q {
    quotes: none;
  }
  
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  
  table {
    border-spacing: 0;
    border-collapse: collapse;
  }
  
  button, input, select, textarea {
    font-family: inherit;
    font-size: 100%;
    color: '#222';
  }
  
  input, select {
    vertical-align: middle;
  }
  
  hr {
    height: 0;
    margin: 0;
    border: 0;
  }
  
  a {
    cursor: pointer;
  }
  
  a, a:link, a:visited {
    font-size: 100%;
    text-decoration: none;
  }
  
  a:hover, a:focus {
    text-decoration: underline;
  }
  
  a, button,
  input[type=button], input[type=submit] {
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  
  strong, b {
    font-weight: 600;
  }
`

export default GlobalStyle
