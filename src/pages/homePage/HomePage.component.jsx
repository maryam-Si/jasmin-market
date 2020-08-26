import React from 'react';
import Container from '../../components/container/Container.component';
import '../homePage/HomePage.Style.scss';

const HomePage= ({history})=>(
    <div className='homePage'>
        <Container history={history}/>
    </div>
);
export default HomePage;
