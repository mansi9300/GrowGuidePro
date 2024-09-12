import React, { useContext } from 'react'
import { TipContext } from './TipCatalogue';
import Tip from './Tip';
function HomePage() {
    const items = useContext(TipContext).map((component) => ({
        id: crypto.randomUUID(),
        component: React.cloneElement(component, { home: true })
    }));
    let speed = 300000
    return (
        <div className='HomePage'>
            <article className='brief'>
            </article>
            <div className="inner">
                <div className="wrapper">
                    <section style={{ "--speed": `${speed}ms` }}>
                        {items.map(({ id, component }) => (
                            <div key={id} className='moving-container'>
                                {component}
                            </div>
                        ))}
                    </section>
                    <section style={{ "--speed": `${speed}ms` }}>
                        {items.map(({ id, component }) => (
                            <div key={id} className='moving-container'>
                                {component}
                            </div>
                        ))}
                    </section>
                    <section style={{ "--speed": `${speed}ms` }}>
                        {items.map(({ id, component }) => (
                            <div key={id} className='moving-container'>
                                {component}
                            </div>
                        ))}
                    </section>
                </div>
            </div>
        </div>
    );
}
export default HomePage;