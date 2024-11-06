Ways to apply css

1.Inline CSS
Definition: CSS styles are applied directly within an HTML element using the style attribute.
Usage: Useful for quick styling changes, but not recommended for larger projects due to maintainability issues.

EXAMPLE:
<h1 style="color: blue; font-size: 20px;">Hello World</h1>

2.Internal CSS
Definition: CSS styles are defined within a <style> tag in the <head> section of the HTML document.
Usage: Good for styling a single document without affecting other pages.

EXAMPLE:
<head>
  <style>
    h1 {
      color: blue;
      font-size: 20px;
    }
  </style>
</head>

3.External CSS
Definition: CSS styles are placed in a separate .css file, which is linked to the HTML document.
Usage: Best practice for larger websites, as it allows for consistent styling across multiple pages.

EXAMPLE:
<link rel="stylesheet" type="text/css" href="styles.css">


###########
Create a quick html document by shortcut: ! + enter
using exteral css: type "link" + tab

#In line css doesnt need a selector p{} unlike internal and external

#####
types of selectors
1. Element selectors;
p {
    color: blue;
}

2. class selectors;
.highlight {
    background-color: yellow;
}

<div> block
<span> inline
class?? #fff? use of color picker??

limitations of inline
.mistakes
.
limitations of internal css
.it is only for that specific document
.makes code bulky; error detection is hard 

TO DO?????
Inserting tables with and without their bodas
Bootstrap; can put our css on a remote server accessible to many people 