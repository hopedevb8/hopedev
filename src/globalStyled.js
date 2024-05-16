import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
[data-theme='light'] {
	body{
        .bg-primary{
            background-color:transparent;
        }
        .text-white,.glitch {
            color:#001c44;
        }
        .text-secondary{
            color:#363636
        }
        .NavBar{
            border-bottom: 1px solid #e1e1e1;
        }
        .NavBar__ScrollIndicator {
             background: linear-gradient(
            217deg,
            rgb(245 183 131) 20%,
            #dd31ffcc 75%,
            rgb(255, 0, 0) 100%
        );
        }
        .bg-tertiary {
            background-color:transparent;
        }
        .green-pink-gradient {
        background: transparent;
        }
        .light#toggle {
            background: #d61313cc;!important;
        }
        .vertical-timeline-element-content .text-white{
            color: #1d1836;
        }
        .vertical-timeline-element-content .text-white-100 {
            color: #1d1836;
        }
        .vertical-timeline-element-content{
            background-color:transparent !important;
            color: #1d1836;
            -webkit-box-shadow: 0 3px 0 #1d1836;
             box-shadow: 0 3px 0 #1d1836;
        }
        .vertical-timeline-element-date{
            color: #1d1836;

        }
        .vertical-timeline::before {
            background:rgb(29, 24, 54);
        }
        .vertical-timeline-element-icon {
            -webkit-box-shadow: 0 0 0 4px #ccc, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05);
            box-shadow: 0 0 0 4px #ccc, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05);
        }
        .project-card.bg-tertiary {
            background-color:transparent;
            h3.text-white{
                color:#1d1836;
            }
        }
        .form-container{
            padding:16px;
            border-radius:16px;
            border: 2px solid rgba(21 ,16, 56 ,1);
            background-color:transparent;
        }
        .form-container .input.bg-tertiary.text-white{
            color:#fff;
        }
        .input.bg-tertiary{
            background-color: rgba(21 ,16, 56 ,1);
            &.text-white{
                color: #1d1836;
            }
        }
        .nav-icon{
            filter: grayscale(100%) invert(100%);
        }
        .list-nav{
            .text-white{
                color:#fff
            }
        }
        .sky-canvas.light-theme{
            display: block;
        }
        .star-canvas.dark-theme{
            display: none;
        }
        .black-gradient{
            background: linear-gradient(
                to right,
                #434343,
                #fff
            )
        }
    }
}
[data-theme='dark'] {
    body{
        .star-canvas.dark-theme{
            display: block;
        }
        .sky-canvas.light-theme{
            display: none;
        }
    }
}
`;

export default globalStyle;