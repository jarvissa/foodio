import Wrapper from "../../ui/Wrapper";
import Card from "../../ui/Card";

function Info() {
  return (
    <Wrapper className="p-5">
      <Card className="relative max-w-lg p-5 mx-auto -mt-44 text-center bg-gray-600 text-white">
        <h1 className="text-3xl font-bold">Delicious Food, Delivered To You</h1>
        <br />
        <p className="text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
          distinctio, ullam ratione qui voluptatum corporis? Voluptatum dolore
          quos tempore corrupti possimus doloremque nemo aspernatur iusto
          laborum in saepe, delectus odio!
        </p>
        <br />
        <p className="text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ipsa
          vel enim ipsum ut molestiae, placeat numquam. Delectus, asperiores.
          Error amet est esse eos iusto vel in animi ipsum fugiat.
        </p>
      </Card>
    </Wrapper>
  );
}

export default Info;
