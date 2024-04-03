class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:3010/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.state.name,
          age: this.state.age,
          epithet: this.state.epithet,
          occupation: this.state.occupation,
          bounty: this.state.bounty,
          devilFruit: this.state.devilFruit,
          imageUrl: this.state.imageUrl,
          imageBase64: this.state.imageBase64,
          description: this.state.description
        })
      });
      const character = await response.json();
      console.log("Personaje creado:", character);
      window.location.href = 'plantilla.html';
    } catch (error) {
      console.error("Error al crear el personaje:", error);
    }
  }

  render() {
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <h2>Crear Nuevo Personaje</h2>
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="age">Edad:</label>
              <input type="text" id="age" name="age" value={this.state.age} onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="epithet">Epíteto:</label>
              <input type="text" id="epithet" name="epithet" value={this.state.epithet} onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="occupation">Ocupación:</label>
              <input type="text" id="occupation" name="occupation" value={this.state.occupation} onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="bounty">Recompensa:</label>
              <input type="text" id="bounty" name="bounty" value={this.state.bounty} onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="devilFruit">Fruta del Diablo:</label>
              <input type="text" id="devilFruit" name="devilFruit" value={this.state.devilFruit} onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="imageUrl">URL de la Imagen:</label>
              <input type="text" id="imageUrl" name="imageUrl" value={this.state.imageUrl} onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="imageBase64">Imagen Base64:</label>
              <input type="text" id="imageBase64" name="imageBase64" value={this.state.imageBase64} onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="description">Descripción:</label>
              <textarea id="description" name="description" value={this.state.description} onChange={this.handleInputChange} />
            </div>
            <button type="submit">Guardar Personaje</button>
          </form>
          <div className="columns">
            {}
            {}
          </div>
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





  