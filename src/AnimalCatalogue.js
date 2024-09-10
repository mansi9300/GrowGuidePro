import React, { useState, createContext } from "react";
import AnimalLink from "./AnimalLink";
import giantPandaImage from "./Images/giantpanda.png"
import amurLeopardImage from "./Images/amur-leopard.png"
import orangutanImage from "./Images/orangutan.png"
import saolaImage from "./Images/saola.png"
import snowLeopardImage from "./Images/leopard.png"
import kakapoImage from "./Images/kakapoa.png"
import javanRhinoImage from "./Images/javanrhino.png"
import blackRhinoImage from "./Images/blackrhino.png"
import vaquitaImage from "./Images/vaquita.png"
import seaTurtleImage from "./Images/seaturtle.png"
import siberianTigerImage from "./Images/siberian-tiger.png"
import blueWhaleImage from "./Images/bluewhale.png"
import cheetahImage from "./Images/cheetah.png"
import elephantImage from "./Images/indian-elephant.png"
import polarBearImage from "./Images/polarbear.png"
import redPandaImage from "./Images/red-panda.png"
import sumatranTigerImage from "./Images/sumatran-tiger.png"
import greenSeaTurtleImage from "./Images/green-sea-turtle.png"
import pygmyHippoImage from "./Images/pygmy-hippo.png"
import wildDogImage from "./Images/african-wild-dog.png"
import iberianLynxImage from "./Images/iberian-lynx.png"
import mountainGorillaImage from "./Images/mountain-gorilla.png"
import galapagosTortoiseImage from "./Images/galapagos-turtle.png"
import tapanuliOrangutanImage from "./Images/tapanuli-orangutan.png"
import hawksbillTurtleImage from "./Images/hawksbill-turtle.png"
import addaxImage from "./Images/addax.png"
import pygmyThreeToedSlothImage from "./Images/Pygmy-Three-Toed-Sloth.png"
import bactrianCamelImage from "./Images/Wild-Bactrian-Camel.png"
import siameseCrocodileImage from "./Images/siamese-croc.png"
import saigaImage from "./Images/Saiga-Antelope.png"
import scarletMacawImage from "./Images/Scarlet-Macaw.png"
import tigerQuollImage from "./Images/Tiger-Quoll.png"
import japaneseCraneImage from "./Images/Japanese-Crane.png"
import dugongImage from "./Images/Dugong.png"
import bonoboImage from "./Images/Bonobo.png"
import andeanCondorImage from "./Images/Andean-Condor.png"
import blackFootedFerretImage from "./Images/Black-Footed-Ferret.png"
import leatherbackSeaTurtleImage from "./Images/Leatherback-Sea-Turtle.png"
import komodoDragonImage from "./Images/Komodo-Dragon.png"
import sundaTigerImage from "./Images/Sunda-Tiger.png"
import cloudedLeopardImage from "./Images/Sunda-Clouded-Leopard.png"
import gorillaImage from "./Images/Western-Lowland-Gorilla.png"
import indusRiverDolphinImage from "./Images/Indus-River-Dolphin.png"
import redCrownedCraneImage from "./Images/Red-Crowned-Crane.png"
import okapiImage from "./Images/okapi.png"
import asiaticLionImage from "./Images/Asiatic-Lion.png"
import yellowEyedPenguinImage from "./Images/Yellow-Eyed-Penguin.png"
import marmosetImage from "./Images/Pygmy-Marmoset.png"
import pyreneanIbexImage from "./Images/Pyrenean-Ibex.png"
import bermudaPetrelImage from "./Images/Bermuda-Petrel.png"
import northernWhiteRhinoImage from "./Images/Northern-White-Rhino.png"
import baijiImage from "./Images/Baiji.png"
import hirolaImage from "./Images/Hirola.png"
import amadoniWolfImage from "./Images/Amadoni-Wolf.png"
import giantArmadilloImage from "./Images/Giant-Armadillo.png"
import iliPikaImage from "./Images/Ili-Pika.png"
import ethiopianWolfImage from "./Images/Ethiopian-Wolf.png"
import javanSlowLorisImage from "./Images/Javan-Slow-Loris.png"
import westernSwampTortoiseImage from "./Images/Western-Swamp-Tortoise.png"
import madagascarFishEagleImage from "./Images/Madagascar-Fish-Eagle.png"
import gangesDolphinImage from "./Images/Ganges-River-Dolphin.png"
import iberianWolfImage from "./Images/Iberian-Wolf.png"
import greaterBambooLemurImage from "./Images/Greater-Bamboo-Lemur.png"
import giantButterflyImage from "./Images/Queen-Alexandra's-Birdwing.png"
import blueThroatedMacawImage from "./Images/Blue-Throated-Macaw.png"
import balkanLynxImage from "./Images/Balkan-Lynx.png"
import oryxImage from "./Images/Scimitar-Horned-Oryx.png"
import darwinFrogImage from "./Images/Darwin's-Frog.png"
import yellowFootedWallabyImage from "./Images/Yellow-Footed-Rock-Wallaby.png"
import galapagosPenguinImage from "./Images/Galapagos-Penguin.png"
import addraGazelleImage from "./Images/Addra-Gazelle.png"
import prairieChickenImage from "./Images/Attwater's-Prairie-Chicken.png"
import monkSealImage from "./Images/Hawaiian-Monk-Seal.png"
import floridaPantherImage from "./Images/Florida-Panther.png"
import spixMacawImage from "./Images/Spix's-Macaw.png"
import antipodesParakeetImage from "./Images/Antipodes-Island-Parakeet.png"
import palawanPeacockPheasantImage from "./Images/Palawan-Peacock-Pheasant.png"
import mexicanGrayWolfImage from "./Images/Mexican-Gray-Wolf.png"
import angelSharkImage from "./Images/Angel-Shark.png"
import chineseGiantSalamanderImage from "./Images/Chinese-Giant-Salamander.png"
import ethiopianHighlandWolfImage from "./Images/Ethiopian-Highland-Wolf.png"
import laysanAlbatrossImage from "./Images/Laysan-Albatross.png"
import blackFacedSpoonbillImage from "./Images/Black-Faced-Spoonbill.png"
import mountainNyalaImage from "./Images/Mountain-Nyala.png"
import markhorImage from "./Images/Markhor.png"
import giantIbisImage from "./Images/Giant-Ibis.png"
import yangtzeSoftshellTurtleImage from "./Images/Yangtze-Softshell-Turtle.png"
import takaheImage from "./Images/Takahe.png"
import philippineTarsierImage from "./Images/Philippine-Tarsier.png"

