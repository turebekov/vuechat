const apiDomain = 'http://localhost:8888';
const loginUrl = apiDomain + 'oauth/token';
const userUrl = apiDomain + 'api/user';
const userListUrl = apiDomain + 'api/v1/user-list';
const getUserConversationUrl = apiDomain + 'api/v1/get-user-conversation';
const saveChatMessageUrl = apiDomain + 'api/v1/save-chat';

const getHeader = function () {
  const tokenData = JSON.parse(window.localStorage.getItem('authUser'));
  const headers ={
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + tokenData.access_token
  }
  return headers
};
