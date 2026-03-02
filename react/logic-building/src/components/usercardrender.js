import "./App.css";

const users = [
  { id: 1, name: "Aman", role: "admin", active: true },
  { id: 2, name: "Sara", role: "editor", active: false },
  { id: 3, name: "John", role: "viewer", active: true },
];

function UserCard({name, role, active}){
  
  const roleColors = {
    admin: "red",
    editor: "blue",
    viewer: "gray",
  };

  return (
    <div className="userCard m-2 border-black border-2 p-5">
      <h4>name is {name}</h4>
      <p style={{ color: roleColors[role] }}>Role is {role}</p>
      {!active && <p>user is Inactive</p>}
    </div>
  )
}

const App = () => {
  return (
    <div className="">
      {users.map(user=> 
        <UserCard
        key={user.id}
        name={user.name}
        role={user.role}
        active={user.active}
      />
      )}
    </div>
  );
};

export default App;
