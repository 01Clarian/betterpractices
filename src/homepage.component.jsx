import React from 'react'
import './home.page.styles.scss'

const Homepage =() => (
    <div className='homepage'>
        <div className="directory-menu">
            <div className='menu-item'>
                <div className ='content'>
                    <h1 className='title'>ARTISTS</h1>
                    <span className='subtitle'>STREAM</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className ='content'>
                    <h1 className='title'>COMEDIANS</h1>
                    <span className='subtitle'>STREAM</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className ='content'>
                    <h1 className='title'>POETS</h1>
                    <span className='subtitle'>STREAM</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className ='content'>
                    <h1 className='title'>PHILOSOPHERS</h1>
                    <span className='subtitle'>STREAM</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className ='content'>
                    <h1 className='title'>XFACTOR</h1>
                    <span className='subtitle'>STREAM</span>
                </div>
            </div>
        </div>
    </div>
);

export default Homepage;