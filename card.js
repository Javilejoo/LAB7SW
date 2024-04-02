class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  handleHover = (isHovering) => {
    this.setState({ hover: isHovering });
    this.props.onHover(this.props.id, isHovering);
  }

  handleCardClick = () => {
    window.location.href = `app2.html?id=${this.props.id}`;
  }

  render() {
    const opacity = this.props.hovered || this.state.hover ? 1 : 0.4;
    return (
      <div
        className={`card backgroundCard box ${this.props.hovered ? "hovered" : ""}`}
        onMouseEnter={() => this.handleHover(true)}
        onMouseLeave={() => this.handleHover(false)}
        onClick={this.handleCardClick}
        style={{ opacity: opacity }}
      >
        <div className="card-image">
          <img src={this.props.imageUrl} alt={this.props.name}/>
        </div>
        <div className="card-content">
          <h3>{this.props.name}</h3>
          {}
        </div>
      </div>
    );
  }
}

const Window = {};
Window.Card = Card;