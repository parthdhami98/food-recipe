import React from "react";
import { useState, useEffect } from "react";
import { Input, Form, Button } from "antd";
import axios from "axios";
import GetRecipes from "./GetRecipes";

const api_id = "05291839";
const api_key = "89c214b7b21e178d0c77fcd936d2a381";

function Recipe() {
  const [search, setsearch] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [query, setquery] = useState("");

  useEffect(
    () => {
      getrecipe();
    },
    [query]
  );

  const getrecipe = async () => {
    const recipeUrl = `https://api.edamam.com/search?q=${query}&app_id=${api_id}&app_key=${api_key}`;
    let error;
    try {
      let response = await axios.get(recipeUrl);
      let data = response.data;
      if (response.status !== 200) {
        throw new error("Something went wrong");
      }
      setrecipes(data.hits);
    } catch (e) {
      console.log(e);
    }
  };

  const handlechange = event => {
    setsearch(event.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setquery(search);
  };

  return (
    <div>
      <div className="header">
        <div style={{ display: "flex" }}>
          <img
            src="http://www.gowebdesigns.com/style/images/logo/26.jpg"
            alt=""
            className="logo-image"
          />
          <i>
            <h1 style={{ margin: 50, marginLeft: 160 }}>
              Your diet is a bank account. Good food choices are good
              investments
            </h1>
          </i>
        </div>

        <Form onSubmit={getSearch} className="form">
          <Input
            onChange={handlechange}
            name="search"
            value={search}
            className="search"
            placeholder="Search for your recipe"
            enterButton="Search"
            size="default"
          />
          <Button htmlType="submit" type="primary">
            Search
          </Button>
        </Form>
        <div>
          <GetRecipes recipes={recipes} />
        </div>
      </div>
      <style global jsx>{`
        .header {
          background-color: aliceblue;
          height: 145px;
          width: 100%;
        }

        .logo-image {
          height: 50;
          width: 120px;
          margin: 11px;
          margin-left: 50px;
          display: "inline-block";
        }

        .form {
          width: 500px;
          padding: 30px;
          margin: auto;
          display: flex;
          justify: center;
        }
      `}</style>
    </div>
  );
}

export default Recipe;
