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

const List = styled.ul`
margin-top: 2px;
margin-bottom: 0px;
`

function Interests(props) {

    var interests = null;

    if(props.interests){
        interests = props.interests.map( interest => {
            return (<li> {interest} </li>);
        });
    }
    
    return (
        <Layout>
            <Heading>
                <h3>Interests</h3>
            </Heading>
            <List>
                {interests}
            </List>
        </Layout>
    );
    
}

export default Interests;