import { Row } from "reactstrap";
import MovieItem from "./MovieItem";
import "./MovieList.css";

const MovieList = ({
    initialDetails,
}) => {
    return (
        <div className="todo-list">
            {initialDetails.map((el) => (
                <Row>
                    <MovieItem initialDetail={el} key={el.id} />
                </Row>

            ))}
        </div>
    );
};

export default MovieList;