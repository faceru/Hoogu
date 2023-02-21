import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { AppPaths } from 'common/router';
import { useStores } from 'store';
import { observer } from 'mobx-react-lite';
import { PlaceCard } from 'components/placeListCard';

export const PlacesPage = observer(() => {
  const { places } = useStores();

  const { getPlacesPostRequest, getPlacesModel } = places;

  const { getPlaces } = getPlacesModel;

  useEffect(() => {
    getPlacesPostRequest();
  }, []);

  return (
    <div style={{ margin: '100px 0 0 0' }}>
      <Link to={AppPaths.main}>
        <Button>main</Button>
      </Link>
      <div>
        {getPlaces.map((place) => (
          <PlaceCard key={`place-card-${place.id}`} place={place} />
        ))}
      </div>
    </div>
  );
});
