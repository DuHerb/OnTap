import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  root: {
    marginTop: 5,
  },
  cardContent:{
    padding: '5px 10px'
  },
  cardActions: {
    justifyContent: 'right'
  }
})

const CrudWindow = ({kegs, viewedBeer}) => {
  const classes = useStyles();

  const getBeerIndex = (beerName) => kegs.findIndex((beer)=> beer.name === beerName)
  const selectedBeer = (beerName) => {
    return kegs[getBeerIndex(viewedBeer)]
  }

  return (
    <Card className={classes.root}>
      {viewedBeer !== 'default' &&
      <>
        <Typography className={classes.cardContent} variant='h4'>Name: {selectedBeer().name}</Typography>
        <Typography className={classes.cardContent} variant='h6'>Brewery: {selectedBeer().brewery}</Typography>
        <Typography className={classes.cardContent} variant='h6'>Description: {selectedBeer().description}</Typography>
        <Typography className={classes.cardContent} variant='h6'>ABV: {selectedBeer().abv}%</Typography>
        <Typography className={classes.cardContent} variant='h6'>Price: ${selectedBeer().price}</Typography>
        <CardActions className={classes.cardActions}>
          <Button variant='outlined'>Edit</Button>
          <Button variant='contained'>Delete</Button>
        </CardActions>
      </>
      }
    </Card>
  )
}

export default CrudWindow
