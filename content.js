class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('http://127.0.0.1:3010/posts');
      const responseData = await response.json();
      console.log('Fetched data:', responseData); // Log the entire response object
      if (responseData.status === 200 && Array.isArray(responseData.data)) {
        this.setState({ cards: responseData.data });
      } else {
        console.error('Invalid response format:', responseData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  render() {
    return (
      <div className="backgroundContent">
        <div className="content-box"> 
          {this.state.cards.map(cardData => (
            <Card
              key={cardData.id}
              name={cardData.name}
              imageUrl={cardData.imageUrl}
            />
          ))}
        </div>
      </div>
    );
  }
}

window.Content = Content;
