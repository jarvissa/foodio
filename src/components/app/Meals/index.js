import Wrapper from "../../ui/Wrapper";
import Card from "../../ui/Card";
import Meal from "./Meal";

function Meals() {
  const meals = [
    {
      id: 1,
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: 2,
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: 3,
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: 4,
      name: "Green Bowl",
      description: "Healthy and green",
      price: 18.99,
    },
  ];

  return (
    <Wrapper className="p-5">
      <Card className="max-w-3xl mx-auto px-7 py-8 bg-white">
        {meals.map((meal) => (
          <Meal meal={meal} key={meal.id}></Meal>
        ))}
      </Card>
    </Wrapper>
  );
}

export default Meals;
