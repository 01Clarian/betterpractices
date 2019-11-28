import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import {connect} from 'react-redux'
import {firestore, covertCollectionsSnapShotToMap} from '../../firebase/firebase.utils'
import {updateCollections} from '../../redux/shop/shop.actions'
import withSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage)

class ShopPage extends React.Component {

    state = {
        loading: true
    }

    unSubscribeFromSnapShot = null;

    /// build the snapshot of collections pass in the coverter object to snapshot
    componentDidMount() {
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');
fetch('https://firestore.googleapis.com/v1/projects/bp-db-7fbdb/databases/(default)/documents/collections')
.then(res => res.json())
.then(collections => console.log(collections))
    collectionRef.get().then(snapShot => {
        const collectionsMap =  covertCollectionsSnapShotToMap(snapShot)
            updateCollections(collectionsMap)
            this.setState({loading: false})
        })
    }

    render() {
        const {match} = this.props
        const {loading} = this.state
    return (
    <div className="shop-page">
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
    </div>
)
} 
}

const MapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, MapDispatchToProps)(ShopPage); 