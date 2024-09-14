import React from 'react'
import TipLink from "./TipLink";
import tip1img from "./Images/tip_1.png"
import tip4img from "./Images/tip_4.png"
import tip10img from "./Images/tip_10.png"
import tip3img from "./Images/tip_3.png"
import homepageImg from "./Images/homepage.png"
function HomePage() {
    const featuredTips = [
        <TipLink key={1} name="Composting and Organic Fertilizers" src={tip1img} home={true}></TipLink>,
        <TipLink key={2} name="Agroforestry on Farms" src={tip4img} home={true}></TipLink>,
        <TipLink key={3} name="Smart Farming Technology" src={tip10img} home={true}></TipLink>,
        <TipLink key={4} name="Water Conservation on Farms" src={tip3img} home={true}></TipLink>,
    ];
    return (
        <div className='HomePage'>
            <article id="homepageArticle">
                <img src={homepageImg} alt='summary of the informations' id="homepageImg" />  
                <p>The main goal of the eco-friendly farming tips is to transform agriculture into a more sustainable, resilient, and environmentally conscious practice that balances high productivity with ecological responsibility. At the heart of these tips lies the belief that farming can coexist harmoniously with nature by adopting practices that protect the environment, conserve resources, and enhance the health of ecosystems. Whether through renewable energy adoption, water conservation, natural pest control, or biodiversity enhancement, these strategies are designed to reduce the negative environmental impact traditionally associated with farming. The overarching objective is to help farmers optimize their operations while minimizing waste, pollution, and depletion of natural resources. These tips promote methods like crop rotation and companion planting, which work to naturally enrich the soil and reduce the need for chemical inputs. They also encourage farmers to leverage smart technologies, such as precision farming and drones, to monitor crop health and use resources more efficiently. By adopting these eco-friendly practices, farmers not only reduce their carbon footprint and dependency on harmful chemicals but also contribute to preserving biodiversity, improving soil health, and protecting water resources. Ultimately, the goal is to create farming systems that are not only economically viable but also environmentally sustainable, ensuring long-term food security while safeguarding the planet for future generations. The idea is to empower farmers to become stewards of the land, fostering a regenerative approach to agriculture that enhances the productivity of the land without compromising its ability to support life for years to come.</p>
            </article>
            <article className='brief'>
                {featuredTips}
            </article>
        </div>
    );
}
export default HomePage;