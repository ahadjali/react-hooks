import StarRating from "./StarRating";
import "./MovieItem.css";
//import { MdAddShoppingCart } from 'react-icons/md';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, /*Button*/
} from 'reactstrap';

const MovieItem = ({ initialDetail }) => {
    return (
        <Card className="cart">
            <CardImg top src={initialDetail.image} alt="Card image cap" />
            <CardBody className="cart-body">
                <CardTitle tag="h5">{initialDetail.title}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{initialDetail.year}</CardSubtitle>
                <StarRating rating={initialDetail.rating} filter={false}/>
                <CardText>{initialDetail.prise}</CardText>
            </CardBody>
        </Card>
    );
  };
  export default MovieItem;

  //<Button style={{fontSize : "30px"}}><MdAddShoppingCart /></Button>