import React from 'react';
import Card from '../components/Card';
import { Container, Row, Col } from 'react-bootstrap';

import engramLogo from '../images/engramLogo.png';
import githubLogo from '../images/githubLogo.png';
import lbLogo from '../images/lbLogo.png';

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
                    link: 'http://limitbreak.pinttap.com',
                    selected: false

                },
                {
                    id: 2,
                    title: 'Github',
                    subTitle: '',
                    imgSrc: githubLogo,
                    link: 'https://github.com/alexsundstrom',
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
                <Row className="" md={6}>
                    
                {this.makeItems(this.state.items)}
                
                </Row>
            </Container>
        );
    }

}

export default Carousel;