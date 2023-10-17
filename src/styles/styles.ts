import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
    @font-face {
        font-family: "Motiva Sans Light";
        src: url("/fonts/Motiva-Sans-Light.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Motiva Sans Bold";
        src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
        font-style: normal;
    }


    body,
    html,
    a {
        font-family: 'Motiva Sans Light', sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #fff;
        overflow-x: hidden;
    }

    a:hover {
        color: #18216d;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #2e186a 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,h7,h8 {
        font-family: 'Motiva Sans Bold', serif;
        color: #18216d;
        font-size: 56px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }
    h7,h8{
        font-size:30px
    }

    p {
        color: #18216d;
        font-size: 21px;        
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #2E186A;

        :hover {
            color: #2e186a;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }
    .ant-card-cover > * {
        display: block;
        width: 70% !important;
        margin: auto !important;
        padding-top: 20px;
    }
    .ant-card-meta-title {
        font-family: "Motiva Sans Bold", serif;
        color: rgb(24, 33, 109);
        font-size: 30px;
        line-height: 1.18;
    }
    .ant-card-meta-description {
        color: rgb(24, 33, 109);
        font-size: 18px;
        line-height: 28px;
        text-align:justify;
    }
    .css-54cnuu{
        margin:auto !important;
        background: var(--chakra-colors-white) !important;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 2px -2px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px, rgba(0, 0, 0, 0.09) 0px 5px 12px 4px !important;
        padding: 20px 30px !important;
        border-radius: 8px !important;
    }

    .ant-carousel {
        text-align:center;
    }

    svg.svg-inline--fa.fa-quote-right{
        float:right;
    }
    svg.svg-inline--fa.fa-quote-left{
        float:left;
    }
    .logo-text{
        margin: 0;
    font-size: 30px;
    font-family: 'Motiva Sans Bold';
    font-variant: all-petite-caps;
    }
    .ant-card-cover img{
        border-radius:50%;
    }
    
`;
