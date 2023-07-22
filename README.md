# Welcome, Good people!

<table>
  <tr>
    <td><img src="readme/amuletz.svg#play" style="width: 280px;"></td>
    <td><img src="readme/logo.svg" style="width: 600px;"></td>
  </tr>
</table>

## Introduction


<blockquote>Fuck the Babylon,<br>who's trying to see what I'm on</blockquote>

<img src="readme/1tru-badge.svg" align="right" style="width: 160px;">

This repository serves as a portal to the One True Internet, Web420.

Web420 combines the spirit of Internets of old with modern tech to provide the Good people with the One True Internet they deserve.

DeCent is a collection of protocols and tools that, when forces combine, hold the power to flip the traditional infrastructure of the Internet on its head, putting the power of connectivity back into the hands of the people.

**Project website**: https://futurehood.github.com/DeCent/

## Overview

DeCent is comprised of the following sub-projects:

<ul>
    <li>
        <a href="https://github.com/futurehood/DCNT">DCNT Protocol</a>
    </li>
    <li>
        <a href="https://github.com/futurehood/DeCent-Core">DeCent-Core (DCNT server)</a>    
    </li>
    <li>
        <a href="https://github.com/futurehood/DWA">DWA (Decentralized Web Application) Spec</a>
    </li>
</ul>

In addition to the core projects that are DeCent, implementations of DWAs are available as well:

<ul>
    <li>
        <span>DeCent Messenger - <a href="https://futurehood.github.io/DeCent-Messenger">Live Demo</a> / <a href="https://github.com/futurehood/DeCent-Messenger">Repository</a></span>
    </li>
</ul>

## Technical Overview

A DCNT server is a lightweight, self-hosted, HTTPS/WSS server that implements the DCNT protocol. Preferably, this server will be running locally. DWAs connect to DCNT servers to facilitate WebRTC peer-to-peer connections between browsers. Everything that happens within a DWA will occur over the established P2P networks the application creates, there is no dependence on external resources or services.

<img src="readme\connection-anatomy.png">



## FAQ

- **Is this for real?**



<table>
  <tr>
    <td><a href="https://github.com/futurehood/DeCent"><img src="readme/dcnt-compatible-badge.png" width="300"></a></td>
    <td><a href="https://github.com/futurehood/DWA"><img src="readme/dwa-logo3.png"width="120"></a></td>
  </tr>
</table>

## Features

<table>
  <tr>
    <th>Current Features</th>
    <th>Upcoming Features</th>
  <tr>
    <td>
      <ul>
        <li>Persistent peer-to-peer connections</li>
        <li>P2P text messaging</li>
        <li>P2P file transfers</li>
        <li>Avatar exchange</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Voice/video calls</li>
        <li>Encrypted datastore</li>
        <li>Key-based authentication</li>
      </ul>
    </td>
  </tr>
</table>

## About

Created by the wizard Future Hood in service of the Goodness, for the benefit of all humankind.

## Contribute

The project is in active development internally and lacks the resources to consider outside code contributions at this time. Instead, interested parties are encouraged to create their own DCNT-compatible, decentralized web applications (DWAs). Help build the true Internet. For more information on <a href="">DWA development</a>, or the <a href="">DCNT protocol</a>, please visit the respective repositories.

There may also be a need for help with another aspect of the DeCent project. Check the <a href="https://github.com/futurehood/DeCent">main project repository</a> if you're looking for something to help with.

## Support Development

`BTC: bc1qz9g5zjls3eapjdacwcgadw83apu22hnlwtj0sm`

`XMR: 43X5gj33PCaZ5NCQRD53kNa24KQoVbUUxayKaEcmpVyb5gfqcqG6KPR9MgrvT5k5cEQyKA1v3xNWidzZgynRKp1L4NAkZEh`

## Documentation

