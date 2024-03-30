class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <Content />
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