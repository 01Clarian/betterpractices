import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import {selectCollectionFetching} from '../../redux/shop/shop.selector'
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';


const MapStateToProps = createStructuredSelector({
    isLoading: selectCollectionFetching
});

const CollectionsOverviewContainer = 
connect(MapStateToProps)(WithSpinner(CollectionsOverview))
    export default CollectionsOverviewContainer