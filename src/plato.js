import React, { Component } from "react";
import plato from "./plato.jpg";

class Plato extends Component {
    render() {
        return (
    <div>
        <h2>Plato</h2>
        <img className="imgCss" src={plato} title="Plato" alt="Plato"></img>
        <figcaption className="textCss">Image from:<a href="https://en.wikipedia.org/wiki/Plato">Wikipedia</a></figcaption>
            <p>Plato Πλάτων Plátōn 428/427 or 424/423  348/347 BC was an ancient Greek philosopher born in Athens during the Classical period in Ancient Greece. In Athens, Plato founded the Academy, a philosophical school where he taught the philosophical doctrines that would later became known as Platonism. Plato or Platon was a pen name derived from his nickname given to him by his wrestling coach allegedly a reference to his physical broadness. According to Alexander of Miletus quoted by Diogenes of Sinope his actual name was Aristocles, son of Ariston, of the deme Collytus Collytus being a district of Athens
                Plato was an innovator of the written dialogue and dialectic forms in philosophy. He raised problems for what later became all the major areas of both theoretical philosophy and practical philosophy. His most famous contribution is the Theory of forms, where he presents a solution to the problem of universals. He is also the namesake of Platonic love and the Platonic solids</p>
                <figcaption>Source</figcaption>
                <a href="https://en.wikipedia.org/wiki/Plato">Wikipedia</a>
    </div>
        );
    }
}

export default Plato;