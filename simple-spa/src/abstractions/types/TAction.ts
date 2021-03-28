type TAction<Type, Payload> = {
  type: Type,
  payload: Payload
}

export default TAction;