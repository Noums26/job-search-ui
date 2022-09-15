import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useDataProvider } from '../../provider/DataProvider';
import './Home.css'

const Home = () => {
    const [offers, setOffers] = useState([]);

    const { getAllOffers } = useDataProvider()

    useEffect(() => {
        getAllOffers().then((res) => {setOffers(res)})
    }, []);

    return (
        <div>
            <div className='home__banner'>

            </div>
            <div className='home__overview my-5'>
                <div className='container'>
                    <h2>Qui sommes nous?</h2>
                    <hr/>
                    <p>Nous sommes une communauté avec vous et tous les autres client et entreprises.</p>
                    <h3>Notre but?</h3>
                    <p>Nous voulons vous permettre de trouver ou de proposer les meilleurs offres de travail.</p>
                    <h2 className='mt-5'>Quelques offres</h2>
                    <hr/>
                    <div className='row'>
                        {offers.slice(0, 3).map(offer => (
                            <div className='col-md-4 col--fit' key={offer.id}>
                                <Card style={{width: '100%'}}>
                                    <Card.Body>
                                        <Card.Title className="mb-2 text-muted">{offer.title}</Card.Title>
                                        <Card.Text>{offer.description}</Card.Text>
                                        <ul>
                                            {offer.missions.map(m => (<li>{m.description}</li>))}
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;