<details>
  <summary>
    <span>Installation Guide</span>
  </summary>
  <h2>System requirements</h2>
  <p>There are two ways to use this application:</p>
  <ul>
    <li>As a DeCent-Core user, or as a user of another DCNT server</li>
    <li>As a non-user of DeCent-Core, or any other DCNT server</li>
  </ul>
  <p>Both types of users require a modern web browser that supports WebRTC. Firefox is highly recommended.</p>
  <p>Users without a DCNT server running locally will be restricted to outgoing connections to DCNT server users. These users will also be restricted to accessing the application on traditonal hosting (like the demo here on Github), or figuring out another way to host the application locally within an SSL/TLS context.</p>
  <p>Users with a DCNT server running locally can both create outgoing connections and receive inbound connections. These users also have the option of easily installing the application locally using DeCent-Core or another DCNT server.</p>
  <p>For more information on DeCent-Core, or other DCNT servers, check the main <a href="https://github.com/futurehood/DeCent">project repository</a>.</p>
  <h2>Local Installation</h2>
  <p>To install DeCent Messenger locally using DeCent-Core, follow these steps:</p>
  <table>
    <tr>
      <td>
        <img src="readme/decent-messenger-install-1.png">
      </td>
      <td>
        <img src="readme/decent-messenger-install-2.png">
      </td>
      <td>
        <img src="readme/decent-messenger-install-3.png">
      </td>
      <td>
        <img src="readme/decent-messenger-install-4.png">
      </td>
      <td>
        <img src="readme/decent-messenger-install-5.png">
      </td>
      <td>
        <img src="readme/decent-messenger-install-6.png">
      </td>
    </tr>
  </table>
  <ol>
    <li>Open DeCent-Core and navigate to the Apps section. Use the <b><i>Add App</i></b> button to open the installation dialog.</li>
    <li>Paste the Installation URL of the DeCent-Messenger repository ZIP into the prompt.</li>
    <li>Wait while DeCent-Core fetches the application files and reads the manifest.</li>
    <li>Authorize DeCent Messenger when the prompt appears.</li>
    <li>Now DeCent-Core is installed locally.</li>
    <li>Manage the installation by opening the app options. The application can also be launched here when the DeCent-Core server is running.</li>
  </ol>
