import { Dropdown } from "react-bootstrap";
import { Context } from "../..";
import { useContext } from "react";
import { observer } from "mobx-react-lite";

const TypeDropdown = observer(() => {
  const { materialList } = useContext(Context);
  return (
    <Dropdown style={{ color: "black" }}>
      <Dropdown.Toggle
        variant="outline-warning"
        id="dropdown-basic"
        style={{ color: "black" }}
      >
        {materialList.selectedMaterial.name || "Выберите материал"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {materialList.vinyl.map((i) => (
          <Dropdown.Item
            key={i.id}
            onClick={() => materialList.setSelectedVinyl(i)}
          >
            {i.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
});

export default TypeDropdown;
