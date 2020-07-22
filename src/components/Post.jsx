import React from 'react';

// component with Class
class Post2 extends React.Component {

    state = {
        likes: 10,
        dislikes: 0
    }

    //like useEffect( () => {},[]);
    componentDidMount(){
// fetch() + change state 
    }

    // click(){} // Method, this === window
// REACT RULE: Event Handlers inside ClassComponents
// should always (99%) be arrow function
    click = ()=> { // PROPERTY, this === Post instance
        // NEVER: this.state.likes = 11
        this.setState({ likes: this.state.likes + 1})
    }
    render() {
        return (
            <div className="card bg-primary text-white mb-1" style={{ width: "18rem" }}>
                <h2 onClick={this.click}>Click</h2>
                <img src="https://image.flaticon.com/icons/svg/2921/2921762.svg" className="card-img-top" style={{ width: "32px" }} alt="img" />
                <div className="card-body">
                    <h5 className="card-title rounded-pill text-center bg-dark p-3 mb-1">{this.props.title}</h5>
                    <p className="card-text bg-secondary p-2">{this.props.body}.</p>
                    <a href={"#" + this.props.userId} className="btn btn-info">Author id: {this.props.userId}</a>
                </div>
            </div>
        );
    }
}

// component with function
function Post(props) {

    return (
        <div className="card bg-primary text-white mb-1" style={{ width: "18rem" }}>
            <img src="https://image.flaticon.com/icons/svg/2921/2921762.svg" className="card-img-top" style={{ width: "32px" }} alt="img" />
            <div className="card-body">
                <h5 className="card-title rounded-pill text-center bg-dark p-3 mb-1">{props.title}</h5>
                <p className="card-text bg-secondary p-2">{props.body}.</p>
                <a href={"#" + props.userId} className="btn btn-info">Author id: {props.userId}</a>
            </div>
        </div>
    );

}

export default Post;