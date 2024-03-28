import { useSelector, useDispatch } from "react-redux";

import { inc, dec, rnd } from '../actions';

const Counter = () => {

    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={() => dispatch(dec())} className="btn btn-primary">DEC</button>
            <button onClick={() => dispatch(inc())} className="btn btn-primary">INC</button>
            <button onClick={() => dispatch(rnd())} className="btn btn-primary">RND</button>
        </div>
    )
}

export default Counter;



// using connect()

// const mapStateToProps = (state) => {
//     return {
//         counter: state.value
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(actions, dispatch);
// }

// If we push an Object as a second arg to the connect(), it will automatically cover all actionCreators
// with dispatch(), so mapDispatchToProps() is not needed here.

// export default connect(mapStateToProps, actions)(Counter);
