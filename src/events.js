// Server와 Client 사이 Socket에서 발생하는 event들 적어놓음
const events = {
  setNickname: "setNickname",
  newUser: "newUser",
  disconnect: "disconnect",
  disconnected: "disconnected",
  sendMsg: "sendMsg",
  newMsg: "newMsg",
};

export default events;
