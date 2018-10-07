import React, {Component} from 'react'
import Card from './card'

class Board extends Component {
    render() {
        const cards = this.props.cards.map((item, index) => {
            if (this.props.filterSelectedCards && !item.selected) {
                return null;
            }

            let color = 'near-white';
            if (item.selected) {
                color = 'moon-gray';

                if (this.props.filterSelectedCards) {
                    color = item.group.color;
                }
            }

            return <Card
                text={item.text}
                color={color}
                onClick={() => this.props.onClick(index)}
            />;
        });

        return (
            <div className="cf w-100 pa2-ns">
                {cards}
            </div>
        );
    }
}

export default Board;