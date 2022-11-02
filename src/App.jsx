import React from "react";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import data from "./data";

export default function App() {

  return (
    <div>
      <Navbar />
      <section>
        {data.map(entry => {
          return (
            <>
              <Post
                key={entry.id}
                {...entry} />
              {entry.id !== data.length && <hr className="line"></hr>}
            </>
          );
        })}

      </section>
    </div>
  );
}

