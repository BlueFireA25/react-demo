import { useState } from "react";

export interface TwitterFollowCardConfig {
  // formatUserName: (username: string) => string;
  // formattedUserName: JSX.Element;
  userName: string;
  name: string;
  initialIsFollowing?: boolean;
}

function TwitterFollowCard({
  // formatUserName,
  // formattedUserName,
  userName,
  name,
  initialIsFollowing = false,
}: TwitterFollowCardConfig) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw__followCard--button is-following"
    : "tw__followCard--button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw__followCard">
      <header className="tw__followCard--header">
        <img
          className="tw__followCard--avatar"
          src={`https://unavatar.io/${userName}`}
          alt="El Avatar de el humano 62"
        />
        <div className="tw__followCard--info">
          <strong>{name}</strong>
          {/* <span className="tw__followCard--infoUserName">
            {formatUserName(userName)}
          </span> */}
          {/* <span className="tw__followCard--infoUserName">
            {formattedUserName}
          </span> */}
          <span className="tw__followCard--infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button onClick={handleClick} className={buttonClassName}>
          <span className="tw__followCard--text">{text}</span>
          <span className="tw__followCard--stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}

export default TwitterFollowCard;
