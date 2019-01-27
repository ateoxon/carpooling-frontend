// @ts-check
import { DropdownItem } from 'reactstrap';
import Link from 'next/link';

const Notification = ({ avatar, description, id, name }) => (
  <Link href={`/request?id=${id}`}>
    <DropdownItem
      href={`/request?id=${id}`}
      style={{ display: 'flex', paddingTop: '18px' }}
    >
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
    </DropdownItem>
  </Link>
);

export default Notification;
