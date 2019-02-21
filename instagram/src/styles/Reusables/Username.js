import styled from 'styled-components';

const Username = styled.span`
    margin-left: 10px;
    font-weight: ${props => props.weight ? '900' : '700'};
`;

export default Username;