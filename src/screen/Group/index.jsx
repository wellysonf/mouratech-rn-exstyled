import {Container, Title, TitleRobo} from './styles'
import { Airplay } from 'phosphor-react-native';
import styled from 'styled-components/native';

export default function Group(){
    return (
        <Container>
            <Airplay />
            <Title>Grupos</Title>
            <TitleRobo>Grupos 2</TitleRobo>
            <Titulo>Teste</Titulo>
        </Container>
    );
}

const Titulo = styled.Text`
    color: ${({theme})=> theme.COLORS.CINZA} ;
`;

