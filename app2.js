class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: null,
      loading: true,
    };
  }

  async componentDidMount() {
    // Obtener el ID del personaje de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const characterId = urlParams.get('id');
  
    // Hacer la solicitud para obtener la información del personaje
    try {
      const response = await fetch(`http://127.0.0.1:3010/posts/${characterId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch character data');
      }
      const characterData = await response.json();
      console.log('Fetched character data:', characterData);
      this.setState({ character: characterData.data[0], loading: false });
    } catch (error) {
      console.error('Error fetching character data:', error);
      this.setState({ loading: false });
    }
  }

  render() {
    const { character, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="character-details backgroundContent">
          <h2>{character.name}</h2>
          <div className="character-image">
            <img src={character.imageUrl} alt={character.name} />
          </div>
          <p>Age: {character.age}</p>
          <p>Epithet: {character.epithet}</p>
          <p>Occupation: {character.occupation}</p>
          <p>Bounty: {character.bounty}</p>
          <p>Devil Fruit: {character.devilFruit}</p>
          <p>Description: {character.description}</p>
          {}
        </div>
      </div>
    );
    
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>,
  document.getElementById('root')
);
