import type { JSX } from "react";
import ProfileCard from "../ProfileCard/ProfileCard";

export default function Homework02(): JSX.Element {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Homework 02: </h1>
      <h2>ProfileCard:</h2>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <ProfileCard
          avatarUrl="https://st2.depositphotos.com/2060147/47019/i/450/depositphotos_470198826-stock-photo-good-idea-satisfied-man-holds.jpg"
          firstName="John"
          lastName="Doe"
          occupation="Software Engineer"
          hobbies="Hiking, Reading, Traveling"
        />
        <ProfileCard
          avatarUrl="https://static.tildacdn.com/tild3066-6336-4039-a562-316561313731/pleasant-looking-cau.jpg"
          firstName="Jane"
          lastName="Doe"
          occupation="Engineer"
          hobbies="Hiking, Reading, Swimming"
        />
        <ProfileCard
          avatarUrl="https://i.pinimg.com/736x/0e/7c/01/0e7c01d6dd5c76f78a7e48016b63ec10.jpg"
          firstName="Alice"
          lastName="Smith"
          occupation="Designer"
          hobbies="Painting, Traveling, Music"
        />
      </div>
    </div>
  );
}
