import React from 'react'

import { MdAdd } from 'react-icons/md'

import { Container } from './styles'

import Card from '../Card/Card'

export default function List( { data } ){
    return(
        <Container>
            <header>
                <h2>{data.title}</h2>
                {data.creatable && (
                    <button type="button">
                        <MdAdd size={24} color="#000"/>
                    </button>
                )}
            </header>

            <ul>
                {
                    data.cards.map((card)=>
                        <Card key={card.id} data={card}/>
                    )
                }
            </ul>
        </Container>
    )
}