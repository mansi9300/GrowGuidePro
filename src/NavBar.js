import React from 'react';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import TipCatalogue from './TipCatalogue';
import Tip from './Tip';
import Best4u from './Best4u';



function NavBar() {
    return (
        <BrowserRouter>
            <>
                <div className='Nav'>
                    <hr />
                    <nav>
                        <Link to="/" className='link'>Homepage</Link>
                        <Link to="tips" className='link'>Catalogue</Link>
                        <Link to="test" className='link'>Test</Link>
                    </nav>
                    <hr />
                </div>
                {/*Didnt had time for backend sorry for this mess and didnt used context api cuz there is no need and no need for complication*/}
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='tips' element={<TipCatalogue />} />
                    <Route path='test' element={<Best4u/>}/>
                </Routes>
            </>
        </BrowserRouter>
    );
}

export default NavBar;
