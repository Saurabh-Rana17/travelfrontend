export function checkAdmin(userState) {
  let isAdmin = false;
  if (userState?.email === "saurabhrana200317@gmail.com") {
    isAdmin = true;
  }
  return { isAdmin };
}
