import type { JSX } from "react";

import styles from "./ProfileCard.module.css";



interface Props {
  avatarUrl: string;
  firstName: string;
  lastName: string;
  occupation: string;
  hobbies: string;
}

export default function ProfileCard(props: Props): JSX.Element {
  const { avatarUrl, firstName, lastName, occupation, hobbies } = props;

  return (
    <div className={styles.card}>
      <img
        src ={avatarUrl}
        alt={`${firstName} ${lastName}`}
        width="100"
        height="100"
      />
      <h2>
        {firstName} {lastName}
      </h2>
      <p>
        <strong>Occupation:</strong> {occupation}
      </p>
      <p>
        <strong>Hobbies:</strong> {hobbies}
      </p>
    </div>
  );

  
}
