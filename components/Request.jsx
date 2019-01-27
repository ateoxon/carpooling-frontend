// @ts-check
import { Card, CardBody } from 'reactstrap';
import Link from 'next/link';

const Request = ({ avatar, description, id, name }) => (
  <Link href={`/request/?id=${id}`}>
    <a href={`/request/?id=${id}`}>
      <Card style={{ marginBottom: '12px' }}>
        <CardBody>
          <div style={{ display: 'flex' }}>
            <img
              src={avatar}
              alt="Avatar"
              style={{
                height: '48px',
                marginRight: '12px',
              }}
            />
            <div>
              <h6>{name}</h6>
              <p>{description}</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </a>
  </Link>
);

export default Request;
