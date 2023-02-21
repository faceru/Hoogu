import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Place } from 'models/places/types';

export function PlaceCard(props: { place: Place }) {
  const { place } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography textAlign={'right'} component="h2" variant="h5">
              {place.name}
            </Typography>
            <Typography textAlign={'right'} variant="subtitle1" paragraph>
              {place.description}
            </Typography>
            <Typography textAlign={'right'} variant="subtitle1" color="primary">
              Detail
            </Typography>
          </CardContent>
          {/* <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={place.image}
            alt={place.imageLabel}
          /> */}
        </Card>
      </CardActionArea>
    </Grid>
  );
}
