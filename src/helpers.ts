import config from "./config.json";
const BACKEND_PORT = config.BACKEND_PORT;

const generateApiFunction = (method: "POST" | "GET" | "PUT" | "DELETE") => {
  type JSONData = Record<string, any>;

  return async function (
    path: string,
    data: JSONData,
    userToken: string | null
  ) {
    let reqBody;
    let urlToFetch = `http://localhost:${BACKEND_PORT}/${path}`;
    if (method === "GET" || method === "DELETE") {
      urlToFetch += `?${data}`;
    } else {
      reqBody = JSON.stringify(data);
    }

    const response = await fetch(urlToFetch, {
      method: method,
      body: reqBody,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    });
    return await response.json();
  };
};

export const apiCallPost = generateApiFunction("POST");
export const apiCallPut = generateApiFunction("PUT");
export const apiCallGet = generateApiFunction("GET");
export const apiCallDelete = generateApiFunction("DELETE");
