import React, {Component} from 'react';
import shuffle from 'shuffle-array';   //used for shuffling array
import Navbar from './Navbar';
import Card from './Card';


// A card can be in 1 of 3 CardStates
// HIDING - the card is not being shown
// SHOWING - the card is being shown but does not have a match yet
// MATCHING - the card is being shown and has a match.
//            the card should never move from MATCHING to another state during
//            game play.
const CardState = {
  HIDING: 0,
  SHOWING: 1,
  MATCHING: 2
}
function generateRabCol()
  {
    let cards=[];
    for(let i=0;i<8;i++)
    {
        let r=Math.floor(Math.random()*256);
        let g=Math.floor(Math.random()*256);
        let b=Math.floor(Math.random()*256);
        let backgroundColor=`rgb(${r},${g},${b})`;
        cards.push({id:i,cardState:CardState.HIDING,backgroundColor:backgroundColor});
        cards.push({id:15-i,cardState:CardState.HIDING,backgroundColor:backgroundColor});
    }
    return cards;
  }

export default class MemoryGame extends Component {
  constructor(props) {
    super(props);

    // The cards that we will use for our state.
    let cards =generateRabCol();
    cards = shuffle(cards);
    this.state = {cards:cards, noClick: false,Winner:false};
    
    this.handleNewGame = this.handleNewGame.bind(this)
  }
   handleClick(id) {
    const mapCardState = (cards, idsToChange, newCardState) => {
      return cards.map(c => {
        if (idsToChange.includes(c.id)) {
          return {
            ...c,
            cardState: newCardState
          };
        }
        return c;
      });
    }

    const foundCard = this.state.cards.find(c => c.id === id);
    
    if (this.state.noClick || foundCard.cardState !== CardState.HIDING) {
      return;
    }
    
    let noClick = false;
    let Winner=false;
    //CHANGE STATE OF CLICKED CARD TO SHOWING
    let cards = mapCardState(this.state.cards, [id], CardState.SHOWING);      //function expects id as array
    
    const showingCards =  cards.filter((c) => c.cardState === CardState.SHOWING);  //get all cards which are showing(in our case max 2)
    
    const ids = showingCards.map(c => c.id);
    
    if (showingCards.length === 2 && showingCards[0].backgroundColor === showingCards[1].backgroundColor)
    {
      cards = mapCardState(cards, ids, CardState.MATCHING);       //IF 2 SHOWING CARDS MATCH SET CARDSTATE TO MATCHING
    } 
    else if (showingCards.length === 2) 
    {                                                                 //IF 2 SHOWING CARDS DONT MATCH,SET CARDSTATE TO HIDING AFTER 1.3 sec
      let hidingCards = mapCardState(cards, ids, CardState.HIDING);
      
      noClick = true;                                   //DONT ALLOW CLICK DURING THIS DURATION(this is one of the states along with cards array)
      
      this.setState({cards, noClick}, () => {
        setTimeout(() => {
          // set the state of the cards to HIDING after 1.3 seconds
          this.setState({cards: hidingCards, noClick: false});
        }, 1300);
      });
      return;
    }
    let matchCard=cards.filter(c=>c.cardState===CardState.MATCHING);
    if(matchCard.length===16){
      Winner=true;}
    this.setState({cards, noClick,Winner});
  }
  
  
  handleNewGame()
  {
        let crd=generateRabCol();
        crd = shuffle(crd);
        this.setState({cards:crd,noClick:false,Winner:false});
  }
  
   render() {
    const cards = this.state.cards.map((card) => (
      <Card
        key={card.id}
        showing={card.cardState !== CardState.HIDING}
        backgroundColor={card.backgroundColor}
        onSel={this.handleClick.bind(this,card.id)}
      />
    ));

    return (
      <div>
        <Navbar onNewGame={this.handleNewGame} text={this.state.Winner?"You Win!!  Nice Memory You Got":""} bb={this.state.Winner?"Play Again?":"New Game"}/>
        {cards}
      </div>
    );
  }
}