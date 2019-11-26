import React from 'react';
import {connect} from 'react-redux';
import './collections-overview.styles.scss';
import CollectionPreview from '../preview-collection-component/collection-preview.component'
import selectCollectionsForPreview from '../../redux/shop/shop.selector'
import {createStructuredSelector} from 'reselect';

const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
          {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} 
                {...otherCollectionProps} />
            ))
        }
    </div>
)
 
const MapStateToProps = createStructuredSelector ({
    collections: selectCollectionsForPreview
})

export default connect(MapStateToProps)(CollectionsOverview)