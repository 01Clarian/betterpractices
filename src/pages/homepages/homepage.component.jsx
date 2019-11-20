import React from 'react'
import './home.page.styles.scss'
import Directory from '../../components/directory/directory.component'

// <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
const Homepage =({history}) => (
    <div className='homepage'>
   <Directory history={history} />
    </div>
);

export default Homepage;

