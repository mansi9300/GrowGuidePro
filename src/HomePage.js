import React from 'react'
import TipLink from "./TipLink";
import tip1img from "./Images/tip_1.png"
import tip4img from "./Images/tip_4.png"
import tip10img from "./Images/tip_10.png"
import tip3img from "./Images/tip_3.png"
import homepageImg1 from "./Images/homepageImg1.png"
import homepageImg2 from "./Images/homepageImg2.png"
import homepageImg3 from "./Images/homepageImg3.png"
function HomePage() {

    const featuredTips = [
        <TipLink key={1} name="Composting and Organic Fertilizers" src={tip1img} home={true}></TipLink>,
        <TipLink key={2} name="Agroforestry on Farms" src={tip4img} home={true}></TipLink>,
        <TipLink key={3} name="Smart Farming Technology" src={tip10img} home={true}></TipLink>,
        <TipLink key={4} name="Water Conservation on Farms" src={tip3img} home={true}></TipLink>,
    ];

    return (
        <div className='HomePage'>
            <article className="homepageArticle1">
                <img src={homepageImg1} alt='summary of the informations' className="homepageImg" />
                <p>The primary aim of eco-friendly farming is to create a harmonious balance between agriculture and the environment. By implementing sustainable practices like renewable energy, water conservation, and natural pest control, farms can coexist with nature. These methods help protect the environment, conserve valuable resources, and maintain the health of ecosystems, ensuring that high productivity is achieved without sacrificing ecological responsibility.</p>
            </article>
            <article className="homepageArticle">
                <img src={homepageImg2} alt='summary of the informations' className="homepageImg2" />
                <p>Eco-friendly farming encourages methods like crop rotation and companion planting to naturally enrich the soil and reduce the need for chemical inputs. These practices not only boost soil fertility but also foster biodiversity by attracting beneficial insects and wildlife. The result is healthier crops, reduced reliance on harmful chemicals, and a thriving ecosystem that supports both the environment and farming productivity.</p>
            </article>
            <article className="homepageArticle1">
                <img src={homepageImg3} alt='summary of the informations' className="homepageImg" />
                <p>Leveraging technology is another key aspect of sustainable agriculture. Precision farming tools, drones, and sensors help monitor crop health and optimize resource use, ensuring minimal waste. These smart technologies allow farmers to efficiently manage their farms while reducing their environmental impact. The combination of nature and technology creates resilient, sustainable systems that support both the environment and the economy.</p>
            </article>
            <article className='brief'>
                {featuredTips}
            </article>
        </div>
    );
}
export default HomePage;