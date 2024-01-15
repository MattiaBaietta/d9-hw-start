import { useEffect, useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import Job from './Job'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { Favorites } from './Favorites'

const MainSearch = () => {
  const [query, setQuery] = useState('')
  const [jobs, setJobs] = useState([])
  const [isClick,setisClick]=useState(false)
  const isFav= useSelector(state=>state.favorites.content)
  

  const baseEndpoint = 'https://strive-benchmark.herokuapp.com/api/jobs?search='

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(baseEndpoint + query + '&limit=20')
      if (response.ok) {
        const { data } = await response.json()
        setJobs(data)
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    if(isClick)
    {
      setJobs(isFav);
    }  
  }, [isFav]);
  return (
    <Container>
      <Row>
        <Row>
          <Col xs={10} className="mx-auto my-3">
            <h1>Remote Jobs Search</h1>
          </Col>
          <Col xs={10} className="mx-auto">
            <Form onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                value={query}
                onChange={handleChange}
                placeholder="type and press Enter"
              />
            </Form>
            <Button onClick={()=>{
              setisClick(true)
              setJobs(isFav)
            }}>
              FAVORITES
            </Button>
          </Col>
          <Col xs={10} className="mx-auto mb-5">
            {jobs.map((jobData) => (
              <Job key={jobData._id} data={jobData} /> 
            ))}
          </Col>
        </Row>
        <Row>
        </Row>



      </Row>

    </Container>
  )
}

export default MainSearch
