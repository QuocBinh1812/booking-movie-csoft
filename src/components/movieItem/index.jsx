import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
// cái này tính sau
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MovieItem(props) {
  // custom css => tìm hiểu sau
  const classes = useStyles();
  const history = useHistory();

  // console.log("movieItem"+ props);
  const goDetailPage = () => {
    history.push(`/movie-detail/${props.movie.maPhim}`);
  };
  // sử dụng các component của material-ui
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={goDetailPage}>
        <CardMedia
          className={classes.media}
          image={props.movie.hinhAnh}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          <NavLink to={`/movie-detail/${props.movie.maPhim}`}>
            Learn More
          </NavLink>
        </Button>
      </CardActions>
    </Card>
  );
}
