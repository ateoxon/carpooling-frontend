// @ts-check
import Link from 'next/link';
import classnames from 'classnames';

const NavLink = ({ children, className = '', href, ...rest }) => (
  <Link href={href}>
    <a className={classnames('nav-link', className)} {...rest}>
      {children}
    </a>
  </Link>
);

export default NavLink;
