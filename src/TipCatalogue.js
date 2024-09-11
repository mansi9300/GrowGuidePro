import React, { useState, createContext } from "react";
import TipLink from "./TipLink";

const Tips = [

];
export const TipContext = createContext();
export const TipProvider = ({ children }) => {
    const [array] = useState(Tips);

    return (
        <TipContext.Provider value={array}>
            {children}
        </TipContext.Provider>
    );
};
function TipCatalogue() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    const getTipData = (TipLink) => {
        return {
            name: TipLink.props.name,
            amount: TipLink.props.amount,
            src: TipLink.props.src
        };
    };

    const filteredTip = Tips
        .map(getTipData)
        .filter(tip =>
            tip.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.amount - b.amount;
            } else {
                return b.amount - a.amount;
            }
        });

    const sortedTips = filteredTip.map((Tip, index) => (
        <TipLink key={index} name={Tip.name} src={Tip.src} amount={Tip.amount} />
    ));
    const NoTip = () => {
        return (
            <>
                <p id="no-Tip">There is no such Tip</p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </>
        );
    }

    return (
        <>
            <section className="search-section">
                <input
                    name="search"
                    type="text"
                    placeholder="Search Tips..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <button className="sort-button" onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
                    Sort by Amount ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
                </button>
            </section>
            <br />
            <div id="Tipcontainer">{sortedTips.length > 0 ? sortedTips : <NoTip></NoTip>}</div>
        </>
    );
}
export default TipCatalogue