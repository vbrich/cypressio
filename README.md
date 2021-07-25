# cypressio

This site isn't really a site. Just a blank npm project, but installed the Cypress module so I could play with their runner and basic external tests. Cypress wasn't really designed for internal testing. It is meant to be integrated into existing apps, so doubtful this repo will go very far. 

https://www.youtube.com/watch?v=OIAzwr-_jhY

1 - Create a NPM Project

	• npm init
	• npm i cypress

Notice that cypress created a folder with 4 folders. (couple folders added after initial tests)

	1. Fixtures
		a. This is dummy data you want to use during testing. Mock data, etc. 
	2. Integration
		a. Your test spec/test files live here. Each file contains at least a single describe() and can have multiple tests. 
	3. Plugins
		a. Extends existing cypress installation. Supporting OAuth may require this. 
	4. Support 
		a. Re-usable code goes here

2 - Run Project

	• npx cypress open
		○ just calls /node_modules/.bin/cypress open

3 - Demo Headless Flow (CI/CD)

	• npx cypress run --headless

