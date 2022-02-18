import React, { useState, FormEvent } from 'react';
import api from '../../services/api'

import { Container, Title, Form , Personagens, CenterDiv} from './styles';

interface Disney {
    films: string;
    name: string;
    imageUrl: string;

}

const Dashboard: React.FC = () => {

    const[newPersonagem, setPersonagem] = useState('');
    const[perfis, setFilme] = useState<Disney[]>([]);
    

    const pesquisarpngm = async (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        try {
            const response = await api.get(`${newPersonagem}`);
            const personagemdados = response.data;

            setFilme([...perfis, personagemdados])
        } catch (error) {
            
        }
       
    };

    return (
        <Container>
            {/* <Title>Pesquise seus filmes favoritos</Title> */}
            <CenterDiv>
            <Form onSubmit={pesquisarpngm}>
                <input
                    type="text"
                    placeholder="Digite o filme" 
                    onChange={e => setPersonagem(e.target.value)}
                    />
                <button type="submit">Pesquisar</button>
            </Form>
            </CenterDiv>
            <Personagens>

                {perfis.map(perfil => (
                    <a href="#">
                        <p className='uf'>{perfil.name}</p>
                        <div>
                            <strong>{perfil.films}</strong>
                            <img src={perfil.imageUrl} alt="" />
                        </div>
                    </a>
                ))}
            </Personagens>
        </Container>
    );
};

export default Dashboard;