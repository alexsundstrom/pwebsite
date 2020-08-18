import React from 'react';

import Card from '../components/Card';
import engramLogo from '../images/engramLogo.png';
import lbLogo from '../images/lbLogo.png';
import { Container, Row } from 'react-bootstrap';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Engram',
                    subTitle: '',
                    imgSrc: engramLogo,
                    link: 'https://engram.alexsundstrom.com/login',
                    selected: false

                },
                {
                    id: 1,
                    title: 'LimitBreak',
                    subTitle: '',
                    imgSrc: lbLogo,
                    link: 'https://pinttap.limitbreak.com',
                    selected: false

                }
            ]

        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id)
            item.selected = false;
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })

    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-center">
                {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;