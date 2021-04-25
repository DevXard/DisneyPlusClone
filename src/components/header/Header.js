import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {auth, provider} from '../../firebase';
import {selectUserName, selectUserEmail, selectUserPhoto, setUserLoginDetails} from '../../features/user/userSlice';

const Header = (props) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);
    const userPhoto = useSelector(selectUserPhoto);
    console.log(userPhoto)

    const handleAuth = () => {
        auth.signInWithPopup(provider).then((res) => {
            setUser(res.user)
            console.log(res.user)
        }).catch((err) => {
            alert(err.message);
        });
    };

    const setUser = (user) => {
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL
        }))
    }

    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg"  alt="Disney"/>
            </Logo>
            {!userName ? 
                
                   <Login onClick={handleAuth}>Login</Login>
                :
            <>
            <NavMenu>
                <a href="/home" >
                    <img src="/images/home-icon.svg" alt='home' />
                    <span>HOME</span>
                </a>
                <a href="/search" >
                    <img src="/images/search-icon.svg" alt='home' />
                    <span>SEARCH</span>
                </a>
                <a href="/search" >
                    <img src="/images/watchlist-icon.svg" alt='home' />
                    <span>WATCHLIST</span>
                </a>
                <a href="/search" >
                    <img src="/images/original-icon.svg" alt='home' />
                    <span>ORIGINALS</span>
                </a>
                <a href="/search" >
                    <img src="/images/movie-icon.svg" alt='home' />
                    <span>MOVIES</span>
                </a>
                <a href="/search" >
                    <img src="/images/series-icon.svg" alt='home' />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src={userPhoto} alt="User Image"/>
            </>
            }
            
        </Nav>
    )
}

const Nav = styled.nav` 
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 6rem;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`;

const Logo = styled.a` 
    padding: 0;
    width: 100px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display:inline-block;
    img{
        display: block;
        width: 100%;
    }
`;

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    a{
        display: flex;
        align-items: center;
        padding:0 12px;

        img{
            margin-right: 10px;
            height: 20px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
        }

        span {
        color: rgb(249, 249, 249);
        font-size: 13px;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 2px 0px;
        white-space: nowrap;
        position: relative;

        &:before {
            background-color: rgb(249, 249, 249);
            border-radius: 0px 0px 4px 4px;
            bottom: -6px;
            content: "";
            height: 2px;
            left: 0px;
            opacity: 0;
            position: absolute;
            right: 0px;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            visibility: hidden;
            width: auto;
      }
    }

        

    &:hover {
        span:before{
            transform: scaleX(1);
            visibility: visible;
            opacity: 1 !important;


        }
    }
    }

    
    

    @media (max-width: 768px) {
        display: none;
    }
`;

const Login = styled.a`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 10px 16px;
    text-transform: uppercase;
    letter-spacing: 1.3px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all .3s ease 0s;

    &:hover {
        background-color: #f9f9f9;
        cursor: pointer;
        color: rgb(0, 0, 0);
    }
    
`;

const UserImg = styled.img`
    height:50%;
    border-radius: 50px;

`;

export default Header;