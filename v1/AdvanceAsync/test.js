const fetchingData = () => {
  fetch("https://dummyjson.com/users/1")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let retData = data;
      console.log("Response::>", JSON.stringify(retData));
      return retData;
    })
    .catch((e) => {
      console.log("eerror", e);
    });
};
fetchingData();
