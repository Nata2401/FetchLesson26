const getData = ({ url, method = "GET" }) => fetch(url, { method });

const sendData = ({ url, method = "POST", data = {} }) =>
  fetch(url, { method, body: data });

getData({ url: "db.json" })
  .then((data) => data.json())
  .then((json) => {
    console.log(json);

    sendData({
      url: "https://jsonplaceholder.typicode.com/posts",
      data: JSON.stringify(json),
    })
      .then(() => {
        console.log("Данные успешно отправлены");
      })
      .catch(() => console.error(new Error("Ошибка отправки данных")));
  })
  .catch(() => {
    console.error(new Error(`Ошибка при получении файла`));
  });
