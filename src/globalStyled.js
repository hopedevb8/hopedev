import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
[data-theme='light'] {
	body{
        .bg-primary{
            background-color:#fff;
        }
        .text-white,.glitch {
            color:#001c44;
        }
        .text-secondary{
            color:#888888
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
            background-color:#fff;
        }
        .green-pink-gradient {
        background: "#7a00cc";
        background: linear-gradient(
            217deg,
            #b85c56 20%,
            #dd31ffcc 75%,
            #de741a 100%
        );
        background: -webkit-linear-gradient(
            217deg,
            #b85c56 20%,
            #dd31ffcc 75%,
            #de741a 100%
        );
        }
        .light#toggle {
            background: #d61313cc;!important;
        }
        .vertical-timeline-element-content .text-white{
            color: #f3f3f3;
        }
        .vertical-timeline::before {
            background:rgb(29, 24, 54);
        }
        .vertical-timeline-element-icon {
            -webkit-box-shadow: 0 0 0 4px #ccc, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05);
            box-shadow: 0 0 0 4px #ccc, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05);
        }
        .project-card.bg-tertiary {
            background-color:#0a0717;
            h3.text-white{
                color:#fff;
            }
        }
        .form-container{
            padding:16px;
            border-radius:16px;
            border: 2px solid rgba(21 ,16, 56 ,1);
            background-color:rgb(164 158 204 / 30%);
        }
        .input.bg-tertiary{
            background-color: rgba(21 ,16, 56 ,1);
            &.text-white{
                color: #fff;
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
    }
}
`;

export default globalStyle;