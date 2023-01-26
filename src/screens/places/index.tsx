import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { AppPaths } from 'common/router';

export function PlacesPage() {
  return (
    <Link to={AppPaths.main}>
      <Button>main</Button>
    </Link>
  );
}
