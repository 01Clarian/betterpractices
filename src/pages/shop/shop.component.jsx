import React from 'react';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import {Route} from 'react-router-dom';
import CollectionsPageContainer from '../collection/collection.container';
import {connect} from 'react-redux'
import {fetchCollectionsStart} from '../../redux/shop/shop.actions'

// ony function is to fetch and pass routes
class ShopPage extends React.Component {

   

    /// build the snapshot of collections pass in the coverter object to snapshot
    componentDidMount() {
        const {fetchCollectionsStart} = this.props
        fetchCollectionsStart()
    }

    render() {
        const {match} = this.props
    return (
    <div className="shop-page">
        <Route exact path={`${match.path}`} 
        component={CollectionsOverviewContainer}/>
        
        <Route path={`${match.path}/:collectionId`} 
        component={CollectionsPageContainer} />
    </div>
)
} 
}


const MapDispatchToProps = dispatch => ({
    fetchCollectionsStart: ()=> dispatch(fetchCollectionsStart())
})

export default connect(null, MapDispatchToProps)(ShopPage); 