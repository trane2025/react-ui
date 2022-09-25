import React from 'react';
import styled from "styled-components";

interface ContainerProps {
    children: React.ReactNode
}

export const Container = ({children}: ContainerProps) => {
    return (
        <ContainerStyle>
            {children}
        </ContainerStyle>
    );
};

const ContainerStyle = styled.div`
  margin: 0 auto;
  max-width: 1170px;
  padding: 0 15px;
`;

