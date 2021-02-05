import { connect } from "react-redux";
import { State } from "common/store/rootReducer";
import { selectLoading, createGame } from "common/store/createGame";
import ShareGame from "./ShareGame";

const mapStateToProps = (state: State) => ({
  loading: selectLoading(state),
});

export default connect(mapStateToProps, { createGame })(ShareGame);
