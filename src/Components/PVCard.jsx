import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PVCprice from './PVCprice';
import PVCabv from './PVCabv';
import PVCpints from './PVCpints';
import { Paper, Button } from '@material-ui/core'
// import Twilight from '../Assets/twilight.png'


const useStyles = makeStyles(theme => ({
  card: {
    margin: '5px auto',
    width: '100%',
    zIndex: '100'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  colorBoxContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  noPadding: {
    padding: '0'
  },
  title: {
    maxWidth: '30%'
  },
  cardRow: {
    display: 'flex',
    alignItems: 'center'
  },
  actionBox: {
    height: '65px',
    alignContent: 'center',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '40px',
    width: '90px',
    zIndex: '1',
    marginLeft: '-52px',
    padding: 10,
    boxShadow: '1px 3px 10px -2px black'
  }
}));

const inlineStyle = {
  padding: 0
}

function PVCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <div className={classes.cardRow}>
      <Card className={classes.card} raised={true}>

        <CardHeader
          style={props.bg}
          title={<Typography className={classes.title}>{props.name}</Typography>}
          subheader={props.brewery}
          action = { (props.view === 'patron') ? <CardActions disableSpacing>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="Show more"
            >

            <ExpandMoreIcon />
          </IconButton>
        </CardActions> :
        <CardActions>
          <Button variant="outlined" onClick={()=>props.onSellPint(props.name)}>Sell Pint</Button>
        </CardActions>}
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {props.description}
          </Typography>
        </CardContent>
      </Collapse>
      <CardContent className={classes.noPadding} style={inlineStyle}>
        <Paper className={classes.colorBoxContainer} square={true}>
          <PVCprice price={props.price}/>
          <PVCabv abv={props.abv}/>
          <PVCpints pintsLeft={props.pintsLeft}/>
        </Paper>
      </CardContent>
    </Card>
    <div className={classes.actionBox}>
      <IconButton
      className={clsx(classes.expand, {
        [classes.expandOpen]: expanded,
      })}
      onClick={handleExpandClick}
      aria-expanded={expanded}
      aria-label="Show more"
    ><ExpandMoreIcon /></IconButton>

    </div>
  </div>
  )
}

PVCard.propTypes = {
  name: PropTypes.string,
  brewery: PropTypes.string,
  style: PropTypes.string,
  abv: PropTypes.string,
  pintsLeft: PropTypes.number,
  price: PropTypes.string,
  description: PropTypes.string
}

export default PVCard

