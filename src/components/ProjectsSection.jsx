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
        display: inline-flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 1rem;

        width: max-content;
        height: 30rem; // same like a block
    }
    .block{
        width: 20rem;
        height: 30rem;

        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        color: ${({ theme }) => theme.reverseFontColor};
	    background-color: ${({ theme }) => theme.menuColor};
        img{
            width: 100%;
            height: 30%;

            background-color: pink;
        }
        h4{
            width: 100%;
            height: 10%;
            background-color: orange;

        }
        p{  
            width: 100%;
            height: 40%;
            background-color: blue;

            text-align: left;
            padding: .5rem;
        }
        div{
            width: 100%;
            height: 20%;

            background-color: brown;

            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            button{
                width: auto;
                height: auto;

                padding: .5rem;

                border-radius: 15px;
                border: none;
                cursor: pointer;

                color: ${({ theme }) => theme.fontColor};
	        	background-color: ${({ theme }) => theme.backgroundColor};

                span{
                    font-weight: 600;
                }
            }
        }

    }
`

const ProjectsSection = ({isEngLang}) => {
    return <Wrapper className="section">
        <h3>Project list</h3>
        <h2>Project list</h2>
        <div id="track">
            <div className="block">
                <img src="" alt="" />
                <h4>
                    {isEngLang ? 'Company landing page' : 'Strona firmowa'}
                </h4>
                <p>
                    {
                        isEngLang ? 'This is description of my project' : 'To jest opis mojego projektu'
                    }
                </p>
                <div>
                    <button><span>Live demo</span></button>
                    <button><span>Source Code</span></button>
                </div>
            </div>
            {/* <div className="block"></div>
            <div className="block"></div> */}
        </div>
      
    </Wrapper>
}

export default ProjectsSection;