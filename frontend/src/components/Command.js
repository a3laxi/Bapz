import styled from "styled-components";
import Divider from '@mui/material/Divider';



const Container = styled.div`
    padding : 10px 10px 20px 10px  ;

`

const Wrapper = styled.div`
    padding-top:30px;
    padding-left: 50px;
    display: flex;
    flex-direction: column;
    gap:40px;

`

const Elem = styled.div`

`
const Command = (props) => {

    const comnd = props.cmd
    console.log('-------',comnd)




    return (
        <Container>
            Date : {comnd[0]}
            <Wrapper>
            {
                comnd[1].map((elem)=>(
                    <Elem>
                        <div>{elem[0]} </div>
                        <img style={{width:'50px'}} src={'/media/images/'+elem[1]} /> x {elem[4]}   -   Size {elem[3]}  -  {elem[2]}
                        <Divider />

                    </Elem>
                ))
            }

            </Wrapper>
        </Container>
    )
}


export default Command ;