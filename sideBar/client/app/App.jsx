/**
  \author Valentin LAMBERT
  \brief Main file for the react parts of the project
*/

import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import SideBar1 from './sideBar1/SideBar1.jsx'
import SideBar2 from './sideBar2/SideBar2.jsx'
import SideBar3 from './sideBar3/SideBar3.jsx'
import SideBar4 from './sideBar4/SideBar4.jsx'
import SideBar5 from './sideBar5/SideBar5.jsx'
import SideBar6 from './sideBar6/SideBar6.jsx'
import SideBar7 from './sideBar7/SideBar7.jsx'
import SideBar8 from './sideBar8/SideBar8.jsx'



class App extends React.Component {
  render() {
    return (
      <main>
        <Switch>
            {/* <Redirect from='/' to='/sideBar1'/> */}
          <Route path='/sideBar1' component={SideBar1}/> 
          <Route path='/sideBar2' component={SideBar2}/>
          <Route path='/sideBar3' component={() => (<SideBar3 logos={['camera', 'gamepad', 'home']}/>)} />
          <Route path='/sideBar4' component={() => (<SideBar4 logos={{
                                                                      'camera': 'Camera',
                                                                      'gamepad': 'Gameboy',
                                                                      'home' : 'Home'
                                                                    }}/>)} />
                                                                      
           <Route path='/sideBar5' component={() => (<SideBar5 logos={{
                                                                      'camera': {name: 'Camera', content: ['Nikon', 'Canon', 'Dell']},
                                                                      'gamepad': {name: 'Gameboy', content: ['Nintendo', 'Playstation', 'Xbox']},
                                                                      'home' : {name: 'Home', content: ['Appartement', 'Maison', 'Chalet']}
                                                                    }}/>)} />

          <Route path='/sideBar6' component={() => (
            <SideBar6 menuItem={{'camera': {index: 0, header: 'camera', subItem: ['first', 'second', 'three']},
                                 'gamepad': {index: 1, header: 'VideoGames', subItem:['four', 'five', 'six']}

            }
            } />
          )}/>
          <Route path='/sideBar7' component={() => <SideBar7 />} />
          <Route path='/sideBar8' component={() => <SideBar8 
                                                      sideBarItem={{
                                                        'gamepad': {name: 'My Authorizations', subMenu: ['Sessions', 'Passwords'] },
                                                        'camera': {name: 'Audit', subMenu: ['Current Sessions', 'Session History', 'Account History', 'Approval History', 'Authentification History', 'Connection Statistics'] },
                                                        'tag': {name: 'Users', subMenu: ['Accounts', 'Groups', 'Profiles'] }
                                                        
                                                      }}
                                                      />} />
        </Switch>
      </main>
    
    );
  }

}



export default App;