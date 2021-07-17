add delete and edit page tab and admin tab of ink admin panel
Add delete and edit admin and pages of ink admin panel
Introduction:
In this project we are doing
1.	Add an admin
2.	Edit an admin
3.	Delete an admin
4.	Add page
5.	Delete page
6.	Edit page
Technologies:
By using
1.	Cypress
2.	Xpath
Editor:
On vs code /*you can use any editor of your own choice that support JS*/

Working:
On the side bar of vs code, click on CYPRRESS folder and then click on INTEFRATION folder
 
In the integration folder make a file having name admin-page.spec.js /*you can take any name with extension  .spec.js*/
                                        
Now, write     /// <reference types ="cypress"/>
/*add reference of cypress at the top of page*/
 
Now make a folder name page-object having file navigate-to-page.js
 
Now again add refeence of cypress at the top of page by writing
/// <reference types ="cypress"/>
 
Now at the side bar click on cypress folder and then click on fixture folder and make a file having name url-file.json to store the url of website
 
In the file add the url in array form
 
 You can also check the file format in the example.json file for your better understanding
Now go to google open ink admin panel , copy the above url 
 
and paste between the inverted commas of “url” 
 
Here we done with URL
Now, go to the navigate-to-page.js file in the page-object folder and import the url file at the top after the reference
 
now make a simple export function, call fixture folder by typing cy.fixture(‘ ’)write the same file name in the commas that you take in fixture folder without extension, in our case it will become cy.fixture(‘url-file’)
now use .than and make a simple function ,passes an argument data to call the array index from url-file
use cy.visit that visit the url-file and call url that define at index 0  
 

