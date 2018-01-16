import styled from 'styled-components'

const UpMenu = styled.div`
    background-color: ${props => props.color};
    height: ${props => props.height};
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    border-bottom: 1px solid;
`

UpMenu.defaultProps = {
    color: 'white',
    height: '50px',
}

export {UpMenu}