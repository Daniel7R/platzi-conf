import React from 'react';
import initialState from '../initialState'; 
import { Products } from '../components/Products';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Platzi Conf - Productos</title>
                <meta name='twitter:card' content='summary_large_image' />
                <meta name='twitter:site' content='@Cdaniel_7rivera' />
                <meta name='twitter:creator' content='@Cdaniel_7rivera' />
                <meta name='twitter:title' content='Platzi Conf' />
                <meta name='twitter:description' content='Platzi Conf Store' />
                <meta name='og:description' content='Platzi Conf' />
                <meta name='og:url' content='platzi-conf-47f8a.web.app' />
                <meta name='og:site_name' content='Platzi Conf Store' />
                <meta name='og:locale' content='es_ES' />
                <meta name='og:type' content='article' />
            </Helmet>
            <Products products={initialState.products} />
        </React.Fragment>
    )
}

export {Home}
