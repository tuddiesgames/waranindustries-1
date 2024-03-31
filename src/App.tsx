import {
  IonApp,
  setupIonicReact
} from '@ionic/react';
import React from 'react';
import Main from './Tabs/Main.tsx';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <Main />
  </IonApp>
);

export default App;
