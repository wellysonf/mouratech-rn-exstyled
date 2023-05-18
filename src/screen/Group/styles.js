import styled from "styled-components/native";

export const Container = styled.View`
        flex: 1;
        background-color: ${({theme}) => theme.COLORS.BACK_PRINCIPAL };
        padding: 24px;
        justify-content: center;
        align-items: center;
`;

export const Title = styled.Text`
        color:#ffe;
        font-size: 40px;
`;
export const TitleRobo = styled.Text`
        color:#ffe;
        font-size: 40px;
        font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`;