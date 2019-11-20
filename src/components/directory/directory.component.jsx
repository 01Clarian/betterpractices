import React from 'react';
import './directory.styles.scss';
import MenuItem from  '../menu-item/menu-item.component';


class Directory extends React.Component {
    constructor() {
        super();
            this.state = {
         sections: [
            {
              title: 'JAVASCRIPT',
              imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
              id: 1,
              linkUrl: 'javascript'
            },
            {
              title: 'PYTHON',
              imageUrl: 'https://ih0.redbubble.net/image.452049729.1381/flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
              id: 2,
              linkUrl: ''
            },
            {
              title: 'PHP',
              imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/PHP_Logo.png',
              id: 3,
              linkUrl: ''
            },
            {
              title: 'WEB DEVELOPMENT',
              imageUrl: 'https://skywell.software/wp-content/uploads/2018/12/web-development-1024x605.jpg',
              size: 'large',
              id: 4,
              linkUrl: ''
            },
            {
              title: 'MACHINE LEARNING',
              imageUrl: 'https://s3.amazonaws.com/prod-www-blackline-com/blog/wp-content/uploads/2019/01/29163118/A-Conversation-With-BlackLines-Machine-Learning-Experts-720x405.jpg',
              size: 'large',
              id: 5,
              linkUrl: ''
            }
          ]
        }
    }
    render() {
        return(
            <div className="directory-menu">
            {this.state.sections.map(({id, ...otherSectionProps}) => 
                <MenuItem 
                key={id} {...otherSectionProps} />) }
            </div>

        )
    }
}

export default Directory; 