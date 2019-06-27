//----------------------------------
// apollo query
function MyComponent() {
    const { loading, error, data } = useQuery(HOMEPAGE_QUERY, {
      variables: {
        limit: 10
      }
    })
  
    if (loading) return 'Loading...'
    if (error) return 'Something Bad Happened'
  
    return (
      <ul>
        {data.users.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    )
  }

// --------------------------------
// apollo mutation

import { useMutation } from 'graphql-hooks'

const UPDATE_USER_MUTATION = `mutation UpdateUser(id: String!, name: String!) {
  updateUser(id: $id, name: $name) {
    name
  }
}`

function MyComponent({ id, name }) {
  const [updateUser] = useMutation(UPDATE_USER_MUTATION)
  const [newName, setNewName] = useState(name)

  return (
    <div>
      <input
        type="text"
        value={newName}
        onChange={e => setNewName(e.target.value)}
      />
      <button
        onClick={() => updateUser({ variables: { id, name: newName } })}
      />
    </div>
  )
}

//----------------------------------------------------
//mui style
import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'red',
    color: props => props.color,
  },
});

export default function MyComponent(props) {
  const classes = useStyles(props);
  return <div className={classes.root} />;
}

//-------------------------------------------------
//mobX observer

import { observer, useObservable, useObserver } from "mobx-react-lite"

const TodoList = () => {

    const todos = useObservable(new Map<string, boolean>())

    const todoRef = useRef()

    const addTodo = useCallback(() => {
        todos.set(todoRef.current.value, false)
        todoRef.current.value = ""
    }, [])

    const toggleTodo = useCallback((todo: string) => {
        todos.set(todo, !todos.get(todo))
    }, [])

    return useObserver(() => (
        <div>
            {Array.from(todos).map(([todo, done]) => (
                <div onClick={() => toggleTodo(todo)} key={todo}>
                    {todo}
                    {done ? " ✔" : " ⏲"}
                </div>
            ))}
            <input ref={todoRef} />
            <button onClick={addTodo}>Add todo</button>
        </div>
    ))
}