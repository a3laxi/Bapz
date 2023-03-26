import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { useSelector } from 'react-redux';

const Container = styled.div`
    

`
const Wrapper = styled.div`
    padding-top:20px;
    height: 100%;
`


const Account = (props) => {

    const jwwt = useSelector((state) =>  (state.user.jwt)) ;
    const handleClick = () => {
        props.snd(false)
    }

    const [ info , setInfo ] = useState([])
    console.log(info)
    info.length===5 && axios.post('/api/customer/token',{jwt:jwwt})
        .then((res)=> setInfo(res.data))
        .catch((err) => console.log("Error during fetching customer profil data.",err) )

    return(
        <Container>
            <ArrowBackIcon onClick={()=>handleClick()}/>
            <Wrapper>
                EMAIL : {info}

            </Wrapper>

        </Container>
    )
}


export default Account ;