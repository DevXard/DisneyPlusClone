import styled from 'styled-components';

import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Recomended from './Recomended';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Trending from './Trending';

import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import db from '../../firebase';
import {setMovies} from '../../features/movie/movieSlice';
import {selectUserName} from '../../features/user/userSlice';

const Home = (props) => {

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName)

    let recommend = [];
    let newDisney = [];
    let original = [];
    let trending = [];

    useEffect(() =>{
      db.collection('movies').onSnapshot((snapshot) =>{
        snapshot.docs.map((doc) =>{
          switch(doc.data().type){
            case "recommend":
              recommend = [...recommend, {id: doc.id, ...doc.data()}]
              break;
            case "new":
              newDisney = [...newDisney, {id: doc.id, ...doc.data()}]
              break;
            case "original":
              original = [...original, {id: doc.id, ...doc.data()}]
              break;
            case "trending":
              trending = [...trending, {id: doc.id, ...doc.data()}]
              break;
            default:
              break;
          }
          return
        })
      

      dispatch(setMovies({
        recommend,
        newDisney,
        original,
        trending
      }))
    })
    }, [userName])

    return(
        <Container>
            <ImgSlider/>
            <Viewers />
            <Recomended />
            <NewDisney />
            <Originals />
            <Trending />
        </Container>
    )
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 98px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;


export default Home;