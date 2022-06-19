
const getDate = () => {
  const date = new Date();
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}

export const HelloWorldApp = () => {
  return (
    <h1>Fecha del día: {getDate()}</h1>
  )
}

// FirstApp
