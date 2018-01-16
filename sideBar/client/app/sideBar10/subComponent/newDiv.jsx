import styled from 'styled-components'

const Div = styled.div`
    width: 100%;
    transition: margin 0.25s;
    margin-left: ${props => props.position === 'left'?
                             props.open?
                                props.openSize:
                                props.isTablet?
                                    '0px'
                                    : props.notOpenSize
                            : '0px'
    };
    margin-right: ${props => props.position === 'right'?
                             props.open?
                                props.openSize:
                                props.isTablet?
                                    '0px'
                                    : props.notOpenSize
                            : '0px'
    };

    opacity: ${props => props.open && props.isTablet? '0.5': '1'};
    margin-top: ${props => props.topMenuHeight};
    
`;

Div.defaultProps = {
    open: false,
    position: 'left',
    isTablet: false,
    openSize: '230px',
    notOpenSize: '60px',
    topMenuHeight: '50px'
}

export {Div};