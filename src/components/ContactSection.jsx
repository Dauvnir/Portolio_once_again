import styled from "styled-components"

const Wrapper = styled.section`
    color: ${ ({theme}) => theme.fontColor};

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    div{
        width: 16rem;
        height: 25rem;

        border-radius: 15px;
        background-color: red;
    }
    form{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex-wrap: nowrap;

        width: 16rem;
        height: 25rem;

        margin-block: 1rem;
        padding: 1rem;
        border-radius: 15px;
        gap: 1rem;

        background-color: ${({theme}) => theme.menuColor};
        

        input{
            width: 100%;
            height: 3rem;

            border-radius: 10px;
            border: none;

            padding: .25rem .5rem;

            font-size: 1.125rem;
            font-weight: 600;

            box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.25);

            &:focus{
                outline-color: ${({theme}) => theme.backgroundColor};
                outline-width: 1px;
                outline-style: solid;
            }
            &::placeholder{
                font-size: 1.125rem;
                font-weight: 600;
            }
        }
        textarea{
            width: 100%;
            height: 10rem;

            overflow: scroll;
            resize: none;

            padding: .25rem .5rem;

            font-size: 1.125rem;
            font-weight: 600;

            border-radius: 10px;
            border: none;

            box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.25);
            &:focus{
                outline-color: ${({theme}) => theme.backgroundColor};
                outline-width: 1px;
                outline-style: solid;
            }
            &::placeholder{
                font-size: 1.125rem;
                font-weight: 600;
            }
        }
        button{
            width: auto;
            height: auto;
            
            padding: .25rem .5rem;

            border-radius: 10px;
            border: none;
            outline: none;

            color: ${({theme}) => theme.fontColor};

            background-color: ${({theme}) => theme.backgroundColor};

            span{
                 font-weight: 600;

            }

        }


    }
`
const ContactSection = ({isEngLang}) => {
    return <Wrapper className="section exclude">
        <h3>{isEngLang ? "Find me on" : "Znajdź mnie na"}</h3>
        <h2>{isEngLang ? "Contact" : "Kontakt"}</h2>
        <form>
            <input type="email" placeholder={isEngLang ? "Email address" : "Adres email"} name="email" autoComplete="none" required/>
            <input type="text" placeholder={isEngLang ? "Name and surname" : "Imię i nazwisko"} name="name" autoComplete="none" required/>
            <input type="text" placeholder={isEngLang ? "Title" : "Tytuł"} name="title" autoComplete="none" required/>
            <textarea type="text" placeholder={isEngLang ? "Message" : "Wiadomość"} name="message" autoComplete="none" required/>
            <button type="submit"><span>{isEngLang ? "Send" : "Wyślij"}</span></button>
        </form>
        <div>
            <button>Whats app</button>
            <button>Telegram</button>
            <button>Whatever</button>
        </div>
    </Wrapper>
}


export default ContactSection