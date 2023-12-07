# GitHub Repository Privatizer

## Description
This script automates the process of setting GitHub repositories to private. You can customize the keyword targeting logic to match your preferences for finding repositories.

## Technology
- **Language**: JavaScript
- **Runtime**: Node.js
- **Dependencies**: Axios

## Directions
1. **Install Node.js**: Ensure you have Node.js installed on your system.
2. **Clone the Repository**: Clone this repository to your local machine.
3. **Install Dependencies**: Run `npm install` to install the required Axios package.
4. **Set Up Keyword Logic**: Open the script and locate the section where the keyword targeting logic is defined. You can customize it to match your criteria for identifying repositories to privatize. For example, change the logic from `startsWith('WK') || startsWith('wk')` to your preferred condition.
5. **Set Up Authentication**: Replace `'your_github_username'` and `'your_personal_access_token'` in the script with your actual GitHub username and personal access token. Ensure the token has `repo` scope permissions.
6. **Run the Script**: Execute the script using the command `node script.js`.
7. **Caution**: Test the script with a few repositories first and use it responsibly. Ensure compliance with GitHub's terms of service.
