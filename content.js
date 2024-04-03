class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      loading: true
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('http://127.0.0.1:3010/posts');
      const responseData = await response.json();
      console.log('Fetched data:', responseData);
      if (responseData.status === 200 && Array.isArray(responseData.data)) {
        this.setState({ cards: responseData.data, loading: false });
      } else {
        console.error('Invalid response format:', responseData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({ loading: false });
    }
  }

  handleHover = (cardId, isHovering) => {
    
  }

  render() {
    const { cards, loading } = this.state;
    if (loading) {
      return <h1>Loading...</h1>;
    }
    if(cards.length === 0) {
      return <h1>Luffy esta de vacaciones</h1>;
    }
    return (
      <div className="backgroundContent">
        <div className="content-box"> 
          {this.state.cards.map(cardData => (
            <Card
              key={cardData.id}
              id={cardData.id}
              name={cardData.name}
              imageUrl={cardData.imageUrl}
              onHover={this.handleHover} 
            />
          ))}
        </div>
      </div>
    );
  }
}

Window.Content = Content;