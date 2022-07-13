import styled from 'styled-components';
import {Button,Checkbox} from '@mui/material/';
import TextField from '@mui/material/TextField';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const Content = styled.div`
    width: 100%;
    height: auto;
`

// INput field

export const InputField = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
`

export const SendInput = styled(TextField)`
    width: 70% !important;
    height: 30px !important;
`

export const SendButton = styled(Button)`
    width: 70% !important;
    height: 50px !important;
`

// Todo field

export const TodoField = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const TodoTitle = styled.h1`
    font-size: 40px;
    color: black;
    margin-bottom: 20px;
`

export const TaskDiv = styled.div`
    width: 70%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    border: 1px solid gray;
    transition: all ease 0.5s;
    border-radius: 5px;
    &:hover{
        transform: scale(1.1);
        transition: all ease 0.5s;
        box-shadow: 0px 0px 13px 1px rgba(34, 60, 80, 0.36);
    }
`

export const TaskTextField = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
`

export const TaskIcon = styled(AssignmentIcon)`
    width: 20px !important;
    height: 20px !important;
    margin: 0 40px 0 20px !important;
`

export const TaskText = styled.h1`
    font-size: 30px;
    font-weight: 400;
    text-transform: capitalize;
    color: black;
`

export const TaskButtonsField = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const TaskCheck = styled(Checkbox)`
    
`

export const TaskButton = styled(Button)`
    width: 100px !important;
    height: 40px !important;
`

export const DelAll = styled(Button)`
    width: 70% !important;
    height: 50px !important;
    margin-bottom: 30px !important;
`







