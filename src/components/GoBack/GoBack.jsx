import { IoMdArrowRoundBack } from 'react-icons/io';
import { GoBackNavLink } from './GoBack.Styled';

export const GoBack = ({ to, state }) => {
  return (
    <GoBackNavLink to={to} className="GoBack" state={{ from: state }}>
      <IoMdArrowRoundBack className="BackIcon" size={11} />
      Go back
    </GoBackNavLink>
  );
};