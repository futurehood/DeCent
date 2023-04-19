# User Guidebook

Welcome to the DeCent User Guidebook. This document describes how to install, configure, and use the DeCent-Core application.

<br>

# Contents

<a href="">System Requirements</a><br>
<a href="">Installation</a><br>
<a href="">Application Configuration</a><br>
<a href="">Server Configuration</a><br>
<a href="">Security</a><br>
<a href="">Using Decentralized Apps</a><br>
<a href="">Resources</a><br>

<br>

# System Requirements

There are two user classes under the DCNT protocol:

1. DeCent-Core <b>users</b>, who have installed and are actively running a DeCent-Core instance.
2. <b>Non-users</b>, who are not running DeCent-Core, but are still interacting with DeCent-Core services.

## System requirements for DeCent-Core users:

1. A system running a compatible OS (Windows)
2. A modern web browser (Firefox/Brave)
3. Network access (public or private)
4. A Reachable network address (public or private)

## System requirements for non-users:

1. A modern web browser
2. Network access (where an active DeCent-Core instance is reachable)

<br>

# Installation

DeCent-Core can be installed by downloading an executable from the <a href="">Downloads</a> section on the project repository. DeCent-Core is distributed as a stand-alone portable application.

<br>

## Permissions

Depending on your operating system, DeCent-Core installation may require additional permissions to access specific functionality like using networking adapters or the device filesystem.

- DeCent-Core only will read and write user-specified files, or files that were created during application configuration which are used internally.

- DeCent-Core will only access or listen to network adapters when instructed by the user. 

<br>

## Process Overview

DeCent-Core is distributed as executables for specific environments. After selecting the proper format for a given operating system, the executable can be used to extract the application files to a location specified by the user. Once the files have been extracted, the <b>DeCent-Core.*</b> executable can be run to launch the application. 


<br>

## Running DeCent-Core on Windows:

1. Download the latest <b>DeCent-Core-1.0.0.exe</b> executable from the project <a href="">Downloads</a> section.
2. Use the embedded installer to extract the application files to a desirable location, i.e. <i>C:\Program Files\DeCent-Core</i>
3. After installation, open the folder containing the application files and run the <b>DeCent-Core.exe</b> executable to launch the application.
    
<b>NOTE:</b> If DeCent-Core is installed in the <i>Program Files</i> directory on Windows, you will need to set the application to "<i>Run As Administrator</i>" in order obtain permission to write to the filesystem.

<br>

# Operation

## Application Configuration

<img src="./assets/screenshot-application-configuration.svg" style="width: 13%;" align="right">

Once DeCent-Core has been installed, the instance needs to be configured for the device it's running on. The application needs to create four files in order to function:

- JSON configuration file
- SQLite database file
- SSL/TLS certificate keystore file
- Trusted certificate keystore file

These files can be located anywhere on the filesystem, as long as DeCent-Core knows the location via the JSON configuration file.

To change the locations of these files, the desired location can be specified in the <i>Application Configuration</i> dialog when the application loads for the first time, or in the Settings section of the app.

<hr>

## Dashboard

The Dashboard section of DeCent-Core features the controls used start or stop the embedded server, the ability to monitor the server status in realtime, and quickly switching between stored profiles. The Dashboard also offers an overview of the settings for the current profile.

### Starting the server

To start the DeCent-Core server, use the green power button.

### Stopping the server

To start the DeCent-Core server, use the red power button.

### Switching profiles

To quickly switch between stored profiles, use the <i>Active Profile</i> dropdown.

<b>NOTE:</b> If the server is running, switching profiles will have no effect. The server must be restarted each time the profile is changed.


<hr>

## Apps

The Apps section of DeCent-Core allows the user to manage client application authorizations and install remote applications locally.


### Authorizing Apps

To authorize an app: 

- Ensure that DeCent-Core is running
- Navigate to the app in a web browser, and invoke an authorization request
- Allow the authorization request in DeCent-Core
- The application will be authorized across all local browsers

To deny an app:

- Ensure that DeCent-Core is running
- Navigate to the app in a web browser, and invoke an authorization request
- Deny the authorization request in DeCent-Core
- The application will be denied

### Deauthorizing Apps

To deauthorize an app:

Open the target application's dialog, and use the <i>Remove</i> button. Confirm the confirmation dialog.


### Using Apps

Once an application has been authorized, it is free to interact with the DeCent-Core server, and any applications relying on it should now function.

<hr>

## Settings

The Settings section of DeCent-Core allows users to manage the current server settings, save or edit profiles of preferred server settings, manage application certificates, and manage the system configuration.
