import React from 'react';
import './directory.styles.scss';
import MenuItem from  '../menu-item/menu-item.component';


class Directory extends React.Component {
    constructor() {
        super();
            this.state = {
         sections: [
            {
              title: 'ARITSTS',
              imageUrl: 'https://www.blhsnews.com/wp-content/uploads/2018/11/apple-music-note-800x420.jpg',
              id: 1,
              linkUrl: 'shop/music'
            },
            {
              title: 'COMEDIANS',
              imageUrl: 'https://ih1.redbubble.net/image.849570032.7895/flat,1000x1000,075,f.u1.jpg',
              id: 2,
              linkUrl: 'shop/comedy'
            },
            {
              title: 'POETS',
              imageUrl: 'https://previews.123rf.com/images/ninell/ninell1405/ninell140500116/28561407-ancient-scroll-isolated-on-white-background.jpg',
              id: 3,
              linkUrl: 'shop/poetry'
            },
            {
              title: 'PHILOSOPHERS',
              imageUrl: 'http://www.historyguide.org/images/plato.jpg',
              size: 'large',
              id: 4,
              linkUrl: 'shop/philosophy'
            },
            {
              title: 'XFACTOR',
              imageUrl: 'https://f4.bcbits.com/img/a3297651124_10.jpg',
              size: 'large',
              id: 5,
              linkUrl: 'shop/xfactor'
            }
          ]
        }
    }
    render() {
        return(
            <div className="directory-menu">
            {this.state.sections.map(({title, imageUrl, id, size}) => 
                <MenuItem title={title} size={size} key={id} imageUrl={imageUrl} />) }
            </div>

        )
    }
}

export default Directory; 