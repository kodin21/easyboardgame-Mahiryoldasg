function Character({ skin, pozition = { x: 0, y: 0 } }) {
  return (
    <div
      style={{
        position: 'absolute',
        display: 'inline-block',
        height: '25px',
        width: '25px',
        left: pozition.x,
        top: pozition.y,
        backgroundColor: `${skin}`,
      }}
    ></div>
  );
}

export default Character;
