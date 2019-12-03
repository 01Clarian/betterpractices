import React, {useEffect} from 'react';
import './collection.styles.scss';
import {selectCollection} from '../../redux/shop/shop.selector'
import {connect} from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component'
import {firestore} from '../../firebase/firebase.utils'

const CollectionPage = ({collection}) => {
   // mimick unmount with hooks
    useEffect(()=>{
        console.log('i am subscibing')
    const unsubscribeFromCollections = firestore.collection('collections').onSnapshot(snapshot => console.log(snapshot))
    return () => {
        console.log('i am unsubscribed')
        unsubscribeFromCollections()
    }
},[])

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
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(MapStateToProps)(CollectionPage)

