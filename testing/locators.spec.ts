/* Locators - to identify the elements on the web page
html - hyper text markup language
DOM - Document Object Model
Tagname -  after the less than sumbol '<' is starting tag and after '</' is closing tag, like <div ... </div>
Attribute and attribute value like, class="design-credit"

<input type="password" name="password" id="password"> - it is a DOM (Document Object Model)
input - tagname
type, name and id - attribute of an element
password... - value of the attributes respectively

https://practicetestautomation.com/practice-test-login/

There are 3 ways Playwright support writing the locators:
1. css selector - #2 preference
2. xpath - #3 preference
3. playwright getBy locators - #1 preference

CSS Selector:

1. if "id" as an attribute we can use # and value of the attribute
so for this example: <input type="text" name="username" id="username">
CTRL+f and in the box search #username - there are two result, ignore the locator inside 'script' tag

if tagname is <input> and id="username" CTRL+f, input#username or #username

https://demoqa.com/select-menu
<input required="" autocomplete="off" placeholder="First Name" id="firstName" class=" mr-sm-2 form-control" type="text">
if there is a space in class name like class=" mr-sm-2 form-control", then
CTRL+f, .classname / .mr-sm-2 (1st part before the space),
or .classname / .form-control (2nd part after the space),
or .classname.classname / .ms-sm-2.form-control

input.mr-sm-2.form-control

2. if "class" attribute is present - .classname, tagname.classname, .classname1.classname2.classname3

3. if any attribute - [attribute = 'value'] - vlaue can be in single or double quotes:
<input required="" autocomplete="off" placeholder="First Name" id="firstName" class=" mr-sm-2 form-control" type="text">
    [placeholder='First Name'] OR [placeholder="First Name"] OR input[placeholder="First Name"]

<label for="username">Username</label> - DOM
label - tagname
for - attribute
Username - textvalue of an element on a web page

css traversing from parent to child and all elements in the same alignmment are sibling to one another and
elder and younger element:

parenttagnmae >> childtagname or parentlocator childlocator
Example: input >> div OR input div (by just provide a spaceb/w parent and child)
#userName-wrapper input

page.locator(.class).first() - to get the 1st matching elemnent
page.locator(.class).last() - to get the last matching element
page.locator(.class).nth() - tp get thematching element based on index #

2. XPATH
    - Absolute - start with single forward slash '/'
        /html/body/div//div/section/section/h2

    - Relative - start with double forward slash '//'
        //h2
        (//h2)[1] - if there are more than one h2 then treat as array and use index value
        //tagname or *[@attribute = 'value'] - (//*[@attribute = 'value'])[2]

        Syntax:
        1. //*[@attribute='value'] or (//*[@attribute = 'value'])[1]

        2. //tagname[@attribute='value'] or (//tagname[@attribute = 'value'])[1]

        //input
        (//input)[2] - if there are multiple matching element then use the index value

        3. Parent to child - AXES inside xpath
        Ctrl+f .practice-form-wrapper h5
        Ctrl+f //div[@class='practice-form-wrapper']/h5 - move to immediate child using '/'
        Ctrl+f //div[@class='practice-form-wrapper']//input - move to any immediate child/grand child/great grand child using '//'

        4. Moving from one sibling to another sibling:

        //label[@for='username']/following-sibling::input - moving to following sibling
        //label[@for='username']/following-sibling::input[@id='username'] - moving to following sibling
        
        5. //input[@id='username']/preceding-sibling::label - moving to previous sibling

        <label for = "username">username</label> - preceding sibling to input tage

        <input type="text" name="username" id="username"> - following sibling to label tag

        6. for flipkart.com
        //div[text()='ABOUT']/following-sibling::a

        7. //*[contain(text(), 'text itself')]
        //li[contains(text(), 'positive and negative')]
        (//li[contains(text(), 'Login')])[1
        
        8. From child to parent traversing
        //h2/parent::*
        //h2/ancestor::section[2]
        //h2/ancestor::html

        // * or tagname [@attribute='value']/parent::parentTag
        //div[@id='genterWrapper']/parent::from

3. Playwright special method locators:

GetBy locators in Playwright

page.getByText() - 
page.getByLabel()
page.getByPlaceholder()
page.getByAltText()
page.getByTitle()
page.getByTestId()


1. page.getByText('ads', {exact:true}) - find the exact text value which is 'ads'
   page.getByText('Practice Form', {exact:true})

3. page.getByLabel() - to locate a form controls by associated label text
    - 'for'
    - 'input'

4. page.getByPlaceholder('First Name') - to locate an input by placeholder as an attribute
    
5. page.getByAltText() - alt an attribute of an element

6. page.getByTitle() - title an attribute

7. page.getByTestId() - data-testid an attribute of an element

8. page.getByRole() - locate elemnt by its implicit role
    Heading <h1 - h6>
    button - <button> or class="btn"
    textbox - <input>
    radio 
    checkbox

    page.getByRole('radio', {name: 'Male'})
*/

import {test, expect} from '@playwright/test'

test("login", async function({page}){
    await page.getByRole('link', {name: 'Get Started', exact:true}).click

})

/*
fill the input - validation
click on element
*/