const animals = [<AnimalLink name="Giant-Ibis" src={giantIbisImage} amount={230} />,
<AnimalLink name="Yangtze-Softshell-Turtle" src={yangtzeSoftshellTurtleImage} amount={3} />,
<AnimalLink name="Takahe" src={takaheImage} amount={400} />,
<AnimalLink name="Philippine-Tarsier" src={philippineTarsierImage} amount={5000} />,

<AnimalLink name="Giant-Panda" src={giantPandaImage} amount={1800} />,
<AnimalLink name="Amur-Leopard" src={amurLeopardImage} amount={100} />,
<AnimalLink name="Snow-Leopard" src={snowLeopardImage} amount={2500} />,
<AnimalLink name="Black-Rhino" src={blackRhinoImage} amount={5000} />,
<AnimalLink name="Orangutan" src={orangutanImage} amount={14000} />,
<AnimalLink name="Sea-Turtle" src={seaTurtleImage} amount={10000} />,
<AnimalLink name="Vaquita" src={vaquitaImage} amount={10} />,
<AnimalLink name="Saola" src={saolaImage} amount={100} />,
<AnimalLink name="Javan-Rhino" src={javanRhinoImage} amount={70} />,
<AnimalLink name="Kākāpō" src={kakapoImage} amount={200} />,

<AnimalLink name="Siberian-Tiger" src={siberianTigerImage} amount={500} />,
<AnimalLink name="Blue-Whale" src={blueWhaleImage} amount={2000} />,
<AnimalLink name="Cheetah" src={cheetahImage} amount={7100} />,
<AnimalLink name="Indian-Elephant" src={elephantImage} amount={20000} />,
<AnimalLink name="Polar-Bear" src={polarBearImage} amount={25000} />,
<AnimalLink name="Red-Panda" src={redPandaImage} amount={10000} />,
<AnimalLink name="Sumatran-Tiger" src={sumatranTigerImage} amount={400} />,
<AnimalLink name="Green-Sea-Turtle" src={greenSeaTurtleImage} amount={8500} />,
<AnimalLink name="Pygmy-Hippo" src={pygmyHippoImage} amount={3000} />,
<AnimalLink name="African-Wild-Dog" src={wildDogImage} amount={6600} />,
<AnimalLink name="Iberian-Lynx" src={iberianLynxImage} amount={400} />,

<AnimalLink name="Mountain-Gorilla" src={mountainGorillaImage} amount={1000} />,
<AnimalLink name="Galapagos-Tortoise" src={galapagosTortoiseImage} amount={15000} />,
<AnimalLink name="Tapanuli-Orangutan" src={tapanuliOrangutanImage} amount={800} />,
<AnimalLink name="Hawksbill-Turtle" src={hawksbillTurtleImage} amount={25000} />,
<AnimalLink name="Addax" src={addaxImage} amount={100} />,
<AnimalLink name="Pygmy-Three-Toed-Sloth" src={pygmyThreeToedSlothImage} amount={100} />,

<AnimalLink name="Wild-Bactrian-Camel" src={bactrianCamelImage} amount={1000} />,
<AnimalLink name="Siamese-Crocodile" src={siameseCrocodileImage} amount={250} />,
<AnimalLink name="Saiga-Antelope" src={saigaImage} amount={5000} />,
<AnimalLink name="Scarlet-Macaw" src={scarletMacawImage} amount={20000} />,

<AnimalLink name="Tiger-Quoll" src={tigerQuollImage} amount={500} />,
<AnimalLink name="Japanese-Crane" src={japaneseCraneImage} amount={3000} />,
<AnimalLink name="Dugong" src={dugongImage} amount={85000} />,
<AnimalLink name="Bonobo" src={bonoboImage} amount={5000} />,
<AnimalLink name="Andean-Condor" src={andeanCondorImage} amount={6700} />,
<AnimalLink name="Black-Footed-Ferret" src={blackFootedFerretImage} amount={500} />,
<AnimalLink name="Leatherback-Sea-Turtle" src={leatherbackSeaTurtleImage} amount={34000} />,
<AnimalLink name="Komodo-Dragon" src={komodoDragonImage} amount={5000} />,
<AnimalLink name="Sunda-Tiger" src={sundaTigerImage} amount={400} />,
<AnimalLink name="Sunda-Clouded-Leopard" src={cloudedLeopardImage} amount={10000} />,

<AnimalLink name="Western-Lowland-Gorilla" src={gorillaImage} amount={100000} />,
<AnimalLink name="Indus-River-Dolphin" src={indusRiverDolphinImage} amount={1800} />,
<AnimalLink name="Red-Crowned-Crane" src={redCrownedCraneImage} amount={3000} />,
<AnimalLink name="Okapi" src={okapiImage} amount={3500} />,
<AnimalLink name="Asiatic-Lion" src={asiaticLionImage} amount={600} />,
<AnimalLink name="Yellow-Eyed-Penguin" src={yellowEyedPenguinImage} amount={4000} />,
<AnimalLink name="Pygmy-Marmoset" src={marmosetImage} amount={50000} />,
<AnimalLink name="Pyrenean-Ibex" src={pyreneanIbexImage} amount={0} />,
<AnimalLink name="Bermuda-Petrel" src={bermudaPetrelImage} amount={300} />,

<AnimalLink name="Northern-White-Rhino" src={northernWhiteRhinoImage} amount={2} />,
<AnimalLink name="Baiji" src={baijiImage} amount={0} />,
<AnimalLink name="Hirola" src={hirolaImage} amount={500} />,
<AnimalLink name="Amadoni-Wolf" src={amadoniWolfImage} amount={2500} />,
<AnimalLink name="Giant-Armadillo" src={giantArmadilloImage} amount={1000} />,
<AnimalLink name="Ili-Pika" src={iliPikaImage} amount={1000} />,
<AnimalLink name="Ethiopian-Wolf" src={ethiopianWolfImage} amount={500} />,
<AnimalLink name="Javan-Slow-Loris" src={javanSlowLorisImage} amount={"Unknown"} />,
<AnimalLink name="Western-Swamp-Tortoise" src={westernSwampTortoiseImage} amount={50} />,
<AnimalLink name="Madagascar-Fish-Eagle" src={madagascarFishEagleImage} amount={120} />,

<AnimalLink name="Ganges-River-Dolphin" src={gangesDolphinImage} amount={3700} />,
<AnimalLink name="Iberian-Wolf" src={iberianWolfImage} amount={2500} />,
<AnimalLink name="Greater-Bamboo-Lemur" src={greaterBambooLemurImage} amount={500} />,
<AnimalLink name="Queen-Alexandra's-Birdwing" src={giantButterflyImage} amount={"Unknown"} />,
<AnimalLink name="Blue-Throated-Macaw" src={blueThroatedMacawImage} amount={450} />,
<AnimalLink name="Balkan-Lynx" src={balkanLynxImage} amount={40} />,
<AnimalLink name="Scimitar-Horned-Oryx" src={oryxImage} amount={2000} />,
<AnimalLink name="Darwin's-Frog" src={darwinFrogImage} amount={1000} />,

<AnimalLink name="Yellow-Footed-Rock-Wallaby" src={yellowFootedWallabyImage} amount={5000} />,
<AnimalLink name="Galapagos-Penguin" src={galapagosPenguinImage} amount={2000} />,
<AnimalLink name="Addra-Gazelle" src={addraGazelleImage} amount={500} />,
<AnimalLink name="Attwater's-Prairie-Chicken" src={prairieChickenImage} amount={100} />,
<AnimalLink name="Hawaiian-Monk-Seal" src={monkSealImage} amount={1400} />,
<AnimalLink name="Florida-Panther" src={floridaPantherImage} amount={230} />,
<AnimalLink name="Spix's-Macaw" src={spixMacawImage} amount={250} />,

<AnimalLink name="Antipodes-Island-Parakeet" src={antipodesParakeetImage} amount={200} />,
<AnimalLink name="Palawan-Peacock-Pheasant" src={palawanPeacockPheasantImage} amount={2000} />,
<AnimalLink name="Mexican-Gray-Wolf" src={mexicanGrayWolfImage} amount={200} />,
<AnimalLink name="Angel-Shark" src={angelSharkImage} amount={1000} />,
<AnimalLink name="Chinese-Giant-Salamander" src={chineseGiantSalamanderImage} amount={5000} />,
<AnimalLink name="Ethiopian-Highland-Wolf" src={ethiopianHighlandWolfImage} amount={500} />,
<AnimalLink name="Laysan-Albatross" src={laysanAlbatrossImage} amount={10000} />,
<AnimalLink name="Black-Faced-Spoonbill" src={blackFacedSpoonbillImage} amount={4000} />,
<AnimalLink name="Mountain-Nyala" src={mountainNyalaImage} amount={2000} />,
<AnimalLink name="Markhor" src={markhorImage} amount={2500} />,


];
export const AnimalContext = createContext();
export const AnimalProvider = ({ children }) => {
    const [array] = useState(animals);

    return (
        <AnimalContext.Provider value={array}>
            {children}
        </AnimalContext.Provider>
    );
};
function AnimalCatalogue() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    const getAnimalData = (animalLink) => {
        return {
            name: animalLink.props.name,
            amount: animalLink.props.amount,
            src: animalLink.props.src
        };
    };

    const filteredAnimals = animals
        .map(getAnimalData)
        .filter(animal =>
            animal.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.amount - b.amount;
            } else {
                return b.amount - a.amount;
            }
        });

    const sortedAnimalComponents = filteredAnimals.map((animal, index) => (
        <AnimalLink key={index} name={animal.name} src={animal.src} amount={animal.amount} />
    ));
    const NoAnimal = () => {
        return (
            <>
                <p id="no-animal">There is no such animal</p>
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
                    placeholder="Search animals..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <button className="sort-button" onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
                    Sort by Amount ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
                </button>
            </section>
            <br />
            <div id="animalcontainer">{sortedAnimalComponents.length > 0 ? sortedAnimalComponents : <NoAnimal></NoAnimal>}</div>
        </>
    );
}
export default AnimalCatalogue