// import { useState } from "react";
import "./App.css";
import TwitterFollowCard, {
  TwitterFollowCardConfig,
} from "./TwitterFollowCard";

const users: TwitterFollowCardConfig[] = [
  {
    userName: "pheralb",
    name: "Pablo Hernandez",
    initialIsFollowing: true,
  },
  {
    userName: "goncy",
    name: "Gonzalo",
    initialIsFollowing: false,
  },
  {
    userName: "vxnder",
    name: "Vanderhart",
  },
];

function App() {
  return (
    <section className="app">
      {users.map((user) => {
        const { userName, name, initialIsFollowing } = user;

        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            name={name}
            initialIsFollowing={initialIsFollowing}
          />
        );
      })}
    </section>
  );
}

// function App() {
//   const [name, setName] = useState("goncy");
//   // Se puede pasar funciones como props
//   // const format = (username: string) => `@${username}`;

//   // Pasa elementos como props
//   // const formattedUserName = <span>@miduDev</span>;

//   return (
//     <section className="app">
//       <TwitterFollowCard
//         // formattedUserName={formattedUserName}
//         userName="pheralb"
//         name="Pablo Hernandez"
//         initialIsFollowing
//       />
//       <TwitterFollowCard
//         // formattedUserName={formattedUserName}
//         userName={name}
//         name="Gonzalo"
//         initialIsFollowing={false}
//       />
//       <TwitterFollowCard
//         // formattedUserName={formattedUserName}
//         userName="vxnder"
//         name="Vanderhart"
//       />

//       <button onClick={() => setName("midudev")}>Cambio de nombre</button>
//     </section>
//   );
// }

export default App;
