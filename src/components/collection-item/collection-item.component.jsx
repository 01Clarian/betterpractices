import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux'
import addItem from '../../redux/cart/cart.actions'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

const CollectionItem = ({item, addItem, itemCount}) => {
    const { name, price, imageUrl} = item;
    return (
    <div className="collection-item">
        <div
        className="image"
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        />
            <div className='collection-footer'>

            <span className='name'>{name}</span>
            <span className='price'>Q:{itemCount} </span>

            <span className='price'> {price}$</span>
            </div>
            <CustomButton onClick={()=>addItem(item)} inverted>Level Up</CustomButton>
        </div>
);
    }
const mapDispatchToProps = (dispatch) => ({
addItem: item => dispatch(addItem(item))
})

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);


