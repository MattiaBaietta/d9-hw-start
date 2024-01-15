import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Row } from "react-bootstrap";
import {Col} from "react-bootstrap";
import Job from "./Job";

export function Favorites(){
    const dispatch = useDispatch(); // funzione dispatch che sarà utilizzata per emettere l'azione ADD_TO_CART
    const isFav= useSelector(state=>state.favorites.content)
    console.log(isFav)

    return(
        <Row>
            <Col xs={10} className="mx-auto mb-5">
                {isFav.map((jobData) => (
                  <Job key={jobData._id} data={jobData} /> 
                ))}
              </Col>
        </Row>
    )
}