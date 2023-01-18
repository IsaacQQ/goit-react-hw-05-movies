import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetailsById } from '../../api/api';
import { GoBack } from '../../components/GoBack/GoBack';
import { FilmCard } from '../../components/FilmCard/FilmCard';
import { Title, Box, Links, LinkItem, NavLinkItem } from './Details.Styled';

const Details = () => {
  const [details, setDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (details) {
      return;
    }
    const getDetails = async () => {
      try {
        const response = await getMovieDetailsById(movieId);
        setDetails(response);
      } catch (error) {
        console.log(error);
      }
    };

    getDetails();
  }, [details, movieId]);

  if (!details) {
    return;
  }

  const backLinkRef = location.state?.from ?? '/';

  return (
    <div>
      <GoBack to={backLinkRef} state={{ from: location.state.from }} />
      <FilmCard details={details} />
      <Box>
        <Title>Editional information</Title>
        <Links>
          <LinkItem>
            <NavLinkItem to="cast" state={{ from: location.state.from }}>
              Cast
            </NavLinkItem>
          </LinkItem>
          <LinkItem>
            <NavLinkItem to="reviews" state={{ from: location.state.from }}>
              Reviews
            </NavLinkItem>
          </LinkItem>
        </Links>
      </Box>
      <Outlet />
    </div>
  );
};

export default Details;