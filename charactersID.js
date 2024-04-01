class CharactersID extends React.Component {
    render() {
      return (
        <div class="displayRow">
            <div><Sidebar CharactersID = "19"/></div>
          <div className="header">
            <Header />
          </div>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <React.StrictMode>
      <CharactersID />
    </React.StrictMode>,
    document.getElementById('root')
  );