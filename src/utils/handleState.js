import React from 'react'
import * as states from './stateTypes'
function handleState({ value }) {
  console.log(value)
  switch (value) {
    case states.TODO:
      return (
        <>
          <option value='ToDo'>ToDo</option>
          <option value='InProgress'>InProgress</option>
        </>
      )
    case states.INPROGRESS:
      return (
        <>
          <option value='InProgress'>InProgress</option>
          <option value='InQA'>InQA</option>
          <option value='Blocked'>Blocked</option>
        </>
      )
    case states.BLOCKED:
      return (
        <>
          <option value='Blocked'>Blocked</option>
          <option value='ToDo'>ToDo</option>
        </>
      )
    case states.INQA:
      return (
        <>
          <option value='InQA'>InQA</option>
          <option value='Done'>Done</option>
          <option value='ToDo'>ToDo</option>
        </>
      )
    case states.DONE:
      return (
        <>
          <option value='Done'>Done</option>
          <option value='Deployed'>Deployed</option>
        </>
      )
    case states.DEPLOYED:
      return (
        <>
          <option value='Deployed'>Deployed</option>
        </>
      )
    default:
      return <></>
  }
}

export default handleState
