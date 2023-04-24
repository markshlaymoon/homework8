import React, { Component } from "react";
import pythagoras from "./pythagoras.jpg";

class Pythagoras extends Component {
    render() {
        return (
    <div>
        <h2>Pythagoras</h2>
        <img className="imgCss" src={pythagoras} title="Pythagoras" alt="Pythagoras"></img>
        <figcaption className="textCss">Image from:<a href="https://en.wikipedia.org/wiki/Pythagoras">Wikipedia</a></figcaption>
            <p>Pythagoras of Samos Ancient Greek: Πυθαγόρας ὁ Σάμιος, romanized: Pythagóras ho Sámios, lit. 'Pythagoras the Samian', or simply Πυθαγόρας; Πυθαγόρης in Ionian Greek; c.570 - c.495 BC was an ancient Ionian Greek philosopher and the eponymous founder of Pythagoreanism. His political and religious teachings were well known in Magna Graecia and influenced the philosophies of Plato, Aristotle, and, through them, the West in general. Knowledge of his life is clouded by legend, but he appears to have been the son of Mnesarchus, a gem-engraver on the island of Samos. Modern scholars disagree regarding Pythagoras's education and influences, but they do agree that, around 530 BC, he travelled to Croton in southern Italy, where he founded a school in which initiates were sworn to secrecy and lived a communal, ascetic lifestyle. This lifestyle entailed a number of dietary prohibitions, traditionally said to have included vegetarianism, although modern scholars doubt that he ever advocated complete vegetarianism.
                The teaching most securely identified with Pythagoras is metempsychosis, or the "transmigration of souls", which holds that every soul is immortal and, upon death, enters into a new body. He may have also devised the doctrine of musica universalis, which holds that the planets move according to mathematical equations and thus resonate to produce an inaudible symphony of music. Scholars debate whether Pythagoras developed the numerological and musical teachings attributed to him, or if those teachings were developed by his later followers, particularly Philolaus of Croton. Following Croton's decisive victory over Sybaris in around 510 BC, Pythagoras's followers came into conflict with supporters of democracy, and Pythagorean meeting houses were burned. Pythagoras may have been killed during this persecution, or he may have escaped to Metapontum and died there.</p>
                <figcaption>Source</figcaption>
                <a href="https://en.wikipedia.org/wiki/Pythagoras">Wikipedia</a>
    </div>
        );
    }
}

export default Pythagoras;