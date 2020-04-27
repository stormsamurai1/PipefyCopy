import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'

import { Container, Label } from './styles'

export default function Card( { data, index } ){

    const ref = useRef()

    const [{ isDragging }, dragRef] = useDrag({
        item: {
            type: 'CARD',
            index
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })

    const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item, monitor){
            const draggedIndex = item.index
            const targetIndex = index;

            if(draggedIndex === targetIndex){
                return;
            }

            //Function to get properties about HTMl element
            const targetSize = ref.current.getBoundingClientRect();
            
            const targetCenter = (targetSize.bottom - targetSize.top)/2
            
        }
    })   

    dragRef(dropRef(ref))

    return(
        <Container ref={ref} isDragging={isDragging}>
            <header>
                {data.labels.map((label)=>
                    <Label key={label} color={label}/>
                )}
                
            </header>

            <p>{data.content}</p>
            {data.user && <img alt="" src={data.user}/>}
        </Container>
    )
}