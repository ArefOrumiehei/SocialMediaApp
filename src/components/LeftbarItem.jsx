import PropTypes from 'prop-types'
import { styled } from 'styled-components';

const Item = styled.div `
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all .3s ease-out;
    border-radius: 5px;
    padding: 5px;
`

const LeftbarItem = ({icon , title}) => {
    return (
        <Item className='item'>
            <span className='icon'>{icon}</span>
            <span className='title'>{title}</span>
        </Item>
    );
};

LeftbarItem.propTypes = {
    icon : PropTypes.any,
    title : PropTypes.string
}

export default LeftbarItem;