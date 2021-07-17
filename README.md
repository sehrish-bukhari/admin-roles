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

![1](https://user-images.githubusercontent.com/66178942/126042231-077fe945-16e9-462a-8575-9ca740ea767c.png)

In the integration folder make a file having name admin-page.spec.js /*you can take any name with extension  .spec.js*/

![2](https://user-images.githubusercontent.com/66178942/126042353-f7421419-eb1a-4764-a192-87a4ff4fe0c1.png)

Now, write     /// <reference types ="cypress"/>
/*add reference of cypress at the top of page*/

![3](https://user-images.githubusercontent.com/66178942/126042427-745a5be2-2323-43be-95e2-8329d8f6964c.png)

Now make a folder name page-object having file navigate-to-page.js

![4](https://user-images.githubusercontent.com/66178942/126042466-ffc4e3a3-c5c3-4f46-8e8c-d86154d7bbef.png)

Now again add reference of cypress at the top of page by writing
/// <reference types ="cypress"/>

![5](https://user-images.githubusercontent.com/66178942/126042505-0530987e-1c84-4b8b-9270-9e50861fc27e.png)

Now at the side bar click on cypress folder and then click on fixture folder and make a file having name url-file.json to store the url of website

![6](https://user-images.githubusercontent.com/66178942/126042550-b8097a51-39fa-4992-bf28-5ad6341b4183.png)

In the file add the url in array form

![7](https://user-images.githubusercontent.com/66178942/126042567-831b2415-8faf-4e5a-8551-405186677fa9.png)

 You can also check the file format in the example.json file for your better understanding
Now go to google open ink admin panel , copy the above url 

![8](https://user-images.githubusercontent.com/66178942/126042611-c9c89c0e-3a18-4650-b6d9-391ce6f68448.png)

and paste between the inverted commas of “url” 

![9](https://user-images.githubusercontent.com/66178942/126042624-73991e44-a444-4c2e-880c-87e949d5bd1a.png)

Here we done with URL
Now, go to the navigate-to-page.js file in the page-object folder and import the url file at the top after the reference

![10](https://user-images.githubusercontent.com/66178942/126042677-bd6ef1d9-cc4b-429f-9122-53c152929a26.png)

now make a simple export function, call fixture folder by typing cy.fixture(‘ ’), write the same file name without extension in the commas that you take in fixture folder,
in our case it will become cy.fixture(‘url-file’)

now use .than and make a simple function, passes an argument named data to call the array index from url-file. 
use cy.visit that visit the url-file and call url that define at index 0  

![11](https://user-images.githubusercontent.com/66178942/126042734-f5724a83-7e4a-4e25-be64-03ec993c3364.png)


