import styled from 'styled-components';
import {Link} from 'react-router-dom';

// for multiple css to no repeat code


export const HeaderContainer = styled.div`
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;
`

// call the component like a function to access
export const LogoContainer = styled(Link)`
height: 100%;
width: 70px;
padding: 25px;
`

export const OptionsContainer = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
`

// taking in the css frmo styled *needs to be initial
export const OptionLink = styled(Link)`
padding: 10px 15px;
cursor: pointer;
`
