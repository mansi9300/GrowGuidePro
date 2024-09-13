import React, { useState } from "react";
import TipLink from "./TipLink";
import tip1img from "./Images/tip_1.png"
import tip2img from "./Images/tip_2.png"
import tip3img from "./Images/tip_3.png"
import tip4img from "./Images/tip_4.png"
import tip5img from "./Images/tip_5.png"
import tip6img from "./Images/tip_6.png"
import tip7img from "./Images/tip_7.png"
import tip8img from "./Images/tip_8.png"
import tip9img from "./Images/tip_9.png"
import tip10img from "./Images/tip_10.png"

const tips = [
    <TipLink name="Composting and Organic Fertilizers" src={tip1img}></TipLink>,
    <TipLink name="Renewable Energy on Farms" src={tip2img}></TipLink>,
    <TipLink name="Water Conservation on Farms" src={tip3img}></TipLink>,
    <TipLink name="Agroforestry on Farms" src={tip4img}></TipLink>,
    <TipLink name="Crop Rotation and Companion Planting" src={tip5img}></TipLink>,
    <TipLink name="Natural Pest Control on Farms" src={tip6img}></TipLink>,
    <TipLink name="Practicing Organic Farming" src={tip7img}></TipLink>,
    <TipLink name="Reduced Tillage Farming" src={tip8img}></TipLink>,
    <TipLink name="Biodiversity Enhancement" src={tip9img}></TipLink>,
    <TipLink name="Smart Farming Technology" src={tip10img}></TipLink>,
];

function TipCatalogue() {
    return (
        <>
            <div id="Tipcontainer">{tips}</div>
        </>
    );
}
export default TipCatalogue