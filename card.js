class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
    this.handleHover = this.handleHover.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this); // Este método maneja el clic en la tarjeta
  }

  handleHover(isHovering) {
    this.setState({ hover: isHovering });
    this.props.onHover(this.props.id, isHovering);
  }

  handleCardClick() {
    window.location.href = 'characterID.html'; // Redirige al usuario al otro HTML
  }

  render() {
    const opacity = this.props.hovered || this.state.hover ? 1 : 0.4;
    return (
      <div
        className={`card backgroundCard box ${this.props.hovered ? "hovered" : ""}`}
        onMouseEnter={() => this.handleHover(true)}
        onMouseLeave={() => this.handleHover(false)}
        onClick={this.handleCardClick} // Este es el evento de clic en la tarjeta
        style={{ opacity: opacity }}
      >
        <div className="card-image">
          <img src={this.props.imageUrl} alt={this.props.name}/>
        </div>
        <div className="card-content">
          <h3>{this.props.name}</h3>
          {/* Otros datos de la tarjeta, si los tienes */}
        </div>
      </div>
    );
  }
}

  
const Window = {};
Window.Card = Card; // Exporta el componente Card para que pueda ser utilizado en otros archivos



  class CardList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        cards: [],
        hoveredCard: null
      };
      this.handleHover = this.handleHover.bind(this);
    }

    handleHover(cardId, isHovering) {
      this.setState({ hoveredCard: isHovering ? cardId : null });
    }  
  
    async componentDidMount() {
      const response = await fetch('http://127.0.0.1:3010/posts');
      const data = await response.json();
      this.setState({ cards: data });
    }
  
    render() {
      return (
        <div>
          {this.state.cards.map(cardData => (
            <Card
              key={cardData.id}
              name={cardData.name}
              imageUrl={cardData.imageUrl}
              hovered={this.state.hoveredCard === cardData.id}
              onHover={this.handleHover}
            />
          ))}
        </div>
      );
    }
  }
  
  Window.CardList = CardList;