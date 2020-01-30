import React from 'react'

import { loadLists } from '../../services/API'

import { Container } from './styles'

import List from '../List/List'

const lists = loadLists();

export default function Board(){
    return(
        <Container>
            {
                lists.map((list)=>
                    <List key={list.title} data={list}/>
                )
            }

        </Container>
    )
}