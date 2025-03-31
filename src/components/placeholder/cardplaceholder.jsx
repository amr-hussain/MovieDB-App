import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

function CardPlaceholder({ count = 8 }) {
  return (
    <div className="container">
      <div className="row g-4">
        {[...Array(count)].map((_, index) => (
          <div key={index} className="col-md-4 col-lg-3">
            <Card style={{ width: '18rem', height: '100%' }}>
              <div className="placeholder-glow">
                <div 
                  className="placeholder w-100" 
                  style={{ height: '200px' }}
                  aria-hidden="true"
                />
              </div>
              <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                  <Placeholder xs={8} />
                </Placeholder>
                <div className="d-flex flex-column align-items-center justify-content-around">
                  <Placeholder.Button variant="outline-primary" xs={8} className="mb-2">
                    View Details
                  </Placeholder.Button>
                  <div className="w-50">
                    <Placeholder animation="glow">
                      <Placeholder xs={12} bg="info" className="rounded-1">
                        Rating
                      </Placeholder>
                    </Placeholder>
                  </div>
                  <Placeholder.Button variant="outline-danger" xs={12} className="mt-2">
                    Add to Favorites
                  </Placeholder.Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardPlaceholder;