class Sidebar extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
        <aside>
            <h2>Sidebar</h2>
            {this.props.imageUrl && <img src={this.props.imageUrl} alt="Character Image" />}
            <p>This is the sidebar</p>
          </aside>
        )
    }
}


Window.Sidebar = Sidebar;

