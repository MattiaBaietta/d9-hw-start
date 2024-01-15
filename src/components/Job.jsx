import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'


const Job = ({ data }) => {
  const dispatch = useDispatch(); 
  const isFav= useSelector(state=>state.favorites.content)
  
  return(
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
      onClick={()=>{if(isFav.includes(data))
        {
          dispatch({
            type: 'REMOVE_FROM_FAVORITES', 
            payload: data, 
          });
          console.log("rimosso"+data._id)

        }
        else{
          
          
          dispatch({
            type: 'ADD_FAVORITES', 
            payload: data, 
          });
          console.log("aggiunto"+data._id)
        }}}
    >
      
      <Col xs={3}>
      <FontAwesomeIcon icon={faStar} style={{color:"orange"}}
      />
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      
    </Row>
  )
}


export default Job
