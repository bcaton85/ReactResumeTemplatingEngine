import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
`

const Heading = styled.div`
h3 {
    margin: 0px;
}
`

const Language = styled.li``

const List = styled.ul`
margin-top: 2px;
margin-bottom: 0px;
`

function Languages(props) {

    var languages = null;

    if(props.languages){
        languages = props.languages.map( language => {
            return (<Language> {language} </Language>);
        });
    }
    
    return (
        <Layout>
            <Heading>
                <h3>Languages</h3>
            </Heading>
            <List>
                {languages}
            </List>
        </Layout>
    );
    
}

export default Languages;