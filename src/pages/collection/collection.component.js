import React from 'react';
import './collection.styles.scss';
import {selectCollection} from '../../redux/shop/shop.selector'
import {connect} from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component'

const CollectionPage = ({collection}) => {
    const {title, items} = collection;
    console.log(collection)
    return (
    <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items' >
            {
                items.map(item => <CollectionItem key={item.id}
                item={item}/>)
            }
        </div>
    </div>
)}

//ownprops is the second parameter - gives all of the props we're getting
// on our collection page component
const MapStateToProps = (state, ownProps) => ({
    collection: selectCollection
    (ownProps.match.params.collectionId)(state)
})

export default connect(MapStateToProps)(CollectionPage)

