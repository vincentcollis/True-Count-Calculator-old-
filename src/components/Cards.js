import React from 'react'
import styled from 'styled-components'


const CardButton = styled.button`
    background-color: green;
    margin: 5px;
`


function Cards() {

    // save card count values
    let two = {name: "2", value:1}
    let three = {name: "3", value:1}
    let four = {name: "4", value:1}
    let five = {name: "5", value:1}
    let six = {name: "6", value:1}
    let seven = {name: "7", value:0}
    let eight = {name: "8", value:0}
    let nine = {name: "9", value:0}
    let ten = {name: "10", value:-1}
    let jack = {name: "Jack", value:-1}
    let queen = {name: "Queen", value:-1}
    let king = {name: "King", value:-1}
    let ace = {name: "Ace", value:-1}

    // save all cards to on object array
    let card = [two,three,four,five,six,seven,eight,nine,ten,jack,queen,king,ace]

    //test buttons work
    const  printValue = function(event){
        console.log(event.target.dataset.value)
    }

    return (
        <>
            {
                card.map((obj, i) => 
                    <CardButton key={i} data-value={obj.value} onClick={printValue}> 
                        {obj.name} 
                    </CardButton>
                )
            }
        </>
    )
}

export default (Cards);
