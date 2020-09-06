import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Cart.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const Cart = (props) => {
    const { id, title, body } = props.user;
    const classes = useStyles();
    return (
        <div>
            <Card className="card" >
                <CardActionArea>
                    <CardMedia

                    />
                      <CardContent className="title-area">
                        <Typography gutterBottom variant="h5" component="h2">

                            <h2> ID: {id} </h2>
                            <h5>Title: {title}</h5>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <h5> Body: {body}</h5>
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions className="button">


                   <Link to={`/posts/${id}`}>

                        <Button variant="contained" color="secondary">
                            Read Details
                               </Button>

                    </Link>
                </CardActions>

            </Card>

        </div>
    );
};

export default Cart;