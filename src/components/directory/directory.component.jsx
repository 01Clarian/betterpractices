import React from 'react';
import './directory.styles.scss';
import MenuItem from  '../menu-item/menu-item.component';
import {connect} from 'react-redux';
import {selectDirectorySections} from '../../redux/directory/directory.selectors'

function Directory({directory}) {

        return(
            <div className="directory-menu">
            {directory.map(({id, ...otherSectionProps}) => 
                <MenuItem 
                key={id} {...otherSectionProps} />) }
            </div>

        )
}

const MapStateToProps = (state) => (
  {directory: selectDirectorySections(state)}
)

export default connect(MapStateToProps)(Directory); 