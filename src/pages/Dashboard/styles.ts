import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    width: 80%;
    margin: auto;

`;

export const CenterDiv = styled.div`

    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

`;

export const Title = styled.img`

        heigth: 100px;
        width: 300px;
        margin: auto;

`;


export const Form = styled.form`

    text-align: center;
    margin-top: 40px;
    // max-width: 500px;

    input {
        flex: 1;
        height: 50px;
        padding: 0 24px;
        border: 2px solid #fff;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
        border-right: 0;

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 180px;
        height: 50px;
        background: #315794;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #fff;
        font-weight: bold;

        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, "#395480")};
        }
    }
`;

export const Personagens = styled.div`


    margin-left: -200px;
    margin-top: 80px;
    max-width: 600px;

    a{
        background: #385d8a;
        border-radius: 0 70px 0 70px;
        width: 70%;
        display: block;
        padding: 24px;
        text-decoration: none;

        display: flex;
        align-items: center;


        transition: transform 0.2s;
        
        &:hover{
            transform: translate(10px);
        }

        & + a{
            margin-top: 16px;

        }

        .uf{
            font-size: 25px;
            padding: 8px;
            font-family: 'Patua One', cursive;
            color: #070a52;
            width: 150px;
            heigth: 100px;
            // border-radius: 10%;
            background: #385d8a;
        }

        div{
            margin: 0 16px;
            flex: 1;

            // strong{
            //     font-family: 'Patua One', cursive;
            //     font-size: 15px;
            //     font-weigth: 5px;
            //     color: #8068a1;
            // }

        img{
            max-width: 130px;
            max-heigth: 70px;
            border-radius: 30%;
            padding: 5px;
            margin-left: 100px;
            }


            p {
                font-family: 'Patua One', cursive;
                font-size: 18px;
                color: #a8a8b3;
                margin-top: 4px;
            }
        }
    }
`;


