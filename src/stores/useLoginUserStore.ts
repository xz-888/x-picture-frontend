import { defineStore } from "pinia";
import { ref } from "vue";

export const useLoginUserStore = defineStore("loginUser", () => {
  const loginUser = ref<any>({
    userName: "未登录",
  });

 async function fetchLoginUser() {
  // 测试用户登录，3 秒后登录  后端接口请求获取登录用户信息，暂时模拟登录
  setTimeout(() => {
    loginUser.value = { userName: '测试用户', id: 1 }
  }, 3000)
}


  function setLoginUser(newLoginUser: any) {
    loginUser.value = newLoginUser;
  }

  
  return { loginUser, setLoginUser, fetchLoginUser };
});
