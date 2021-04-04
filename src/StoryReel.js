import React from "react";
import "./StoryReel.css";
import Story from "./Story";
function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        profileSrc="https://avatars.githubusercontent.com/u/62622764?s=400&u=24f7ae1d24095154e6b45f6c24d26ce0dfa936d9&v=4"
        title="Subham Paul"
      />
      <Story
        image="https://images.unsplash.com/photo-1526925539332-aa3b66e35444?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80"
        profileSrc="https://avatars.githubusercontent.com/u/39834046?v=4"
        title="Vanitha Kunta"
      />

      <Story
        image="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
        profileSrc="https://avatars.githubusercontent.com/u/10437070?v=4"
        title="Anirban Santara"
      />

      <Story
        image="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=891&q=80"
        profileSrc="https://avatars.githubusercontent.com/u/5855893?v=4"
        title="Luke Edwards"
      />
      <Story
        image="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
        profileSrc="https://avatars.githubusercontent.com/u/11875?v=4"
        title="Earle F.philhower"
      />
    </div>
  );
}

export default StoryReel;
