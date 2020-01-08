import React from "react";
import { Card } from "antd";

function GetRecipes(props) {
  const { recipes } = props;

  return (
    <div>
      <div
        style={{
          marginLeft: 150,
          display: "flex",
          justifyContent: "spaceAround",
          flexWrap: "wrap"
        }}
      >
        {recipes.map((recipe, index) =>
          <div key={index} className="food-items">
            <Card>
              <h3 style={{ textAlign: "center" }}>
                {recipe.recipe.label}
              </h3>
              <img className="image" src={recipe.recipe.image} alt="" />

              <div className="ingredients">
                <ul>
                  {recipe.recipe.ingredientLines.map((ingredients, index) =>
                    <li>
                      {ingredients}
                    </li>
                  )}
                </ul>
              </div>
            </Card>
          </div>
        )}
      </div>
      <style global jsx>{`
        .food-items {
          width: 350px;
          height: auto;
          margin: 20px;
          flexWrap: "nowrap | wrap ";
          box-shadow: 5px 10px 18px #888888;
        }

        .ingredients {
          padding: 15px;
        }

        .image {
          width: 300px;
          height: 200px;
          display: flex;
          justify: center;
        }
      `}</style>
    </div>
  );
}

export default GetRecipes;
