import React from 'react'
import ThemeOptions from '../components/ThemeOptions/ThemeOptions'
import DeleteAllBtn from '../components/DeleteAllBtn/DeleteAllBtn'

const Settings = () => {
  return (
    <div style = {{height:'80vh', display:'flex', flexDirection:'column', gap:'2rem'}}>
    <ThemeOptions/>
    <DeleteAllBtn/></div>
  )
}

export default Settings