# Aid-vertize Browser Extension

### Generating the dist directory:
- Ensure that you have Git installed on your device: https://git-scm.com/
- In the terminal, navigate to the directory where you want to clone the repository, then run the command ```git clone https://github.com/dysfunctioned/Aid-vertize.git```
- Navigate to the ```chrome-ext``` directory within the cloned repository, then install the dependencies by running ```npm install``` in the terminal
- Within the ```chrome-ext``` directory, generate the ```dist``` directory by running ```npm run build``` in the terminal
- When any changes are made to code within the repository, run ```git pull``` to update your local files, then ```npm run build``` to regenerate the ```dist``` directory

### Loading the extension onto Chrome:
- To load the extension onto Chrome, type ```chrome://extensions/``` in the address bar
- Click the 'Load unpacked' button and select the ```chrome-ext/dist``` directory within the repository

### Instructions for development:
- Ensure that your local repository is synced with the remote repository by running ```git pull``` in the terminal
- Create a new branch using your IDE or the terminal: https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging
- After making any changes to code in the ```chrome-ext``` directory, recompile the code by running the command ```npm run build``` in the terminal
- Reload the extension in your browser to view your changes
- Publish the branch using the IDE or the terminal, then create a pull request using GitHub or your IDE
