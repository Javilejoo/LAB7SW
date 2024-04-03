class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        character: null,
        loading: true,
        name: "",
        age: "",
        epithet: "",
        occupation: "",
        bounty: "",
        devilFruit: "",
        imageUrl: "",
        imageBase64: "",
        description: ""
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
  
    handleInputChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    }
  
    handleUpdate = async (event) => {
      event.preventDefault();
      const { character, name, age, epithet, occupation, bounty, devilFruit, imageUrl, imageBase64, description } = this.state;
      const { id } = character;
      try {
        const response = await fetch(`http://127.0.0.1:3010/characters/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name, age, epithet, occupation, bounty, devilFruit, imageUrl, imageBase64, description })
        });
        if (!response.ok) {
          throw new Error('Failed to update character');
        }
        console.log("Personaje actualizado exitosamente");
        window.location.href = 'plantilla.html';
      } catch (error) {
        console.error("Error al actualizar el personaje:", error);
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
            <h2>Actualizar Personaje</h2>
            <form className="form" onSubmit={this.handleUpdate}>
              <div className="form-group">
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" name="name" onChange={this.handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="age">Edad:</label>
                <input type="text" id="age" name="age" onChange={this.handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="epithet">Epíteto:</label>
                <input type="text" id="epithet" name="epithet" onChange={this.handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="occupation">Ocupación:</label>
                <input type="text" id="occupation" name="occupation" onChange={this.handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="bounty">Recompensa:</label>
                <input type="text" id="bounty" name="bounty" onChange={this.handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="devilFruit">Fruta del Diablo:</label>
                <input type="text" id="devilFruit" name="devilFruit" onChange={this.handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="imageUrl">URL de la Imagen:</label>
                <input type="text" id="imageUrl" name="imageUrl" onChange={this.handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="imageBase64">Imagen Base64:</label>
                <input type="text" id="imageBase64" name="imageBase64" onChange={this.handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="description">Descripción:</label>
                <textarea id="description" name="description" onChange={this.handleInputChange} />
              </div>
              <button type="submit">Actualizar Personaje</button>
            </form>
          </div>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  