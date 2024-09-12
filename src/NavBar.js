import React, { useRef } from 'react';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import TipCatalogue from './TipCatalogue';
import Tip from './Tip';
import Best4u from './Best4u';




function NavBar() {
    const navRef = useRef()
    return (
        <BrowserRouter>
            <>
                <div className='Nav' ref={navRef}>
                    <nav>
                        <Link to="/" className='link'>Homepage</Link>
                        <Link to="tips" className='link'>Tips</Link>
                        <Link to="test" className='link' id='testLink'>Test</Link>
                    </nav>
                    <hr></hr>
                </div>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='tips' element={<TipCatalogue />} />
                    <Route path='test' element={<Best4u scrollRef={navRef} />} />
                </Routes>
            </>
        </BrowserRouter>
    );
}

export default NavBar;
