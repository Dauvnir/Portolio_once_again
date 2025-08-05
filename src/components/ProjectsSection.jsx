import styled from "styled-components";

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
	color: ${({ theme }) => theme.fontColor};

    

    // 1024px carousel then just disable it

    #track{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;

        width: 100%;
        height: 100%;
        overflow:hidden;

        @media screen  and (min-width: 930px){
            height: auto;
        }
    }
    .block{
        width: 18rem;
        height: 25rem;

        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        color: ${({ theme }) => theme.reverseFontColor};
	    background-color: ${({ theme }) => theme.menuColor};

        border-radius: 15px;
        img{
            width: auto;
            height: 30%;

            /* background-color: pink; */
        }
        h4{
            width: 100%;
            height: auto;
            /* background-color: orange; */
            padding-top: .5rem;

            font-size: 1.5rem !important; // to change
        }
        p{  
            width: 100%;
            height: 40%;
            /* background-color: blue; */

            text-align: left;
            padding: .5rem 1rem;

            overflow: scroll;

            font-size: 1.125rem;
            font-weight: 500;

            flex-grow: 1;
        }
        div{
            width: 100%;
            height: 20%;

            /* background-color: brown; */

            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            button{
                width: 7.5rem;
                height: 3rem;

                padding: .5rem;

                border-radius: 15px;
                border: none;
                cursor: pointer;

                color: ${({ theme }) => theme.fontColor};
	        	background-color: ${({ theme }) => theme.backgroundColor};

                span{
                    white-space: nowrap;
                    font-weight: 700;
                    font-size: 1.25rem; // to change
                }
            }
        }

    }
`

const ProjectsSection = ({isEngLang}) => {
    return <Wrapper className="section exclude">
        <h3>{isEngLang ? "My coding journey" : "Moja kodowa przygoda"}</h3>
        <h2>{isEngLang ? "Projects" : "Projekty"}</h2>
        <div id="track">
            <div className="block">
                <img src="manlaptop.jpg" alt="" />
                <h4>
                    {isEngLang ? 'Online library' : 'Biblioteka online'}
                </h4>
                <p>
                    {
                        isEngLang ? 
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tempor sem. Curabitur in tellus maximus, ornare tortor a, rhoncus ligula. Praesent facilisis tellus augue, vel mollis sapien eleifend eu. Ut congue ac libero et feugiat. Nunc et maximus tellus, non ornare tortor. Integer rutrum dignissim faucibus. Donec nec metus sit amet tortor dignissim pretium ut ut enim. Morbi rhoncus elit tellus, quis sagittis nunc egestas at.'
                        : 
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tempor sem. Curabitur in tellus maximus, ornare tortor a, rhoncus ligula. Praesent facilisis tellus augue, vel mollis sapien eleifend eu. Ut congue ac libero et feugiat. Nunc et maximus tellus, non ornare tortor. Integer rutrum dignissim faucibus. Donec nec metus sit amet tortor dignissim pretium ut ut enim. Morbi rhoncus elit tellus, quis sagittis nunc egestas at.'
                    }
                </p>
                <div>
                    <button><span>{isEngLang ? "Try it" : "Sprawdź"}</span></button>
                    <button><span>GitHub</span></button>
                </div>
            </div>
             <div className="block">
                <img src="manlaptop.jpg" alt="" />
                <h4>
                    {isEngLang ? 'Online library' : 'Biblioteka online'}
                </h4>
                <p>
                    {
                        isEngLang ? 
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tempor sem. Curabitur in tellus maximus, ornare tortor a, rhoncus ligula. Praesent facilisis tellus augue, vel mollis sapien eleifend eu. Ut congue ac libero et feugiat. Nunc et maximus tellus, non ornare tortor. Integer rutrum dignissim faucibus. Donec nec metus sit amet tortor dignissim pretium ut ut enim. Morbi rhoncus elit tellus, quis sagittis nunc egestas at.'
                        : 
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tempor sem. Curabitur in tellus maximus, ornare tortor a, rhoncus ligula. Praesent facilisis tellus augue, vel mollis sapien eleifend eu. Ut congue ac libero et feugiat. Nunc et maximus tellus, non ornare tortor. Integer rutrum dignissim faucibus. Donec nec metus sit amet tortor dignissim pretium ut ut enim. Morbi rhoncus elit tellus, quis sagittis nunc egestas at.'
                    }
                </p>
                <div>
                    <button><span>{isEngLang ? "Try it" : "Sprawdź"}</span></button>
                    <button><span>GitHub</span></button>
                </div>
            </div>
             <div className="block">
                <img src="manlaptop.jpg" alt="" />
                <h4>
                    {isEngLang ? 'Online library' : 'Biblioteka online'}
                </h4>
                <p>
                    {
                        isEngLang ? 
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tempor sem. Curabitur in tellus maximus, ornare tortor a, rhoncus ligula. Praesent facilisis tellus augue, vel mollis sapien eleifend eu. Ut congue ac libero et feugiat. Nunc et maximus tellus, non ornare tortor. Integer rutrum dignissim faucibus. Donec nec metus sit amet tortor dignissim pretium ut ut enim. Morbi rhoncus elit tellus, quis sagittis nunc egestas at.'
                        : 
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tempor sem. Curabitur in tellus maximus, ornare tortor a, rhoncus ligula. Praesent facilisis tellus augue, vel mollis sapien eleifend eu. Ut congue ac libero et feugiat. Nunc et maximus tellus, non ornare tortor. Integer rutrum dignissim faucibus. Donec nec metus sit amet tortor dignissim pretium ut ut enim. Morbi rhoncus elit tellus, quis sagittis nunc egestas at.'
                    }
                </p>
                <div>
                    <button><span>{isEngLang ? "Try it" : "Sprawdź"}</span></button>
                    <button><span>GitHub</span></button>
                </div>
            </div>
        </div>
      
    </Wrapper>
}

export default ProjectsSection;