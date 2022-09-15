import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useDataProvider } from '../provider/DataProvider';

const Offers = () => {
    const [offers, setOffers] = useState([]);
    const [domains, setDomains] = useState([]);

    const { getAllOffers, getAllDomain, getUserById } = useDataProvider();

    useEffect(() => {
        getAllOffers().then(res => {setOffers(res)})
        getAllDomain().then(res => {setDomains(res)})
    }, []);
    return (
        <div className='container'>
            <h1>Liste de tous les offres disponibles</h1><hr/>
            <div className='row'>
                <div className='col-md-4'>
                    <h6>Domaines disponibles</h6>
                    <ul>
                        <li><a onClick={() => getAllOffers().then(res => {setOffers(res)})} className='btn btn-link'>Tous les domaines</a></li>
                        {domains.map(domain => (<li><a onClick={() => setOffers(domain.offers)} className='btn btn-link'>{domain.title}</a></li>))}
                    </ul>
                </div>
                <div className='col-md-8'>
                {offers.map(offer => (
                    <Card style={{width: '100%', margin: '5px 0'}}>
                        <Card.Body>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <Card.Title className="">{offer.title}</Card.Title>
                                    <Card.Text>{offer.description}</Card.Text>
                                </div>
                                <div className='col-md-6'>
                                    <h5>Missions:</h5>
                                    <ul>
                                        {offer.missions.map(m => (<li>{m.description}</li>))}
                                    </ul>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
                </div>
            </div>
        </div>
    );
};

export default Offers;