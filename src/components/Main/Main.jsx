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

  const InpRef = useRef()
  
  const AddTask = ()=>{
    if(Value===''){
      alert('write something(')
    }else{
      TodoData.unshift({
        work: Value,
        isdone: false
      })
      console.log(TodoData)
      setValue('')
      setrender(!render)
    }
  }
  
  function DelTask(i) {
    TodoData.splice(i,1)
    setrender(!render)
    setOpen(true);
  }

  const EditTask = (item)=>{
    InpRef.current.value = item.work
  }
  
  const HandleCheck = (value) => {
    console.log(value);
  }
  
  function delAll(){
    TodoData.length = 0
    setrender(!render)
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
          <SendButton onClick={AddTask} variant='contained'>ADD NEW TASK</SendButton>
       </InputField>
       <TodoField>
         <TodoTitle>TASKS</TodoTitle>
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
                   <TaskButton onClick={()=>EditTask(item)} startIcon={<EditIcon/>} variant='outlined' >EDIT</TaskButton>
                   <TaskButton onClick={()=>DelTask(index)} startIcon={<DeleteIcon/>} color='error' variant='outlined' >DELETE</TaskButton>
                 </TaskButtonsField>
               </TaskDiv>
             )
           })
         }
         {
          TodoData.length > 1?
         <DelAll style={{display:'block'}} onClick={delAll} color='error' variant='contained' >DALETE ALL TASKS</DelAll>
         :
         <DelAll style={{display:'none'}} onClick={delAll} color='error' variant='contained' >DALETE ALL TASKS</DelAll>
         }
       </TodoField>

       <Stack spacing={2} sx={{ width: '100%' }}>
      
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          One task was delete
        </Alert>
      </Snackbar>

    </Stack>

    </Content>
  )
}

export default Main