import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import {selectIsCollectedLoaded} from '../../redux/shop/shop.selector'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import CollectionPage from './collection.component'


const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectedLoaded(state)
});

const CollectionsPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner)(CollectionPage);

    export default CollectionsPageContainer



    