import React, { useRef, useState } from 'react'
import {Content, DelAll, InputField, Nothing, SendButton, SendInput, TaskButton, TaskButtonsField, TaskCheck, TaskDiv, TaskIcon, TaskText, TaskTextField, TodoField, TodoTitle} from './style'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { TodoData } from '../../data/data';

import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Main = () => {
  
  const [render, setrender] = useState(false)
  const [open, setOpen] = useState(false);
  const [Value, setValue] = useState('')
  const [globalid, setglobalid] = useState(-1)
  

  const InpRef = useRef()
  
  const AddTask = ()=>{
    if(Value===''){
      alert('write something(')
    }else{
      if(globalid===-1){
        TodoData.unshift({
          work: Value,
          isdone: false
        })
        console.log(TodoData)
        setValue('')
        setrender(!render)
      }else{
        TodoData[globalid].work = Value
        setrender(!render)
        setglobalid(-1)
        setValue('')
      }
    }
  }

  const EditTask = (item,id)=>{
    setValue(item.work)
    setglobalid(id)
  }
  
  function DelTask(i) {
    TodoData.splice(i,1)
    setrender(!render)
    setOpen(true);
  }

  
  
  function delAll(){
    TodoData.length = 0
    setrender(!render)
  }

  // Snackbar functions

  const HandleCheck = (value) => {
    console.log(value);
  }
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  

  return (
    <Content>
       <InputField>
          <SendInput ref={InpRef} value={Value} onChange={(e)=>setValue(e.target.value)} label='new todo' />
          <SendButton onClick={AddTask} variant='contained'>{globalid===-1?"ADD NEW TASK":"SAVE THE TASK"}</SendButton>
       </InputField>
       <TodoField>
         <TodoTitle style={{display:TodoData.length===0?'none':'block'}}>TASKS</TodoTitle>
         {
          TodoData.length===0 ?
          <Nothing>No tasks...</Nothing>
          :
           TodoData.map((item,index)=>{
             return (
               <TaskDiv key={index}>
                 <TaskTextField>
                   <TaskIcon />
                   <TaskText>{item.work}</TaskText>
                 </TaskTextField>
                 <TaskButtonsField>
                   <TaskCheck onChange={(e)=>HandleCheck(index)} color='success' />
                   <TaskButton onClick={()=>EditTask(item,index)} startIcon={<EditIcon/>} variant='outlined' >EDIT</TaskButton>
                   <TaskButton onClick={()=>DelTask(index)} startIcon={<DeleteIcon/>} color='error' variant='outlined' >DELETE</TaskButton>
                 </TaskButtonsField>
               </TaskDiv>
             )
           })
         }
         <DelAll style={{display:TodoData.length===0?'none':'block'}} onClick={delAll} color='error' variant='contained' >DALETE ALL TASKS</DelAll>
       </TodoField>

       <Stack spacing={2} sx={{ width: '100%' }}>
      
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          One task has been removed
        </Alert>
      </Snackbar>

    </Stack>

    </Content>
  )
}

export default Main