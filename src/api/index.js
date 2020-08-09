import axios from 'axios';
// 액시오스 초기화 함수
function createInstance() {
  return axios.create({
    baseURL: "http://www.juso.go.kr",
  });
}

export const instance = createInstance();
