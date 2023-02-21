import React from 'react';
import { Link } from 'react-router-dom';
import { AppPaths } from 'common/router';

export function MainPage() {
  return (
    <div style={{ margin: '100px 0 0 0' }}>
      <Link to={AppPaths.places}>places</Link>
    </div>
  );
}
