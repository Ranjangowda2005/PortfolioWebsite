import React from "react";
import { useEffect } from "react";
import axios from "axios";

const carts = () => {
  useEffect(() => {
    axios
      .get("https://dummyjson.com/carts")
      .then((res) => {
        console.log(res.data.carts);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return <div>Carts</div>;
};

export default carts;