</details>
<details>
  <summary>
    <span>User Guide</span>
  </summary>
  <h2>Contents</h2>
  <ul style="list-style: none; padding: 0;">
    <li>
      <a href="#signing-in">Signing in</a>
    </li>
    <li>
      <a href="#creating-a-profile">Creating a profile</a>
    </li>
    <li>
      <a href="#creating-a-profile">Manage a profile</a>
    </li>
    <li>
      <a href="#creating-a-profile">Adding a server</a>
    </li>
    <li>
      <a href="#creating-a-profile">Managing a server</a>
    </li>
  </ul>
  <h2 id="signing-in">Signing In</h2>
  <table>
    <tr>
      <td><img src="readme/screens-how-to-3.png" width="600"></td>
      <td><img src="readme/screens-how-to-4.png" width="600"></td>
      <td><img src="readme/screens-how-to-5.png" width="600"></td>
    </tr>
  </table>
  <ol>
    <li>Upon opening the application, you will be prompted to sign in. Select the desired profile to continue. If necessary, create a new profile.</li>
    <li>The <b><i>Remember selection</i></b> option can be used to automatically sign in as specified user in the future.</li>
    <li>Once signed in, the UI will be empty. Everything is ready to go.</li>
  </ol> 
  <h2 id="creating-a-profile">Creating a Profile</h2>
  <table>
    <tr>
      <td><img src="readme/screens-how-to-1.png" width="600"></td>
      <td><img src="readme/screens-how-to-2.png" width="600"></td>
      <td><img src="readme/screens-how-to-3.png" width="600"></td>
    </tr>
  </table>
  <ol>
    <li>To create a profile, use the <b><i>Create a new profile</i></b> button on the Sign In dialog.</li>
    <li>Fill in the details, and use the <b><i>Save</i></b> button to submit the form.</li>
    <li>Sign in using the newly created profile</li>
  </ol>
  <h2>Managing a Profile</h2>
  <table>
    <tr>
      <td><img src="readme/screens-how-to-6.png" width="300"></td>
    </tr>
  </table>
  <ol>
    <li>Use the <b><i>Profile Settings</i></b> button in the top right of the UI to open the manage profile dialog.</li>
    <li>From here, the profile can be signed out, modified, or deleted.</li>
  </ol>
  <h2>Managing Servers</h2>
  <table>
    <tr>
      <td><img src="readme/screens-how-to-7.png" width="600"></td>
      <td><img src="readme/screens-how-to-8.png" width="600"></td>
      <td><img src="readme/screens-how-to-9.png" width="600"></td>
      <td><img src="readme/screens-how-to-10.png" width="600"></td>
    </tr>
  </table>
  <ol>
    <li>To manage the servers associated with a profile, sign in to the profile, and use the <b><i>Server Settings</i></b> button to open the manage servers dialog.</li>
    <li>To add a server, enter the host address in the <b><i>Address</i></b> field and use the <b><i>Add</i></b> button to submit the form.</li>
    <li>Once the server has been added, the connection state can be controlled by the <b><i>Toggle Connection State</i></b> button.</li>
    <li>Green indicators mean the connection was successful and is ongoing. The indicator at the top (also serving as the <b><i>Server Settings</i></b> button) will only be green if all servers are connected successfully.</li>
    <li>If there is an error with one of the servers, the indicator will be orange. If no servers are connected the indicator will be red.</li>
  </ol>
  <h2>Adding a Contact</h2>
  <table>
    <tr>
      <td><img src="readme/screens-how-to-11.png" width="300"></td>
      <td><img src="readme/screens-how-to-12.png" width="300"></td>
    </tr>
  </table>
  <ol>
    <li>To add a contact, use the <b><i>Add Contact</i></b> button in the top left of the UI to open the proper dialog.</li>
    <li>Fill in the <i>Name</i> field and the <i>Address</i> field and use the <b><i>Save</i></b> button to submit the form.</li>
  </ol>
  <h2 id="managing-a-contact">Managing a contact</h2>
  <table>
    <tr>
      <td><img src="readme/screens-how-to-14.png" width="600"></td>
      <td><img src="readme/screens-how-to-15.png" width="600"></td>
      <td><img src="readme/screens-how-to-16.png" width="600"></td>
    </tr>
  </table>
  <ol>
    <li>Hover over the contact in the Contacts list to expose the <b><i>More options</i></b> button. Use the button to open the manage contact dialog</li>
    <li>From here the contact can be contacted, modified, or deleted.</li>
    <li>The Contact dialog also has a <b><i>More options</i></b> button.</li>
  </ol>
  <h2>Send a message</h2>
  <table>
    <tr>
      <td><img src="readme/screens-how-to-17.png" width="600"></td>
      <td><img src="readme/screens-how-to-18.png" width="600"></td>
      <td><img src="readme/screens-how-to-19.png" width="600"></td>
      <td><img src="readme/screens-how-to-20.png" width="600"></td>
    </tr>
  </table>
  <ol>
    <li>To send a message to a contact, hover over the contacts list to expose the <b><i>Messaging</i></b> button</li>
    <li>After the messaging window appears, input a message in the text box.</li>
    <li>Use the green <b><i>Send message</i></b> button to send the message to the contact.</li>
    <li>Maybe you will get a reply!</li>
  </ol>
  <h2>Managing a messaging session</h2>
  <table>
    <tr>
      <td><img src="readme/screens-how-to-21.png" width="600"></td>
      <td><img src="readme/screens-how-to-22.png" width="600"></td>
      <td><img src="readme/screens-how-to-23.png" width="600"></td>
      <td><img src="readme/screens-how-to-24.png" width="600"></td>
    </tr>
  </table>
</details>






