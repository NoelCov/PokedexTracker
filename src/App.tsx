import "./App.css";
import { InputComponent } from "./components/input/input.component";
import { Navbar } from "./components/navbar/navbar.component";
import { PokemonTable } from "./components/pokemon-table/pokemon-table.component";

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <div className="inputContainer">
                <InputComponent
                    type="text"
                    placeholder="Search for a pokemon here"
                />
            </div>
            <PokemonTable />
        </div>
    );
}

export default App;
