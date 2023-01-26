import React from 'react';
import { Link } from 'react-router-dom';
import { AppPaths } from 'common/router';

export function MainPage() {
  return <Link to={AppPaths.places}>places</Link>;
}
