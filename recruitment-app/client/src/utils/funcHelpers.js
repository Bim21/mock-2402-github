export const formatString = () => {};

export const getUserInfo = () => {
  const userInfo = localStorage.getItem("userInfo");
  return userInfo ? JSON.parse(userInfo) : null;
};
  
export const getEmployerInfo = () => {
  const employerInfo = localStorage.getItem("employerInfo");
  return employerInfo ? JSON.parse(employerInfo) : null;
};

// params nhận vào là 1 array
// hàm có nhiệm vụ lọc ra các item trong array có value là ""
export const removeNullItems = (arr) => {
  return arr.filter((item) => item !== "");
};

// params nhận vào là 1 object
// hàm có nhiệm vụ xóa các key trong object có value là empty (null, undefined, "")
export const removeEmptyValue = (object) => {
  const filteredArray = Object.entries(object).filter(
    ([, v]) => v !== null && v !== undefined && v !== ""
  );
  return Object.fromEntries(filteredArray);
};
