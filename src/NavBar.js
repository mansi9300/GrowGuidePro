import React, { useRef } from 'react';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import TipCatalogue from './TipCatalogue';
import Tip from './Tip';
import Best4u from './Best4u';



const tip_1List = {
    "Install Drip Irrigation Systems": "Drip irrigation is one of the most efficient methods to water crops. It delivers water directly to the roots of the plants through a network of tubes, reducing water waste due to evaporation or runoff. Begin by assessing your farm's layout and the types of crops you grow to design a suitable drip irrigation system. Make sure to install filters to prevent clogging in the tubes.",
    "Harvest Rainwater": "Set up rainwater harvesting systems to collect and store rainwater. This can be done by installing gutters on barns, greenhouses, and other buildings, channeling the water into storage tanks. Rainwater can be used during dry periods to irrigate crops or fill livestock troughs, significantly reducing dependence on groundwater or municipal supplies.",
    "Monitor Soil Moisture Levels": "Use soil moisture sensors to monitor the moisture levels in your fields. This allows you to irrigate only when necessary, avoiding overwatering. Soil sensors can be placed in key areas of the farm to provide real-time data on how much water is needed, helping to optimize water use and improve crop yields.",
    "Mulch Crops": "Mulching is another great way to conserve water. Apply organic materials like straw, leaves, or wood chips to the soil surface to reduce evaporation and keep the soil cooler. Mulch also helps suppress weeds, which can compete with crops for water. This simple method can significantly reduce the amount of water your crops need.",
    " Use Drought-Tolerant Crops": "In regions with limited water resources, consider planting drought-tolerant crops or varieties that require less water. These crops are bred to withstand dry conditions and require less frequent irrigation, making them an ideal choice for water conservation strategies."
}
const descriptions = [
    "Composting is a natural and effective way to recycle organic farm waste into nutrient-rich fertilizer that improves soil health. By setting up a dedicated composting area on your farm, you can turn materials like crop residues, manure, and food scraps into valuable compost. The process involves layering green and brown materials in the compost pile, maintaining the right moisture levels, and regularly turning the pile to facilitate aerobic decomposition. This balance of nitrogen-rich and carbon-rich materials is key to producing high-quality compost that breaks down efficiently.Over several months, the organic matter in the pile decomposes into a dark, crumbly material that is rich in essential nutrients like nitrogen, phosphorus, and potassium. Once ready, compost can be spread over crop fields to enhance soil fertility and improve its structure, increasing its capacity to hold water and support plant growth. Unlike chemical fertilizers, compost releases nutrients slowly over time, reducing the risk of nutrient runoff and promoting long-term soil health. By embracing composting, farmers can reduce waste, cut down on chemical fertilizer costs, and build a more sustainable farming system",

]
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
                    <Route path='tips/composting-and-organic-fertilizers' element={<Tip steps={tip_1List}desc={descriptions[0]} name="Composting and Organic Fertilizers"/>}></Route>
                </Routes>
            </>
        </BrowserRouter>
    );
}

export default NavBar;
