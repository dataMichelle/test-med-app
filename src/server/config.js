export const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : "add your theia server side url";
console.log("API_URL :", API_URL);

// export const API_URL =
//   window.location.hostname === "localhost"
//     ? "http://localhost:5000"
//     : "https://your-production-url.com";
// console.log("API_URL :", API_URL);
