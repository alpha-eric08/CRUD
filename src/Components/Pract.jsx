import { addDoc, collection, doc, getDocs, updateDoc, onSnapshot, deleteDoc } from "firebase/firestore"
import { useState } from "react"
import { useEffect } from "react"
import { db } from "./firebase"

function App() {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [email, setEmail] = useState("")
  const [users, setUsers] = useState([])
  const [id, setId] = useState("")
  const [update, setUpdate] = useState({})

  const createUser = async () => {
    const isUser = users.filter((user) =>{
      return user.email === email && user.name === name
    })
    if (isUser.length > 0) return alert("User already exists")

    await addDoc(userCollectionRef, { name, age, email})
  }

  // deleteUser
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id)
    await deleteDoc(userDoc)
  }

  // Update function
  const updateUser = async () => {
    if(Object.keys(update).length === 0) return alert("no update made")
    await updateDoc(doc(db, "users", id), update )
  setId("")
  setUpdate({})
  }

  const userCollectionRef = collection(db , "users")
// Display all users
  useEffect(() => {
    // const getUsers = async () => {
    //   const data = await getDocs(userCollectionRef)
    //   setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
     
    // }
    // getUsers()
    onSnapshot (userCollectionRef, (snapshot) => {
      setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    })
  }, [] )

  return (
    <div className="bg-gray-200 flex justify-center space-y-4 flex-col items-center font-extrabold">
      <input
        type="text"
        placeholder="Name..."
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="number"
        placeholder="Age..."
        onChange={(event) => setAge(event.target.value)}
      />
      <input
        type="email"
        placeholder="Email..."
        onChange={(event) => setEmail(event.target.value)}
      />
      <button onClick={createUser} className="bg-red-800 p-2 text-white">Create User</button>
      {users.map((user) => user.id === id? <div key={user.id}>
        <input
        type="text"
        defaultValue={user.name}
        placeholder="Name..."
        onChange={(event) => setUpdate({...update, name: event.target.value})}
      />
      <input
        type="number"
        defaultValue={user.age}
        placeholder="Age..."
        onChange={(event) => setUpdate({...update, age: event.target.value}) }
      />
      <input
        type="email"
        placeholder="Email..."
        defaultValue={user.email}
        onChange={(event) => setUpdate({...update, email: event.target.value})}
      />
      <button className="bg-gray-700 text-white" onClick={updateUser}>save</button>
      </div> : (
        <div key={user.id}>
          <h1>Name: {user.name}</h1>
          <h1>Age: {user.age}</h1>
          <h1>Email: {user.email}</h1>
          <button className="bg-blue-600 p-2 text-white" onClick={() => setId(user.id)}>Update User</button>
          <button className="bg-green-600 p-2 text-white" onClick={() => deleteUser(user.id)}>Delete User</button>
        </div>
      ))}
    </div>
  )
}

export default App