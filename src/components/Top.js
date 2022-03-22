import styled from "styled-components";

function Top(props) {
    return (
    <topwrapper>{ props.headline }</topwrapper>
    )
}

const topwrapper = styled.h1`
    display: flex;
    position: absolute;
    justify-content: flex-start;
    align-items: center;
    text-align: center;


`

export default Top;