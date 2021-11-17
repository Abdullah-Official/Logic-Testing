import React from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import {changeAge, changeName, changeStatus, fetchUserName} from '../reducers/userReducer'


function Profile() {
    const {name,age,status} = useSelector((state) => {
        return state
      })
      const dispatch = useDispatch();
      const updateAge = (age) => {
       dispatch(changeAge(age))
      }
      const updateName =  () => {
        dispatch(fetchUserName())
      }
      const updateStatus =  (status) => {
        dispatch(changeStatus(status))
      }
    return (
        <div>
            <h1>I am profile component</h1>
            <h2>My name is {name}</h2>
            <h2>My age is {age}</h2>
            <h2>I am {status}</h2>
            <button onClick={() => updateName()} >update name</button>
            <button onClick={() => updateAge(21)} >update age</button>
            <button onClick={() => updateStatus("Single")} >update status</button>
        </div>
    )
}

export default Profile
