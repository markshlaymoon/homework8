import React, { Component } from "react";
import aristotle from "./aristotle.jpg";

class Aristotle extends Component {
    render() {
        return (
    <div>
        <h2>Aristotle</h2>
        <img className="imgCss" src={aristotle} title="Aristotle" alt="Aristotle"></img>
        <figcaption className="textCss">Image from:<a href="https://en.wikipedia.org/wiki/Aristotle">Wikipedia</a></figcaption>

            <p>Aristotle  Ἀριστοτέλης Aristotélēs, pronounced aristotélɛs 384 - 322 BC was an Ancient Greek philosopher and polymath. His writings cover a broad range of subjects including physics, biology, zoology, metaphysics, logic, ethics, aesthetics, poetry, drama, music, rhetoric, psychology, linguistics, economics, politics, meteorology, geology, and government. As the founder of the Peripatetic school of philosophy in the Lyceum in Athens, he began the wider Aristotelian tradition that followed, which set the groundwork for the development of modern science.
                Little is known about Aristotle's life. He was born in the city of Stagira in Northern Greece during the Classical period. His father, Nicomachus, died when Aristotle was a child, and he was brought up by a guardian. At seventeen or eighteen years of age he joined Plato's Academy in Athens and remained there until the age of thirty-seven c.347 BC. Shortly after Plato died, Aristotle left Athens and, at the request of Philip II of Macedon, tutored his son Alexander the Great beginning in 343 BC. He established a library in the Lyceum which helped him to produce many of his hundreds of books on papyrus scrolls.</p>
                <figcaption>Source</figcaption>
                <a href="https://en.wikipedia.org/wiki/Aristotle">Wikipedia</a>
    </div>
        );
    }
}

export default Aristotle;