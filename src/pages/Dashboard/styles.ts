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

`;

export const Title = styled.h2`
    font-size: 48px;
    color: #3a3a3a;
    max-width: 800px;
    line-height: 56px;

    margin-top: 40px;
`;


export const Form = styled.form`
    margin-top: 40px;
    max-width: 500px;

    // display: flex;

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

    margin-top: 80px;
    max-width: 700px;

    a{
        background: #090a0a;
        border-radius: 5px;
        width: 100%;
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
            width: 64px;
            heigth: 64px;
            border-radius: 50%;
            background: #04d361;
            padding: 20px;
        }

        div{
            margin: 0 16px;
            flex: 1;

            strong{
                font-size: 20px;
                color: #3d3d4d;
            }
            
            p {
                font-size: 18px;
                color: #a8a8b3;
                margin-top: 4px;
            }
        }
    }
`;


