import React,{useState,useContext} from 'react';
import {Avatar,Input, Button,Container, Grid, Paper, Typography ,TextField} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Loader from './loaderComponent/loader';
import { DataContext } from './dataProviderComponent/DataProvider';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  containerStyle: {
    marginBottom:'40px',
    paddingTop:'100px'
  },
  typoHthree:{
    marginTop:'20px',
  },
  gridContainer:{
    height:'80%'
  },
  elevatedPaper:{
    padding:'20'
  },
  imgStyle:{
    maxWidth: '100%', height: 'auto'
  },
  paperStyle:{
    padding: '20px', 
    height: '100%' 
  },
  dateSpan:{
    marginLeft:'15px'
  },
  typoContent:{
    marginBottom:'15px'
  },
  commentSect:{
    width: '100%',marginBottom:'20px' ,marginTop:'20px'
  },
  iconStyle:{
    display:'flex',justifyContent:'center',alignItems:'center'
  },
  inputSect:{
    marginBottom:'10px',marginTop:'10px'
  },
  avatarStyle:{
    '@media (min-width: 780px)': {
      marginRight:'100px'
    }
  }
  
});


const NewsContainer = () => {
    const [likes, setLikes] = useState(0);
    const [dislLikes, setdisLikes] = useState(0);
    const [textData,setTextData] = useState('');
    const [commentName,setCommentName] = useState('')
    const [textDataFinal,setTextDataFinal] = useState('');
    const [commentNameFinal,setCommentNameFinal] = useState('')

    const data = useContext(DataContext);
    const classes = useStyles();

    const date = new Date(data?.publishedAt);
    const formattedDate = moment(date).format('MMMM Do YYYY, h:mm:ss a');
    const timestamp = new Date()

    const handleName = (e)=>{
      setCommentName(e.target.value)
    }

    const handleChange = (e)=>{
      setTextData(e.target.value)
    }

    const handleClick = ()=>{
      setTextData('')
      setCommentName('')
      setTextDataFinal(textData)
      setCommentNameFinal(commentName)

    }

    const handleLike = ()=>{
      setLikes(likes + 1);
    }

    const handledisLike = ()=>{
      setdisLikes(dislLikes + 1);
    }

  return (
  <>
  {
    data ?
  <Container maxWidth="md" className={classes.containerStyle}>
    <Typography variant="h3" component="h1"  align="center" className={classes.typoHthree}>
       {data?.title}
    </Typography>
    <Grid container  justify="center"  className={classes.gridContainer}>
      <Paper elevation={3} className={classes.elevatedPaper}>
        <img src={data?.urlToImage} alt="Example" className={classes.imgStyle}/>
      </Paper>
    <div>
      <Paper className={classes.paperStyle} >
        <Typography variant="subtitle2" color="textSecondary" >
          {data?.author} 
          <span className={classes.dateSpan} >{formattedDate} </span>
        </Typography>
        <Typography variant="body1" className={classes.typoContent} >
          {data?.content}
          {data?.content}
          <Typography variant="body1"  className={classes.typoContent}>
          {data?.content}
        </Typography>
          {data?.content}
          {data?.content}
        </Typography>
        <Typography variant="body1"  className={classes.typoContent}>
          {data?.content}
          </Typography>
        <Typography variant="body1" className={classes.typoContent}>
          {data?.content}
          {data?.content}
          {data?.content}
        </Typography>
        <Typography variant="body1"  className={classes.typoContent}>
          {data?.content}
        </Typography>
        <Typography variant="body1" className={classes.typoContent}>
          {data?.content}
          {data?.content}
          {data?.content}
        </Typography>
        <Typography variant="body1"  className={classes.typoContent}>
          {data?.content}
        </Typography>
        <TextField
          label="Share your comments...."
          multiline
          rows={10}
          value={textData}
          onChange={(e)=>handleChange(e)}
          variant="outlined"
          className={classes.commentSect}
        />
        <Grid item xs={2}>
          <Input
            placeholder="Enter your name"
            fullWidth
            variant="outlined"
            className={classes.inputSect}
            value={commentName}
            onChange={(e)=>handleName(e)}
          />
        </Grid>
        <Button variant="contained" color="primary" onClick={handleClick}>POST</Button>
        <Typography variant="subtitle2" align='center' >
          Did you love this article?
        </Typography>
        <div className={classes.iconStyle} >
          <IconButton aria-label="like" onClick={handleLike}>
            <ThumbUpIcon />
          </IconButton>
          <span>{likes}</span>
          <IconButton aria-label="dislike" onClick={handledisLike}>
            <ThumbDownIcon />
          </IconButton>
          <span>{dislLikes}</span>
        </div>
        {commentNameFinal && textDataFinal  ? 
        <Grid  container spacing={2}>
          <Grid className={classes.avatarStyle} item xs={1}>
            <Avatar>{commentNameFinal.charAt(0)}</Avatar>
          </Grid>
          <Grid  item xs={10}>
            <Typography variant="subtitle1">{textDataFinal}</Typography>
            <Typography variant="subtitle1" color="textSecondary">{commentNameFinal}</Typography>
            <Grid item xs={12}>
              <Typography variant="caption" color="textSecondary">
                {moment(timestamp).format('MMMM Do YYYY, h:mm:ss a')}
              </Typography>
            </Grid>
          </Grid>
        </Grid>: ""}
      </Paper>
    </div>
    </Grid>
  </Container>:<Loader/>
  }
  </>

  );
};

export default NewsContainer;