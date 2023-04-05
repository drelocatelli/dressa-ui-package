import { DropDown } from './lib';
import Alert from './lib/alert.component';

function App() {
    return (
        <div style={{ fontFamily: 'Open Sans', fontSize: '15px' }}>
            <DropDown>
              Dropdown menu
              <DropDown.Content>
                Opa
              </DropDown.Content>
            </DropDown>

            <br /><br /><br />

            <Alert button={<>Clique em mim!</>} close={<>x</>}>
              Eu sou um alert!
            </Alert>
        </div>
    );
}

export default App;
