import React from 'react'
import styled from 'styled-components'


const CardButton = styled.button`
    background-color: green;
    margin: 5px;
`


function Cards(props) {

    // destructing props
    let {setRunningCount, runningCount, setUsedCards, usedCards} = props

    // save card count values
    let one = {name: "2-6", value:1}

    let zero = {name: "7,8,9", value:0}

    let minusOne = {name: "10-Ace", value:-1}

    // save all cards to on object array
    let card = [one,zero,minusOne]

    // Update running count
    const  updateHandlerClick = function(event){
        // console.log(event.target.dataset.value)
        
        let value = parseInt(event.target.dataset.value)
        let newValue = runningCount + value
        
        setRunningCount(newValue)
        setUsedCards(usedCards+1)
        
    }

    const handleKeyPress = (event) =>{
        if (event.key == 'enter') {
            
            console.log("test")
        }
    }

    return (
        
        <>
        <CardButton key={1} data-value={one.value} onClick={updateHandlerClick} onKeyPress={handleKeyPress}> 
            {one.name} 
        </CardButton>
        
        <CardButton key={2} data-value={zero.value} onClick={updateHandlerClick} onKeyPress={handleKeyPress}> 
            {zero.name} 
        </CardButton>
        
        <CardButton key={3} data-value={minusOne.value} onClick={updateHandlerClick} onKeyPress={handleKeyPress}> 
            {minusOne.name} 
        </CardButton>


            {/* {
                card.map((obj, i) => 
                    <CardButton key={i} data-value={obj.value} onClick={updateHandlerClick} onKeyPress={handleKeyPress}> 
                        {obj.name} 
                    </CardButton>
                )
            } */}
        </>
    )
}

export default (Cards);
