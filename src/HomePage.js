import React, { useContext } from 'react'
import panda from './Images/sadpanda.png'
import { AnimalContext } from './AnimalCatalogue';

function HomePage() {
    const items = useContext(AnimalContext).map((component) => ({
        id: crypto.randomUUID(),
        component: React.cloneElement(component, { home: true})
    }));
    let speed = 200000
    return (
        <div className='HomePage'>
            <article className='brief'>
                <img src={panda} id='panda' alt='Panda which seems sad'></img>
                <p>
                    Pandas,
                    such magnificent gentle giants are known for their cute and lazy appearance.
                    But now, due to our carelessness, they are at the edge of extinction.
                    We destroy their homes, capture them and lock them in tight spaces.
                    If we want to enjoy this world with them, with these fluffy cute creatures,
                    then we must stop poaching, uncontrolled deforestation both for their habitats and food: bamboo.
                </p>
            </article>
            <div className="inner">
                <div className="wrapper">
                    <section style={{ "--speed": `${speed}ms` }}>
                        {items.map(({ id, component }) => (
                            <div  key={id} className='moving-container'>
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