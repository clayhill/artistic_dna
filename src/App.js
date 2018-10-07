import React, { Component } from 'react';
import Header from './components/header'
import Board from './components/board'
import Toolbar from './components/toolbar'

const groups = [
    {name: 'unique me', color: 'red'},
    {name: 'artist', color: 'green'},
    {name: 'researcher', color: 'blue'},
    {name: 'expert', color: 'silver'},
    {name: 'team player', color: 'orange'},
    {name: 'performer', color: 'yellow'},
];

const predefined_cards = [
    {text: 'ik kies graag zelf wat ik wil maken', group: groups[0], selected: false},
    {text: 'ik wil iets vertellen', group: groups[0], selected: false},
    {text: 'ik hou van mooie dingen', group: groups[0], selected: false},
    {text: 'ik heb vaak een WOW-gevoel', group: groups[0], selected: false},
    {text: 'ik probeer graag van alles uit', group: groups[1], selected: false},
    {text: 'ik maak graag iets', group: groups[1], selected: false},
    {text: 'ik stop iets van mezelf in wat ik maak', group: groups[1], selected: false},
    {text: 'ik heb een rijke verbeelding', group: groups[1], selected: false},
    {text: 'ik ontdek graag iets nieuws', group: groups[2], selected: false},
    {text: 'ik stel graag vragen', group: groups[2], selected: false},
    {text: 'ik weet wat ik (niet) kan', group: groups[2], selected: false},
    {text: 'ik hou bij wat ik maak', group: groups[2], selected: false},
    {text: 'ik weet veel over kunst', group: groups[3], selected: false},
    {text: 'ik werk graag iets af', group: groups[3], selected: false},
    {text: 'ik geef niet op ook al is het soms moeilijk', group: groups[3], selected: false},
    {text: 'ik ben de techniek de baas', group: groups[3], selected: false},
    {text: 'ik heb respect voor het werk van anderen', group: groups[4], selected: false},
    {text: 'ik kan zeggen wat iemand (minder) goed kan', group: groups[4], selected: false},
    {text: 'ik werk goed samen met anderen', group: groups[4], selected: false},
    {text: 'ik maak graag iets samen met anderen', group: groups[4], selected: false},
    {text: 'ik betover mijn publiek', group: groups[5], selected: false},
    {text: 'ik laat graag zien wat ik kan', group: groups[5], selected: false},
    {text: 'ik bereid me goed voor op toonmomenten', group: groups[5], selected: false},
    {text: 'ik ben mijn zenuwen de baas als ik iets toon', group: groups[5], selected: false},
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: shuffleArray(predefined_cards),
            resultsButtonEnabled: false,
            resetButtonEnabled: false,
            numberOfSelectedCards: 0,
        };
        this.handleClick = this.handleClick.bind(this);
        this.showResults = this.showResults.bind(this);
        this.resetCards = this.resetCards.bind(this);
    }

    handleClick(index) {
        const cards = this.state.cards.slice();
        cards[index].selected = !cards[index].selected;

        let amount = this.state.numberOfSelectedCards + (cards[index].selected ? 1 : -1);

        this.setState({
            cards: cards,
            resultsButtonEnabled: amount === 6,
            resetButtonEnabled: amount > 0,
            numberOfSelectedCards: amount,
        });
    }

    showResults() {
        this.setState({
            resultsButtonEnabled: false,
            filterSelectedCards: true,
        })
    }

    resetCards() {
        const cards = this.state.cards.slice();
        for (let index = 0; index < cards.length; index++) {
            cards[index].selected = false;
        }
        this.setState({
            cards: cards,
            resultsButtonEnabled: false,
            resetButtonEnabled: false,
            numberOfSelectedCards: 0,
            filterSelectedCards: false,
        });
    }

    render() {
        return (
            <div className="container">
                <Header/>
                <Toolbar
                    onShowResults={this.showResults}
                    onResetCards={this.resetCards}
                    resultsButtonEnabled={this.state.resultsButtonEnabled}
                    resetButtonEnabled={this.state.resetButtonEnabled}
                />
                <Board cards={this.state.cards} onClick={this.handleClick} filterSelectedCards={this.state.filterSelectedCards}/>
            </div>
        );
    }
}

export default App;

function shuffleArray(array) {
    let arrayCopy = array.slice();
    for (let i = arrayCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]]; // eslint-disable-line no-param-reassign
    }
    return arrayCopy;
}