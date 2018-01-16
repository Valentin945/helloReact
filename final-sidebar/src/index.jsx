import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import UIinterface from './component/UIinterface.jsx'

const Launch = (
  <UIinterface
    topMenuItem={{
      '0': { type: 'general', action: 'open', icon: 'sidebar', iconSize: 'big', float: 'left', display: 'tablet' },
      '1': { type: 'img', path: '/home/valentin/React/sideBar/client/app/sideBar8/img/WAB-logo.png', text: 'Bastion', float: 'left'},
    }}
    topMenuColor='white'
    topMenuHeight='50px'

    position='left'
    sideBarItem={{
      'address book outline': { name: 'My Preferences', subMenu: [] },
      'shield': { name: 'My Authorizations', subMenu: ['Sessions', 'Passwords'] },
      'search': { name: 'Audit', subMenu: ['Current Sessions', 'Session History', 'Account History', 'Approval History', 'Authentification History', 'Connection Statistics'] },
      'users': { name: 'Users', subMenu: ['Accounts', 'Groups', 'Profiles'] },
      'chain': { name: 'Ressources', subMenu: ['Domains', 'Devices', 'Applications', 'Accounts', 'Clusters', 'Groups', 'Checkout Policies'] },
      'key': { name: 'Password Management', subMenu: ['Password Change plugins', 'Password Change Policies'] },
      'desktop': { name: 'Session Management', subMenu: ['Recording Options', 'Connection Policies'] },
      'hand outline right': { name: 'Authorizations', subMenu: ['Manage Authorizations', 'My current approvals', 'My approval history'] },
      'configure': { name: 'Configuration', subMenu: ['Time Frames', 'External Authentifications', 'LDAP/AD Domains', 'Notifications', 'Local Password policy', 'Connection Parameters', 'x509 Parameters', 'Configuration options', 'API keys', 'License', 'Encryption', 'audit logs'] },
      'disk outline': { name: 'System', subMenu: ['Status', 'Network', 'Time service', 'Remote Storage', 'Siem integration', 'Snmp', 'SMTP Server', 'Service Control', 'Syslog', 'Boot Messages', 'Backup/Restore'] },
      'folder open': { name: 'Import/Export', subMenu: ['csv', 'Users from LDAP'] }
    }}
  
  />
)

ReactDOM.render(Launch, document.getElementById('appLaunch'))
