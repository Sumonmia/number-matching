**1. What is ES6 and what are the new features introduced in ES6?**
**Answer:** ES6 is the latest JavaScript VERSION that has been around for a few years now, and it allows us to write code in a smart way. It makes the code more modern and more readable. It’s fair to say that with the use of ES6 features we write less and do more, hence the term ‘write less, do more’ is the main motto.
Features of ES6:
*let: Allows for block-scoped variables, which are only accessible within the block they are defined in.
*const: Declares a block-scoped variable that cannot be reassigned.
*Arrow Functions and many more.

**2. What is Event Bubble and Event Delegation in JS?**
**Answer:** 
*Event Bubble: Event bubble is an event that originates from the deepest target element in the DOM tree goes via its ancestor elements until it reaches the root, which is typically the document object. This process is known as event bubbling. This implies that unless specifically halted, whenever an event happens on one element, it will likewise happen on all of its predecessor elements.
To prevent the event from propagating further up the DOM, you can use the event.stopPropagation() method within the event handler.
* Event Delegation: Event delegation is a technique that leverages event bubbling to handle events efficiently by attaching a single event listener to a common ancestor element, rather than multiple listeners to individual child elements. This technique is particularly useful when dealing with dynamically added elements or when handling many similar elements.

  **3. What is the difference between localstorage , session storage and cookies.**
  **Answer:**
*LocalStorage: LocalStorage is scoped to the entire domain. Data stored in LocalStorage is accessible to all pages under the same domain. In LocalStorage data persists even after the browser is closed and remains until explicitly deleted by the user or by the code. It can be accessible via JavaScript using the localStorage object. Data is stored as key-value pairs in string format.

*SessionStorage: SessionStorage is scoped to the window or tab. Data is only accessible within the same window or tab and is not shared across different tabs or windows. In SessionStorage data persists only for the duration of the page session. It is cleared when the page session ends, such as when the tab or window is closed. It can be accessible via JavaScript using the sessionStorage object. Data is stored as key-value pairs in string format.

* Cookies: Cookies are sent to the server with every HTTP request, making them accessible to both the client and the server. They can be scoped to a specific path and domain. Cookies can have an expiration date, after which they are automatically deleted. They can also be set to expire when the session ends (session cookies). It can be accessible via JavaScript using the document.cookie property or via server-side languages. They can store key-value pairs in string format, but with more restrictions and security considerations.

**4. In CSS what is the difference between display inline , display inline block and display block?**
  **Answer:** 
*Display: Inline : Inline elements flow within the line of text in which they appear. They only take up as much width as necessary based on their content. Inline elements can be placed next to each other horizontally, like text.
  Examples: <span>, <a>, <strong>, <em>

*Display: Inline-Block: Inline-block elements are similar to inline elements in that they can be placed next to each other horizontally. But, unlike inline elements, they can have their width and height set.  Inline-block elements respect margins and padding. They are aligned like inline elements but behave like block elements in terms of dimensions.
  Examples: <div> </div>

*Display: Block: Block elements always start on a new line and take up the full width available by default, stretching to the left and right as far as the parent container allows. Block elements respect margins, padding, and line breaks. They stack vertically, one below the other.
  Examples: <div>, <p>, <h1> - <h6>, <ul>, <li>

**5. What are new features in CSS3?**
  **Answer:** CSS3 introduced a range of new features and modules that significantly enhanced the styling and layout capabilities of CSS. 
  *Box-Sizing: The box-sizing property allows control over the box model, including content-box (default) and border-box (includes padding and border in the width/height).
  *Multiple Backgrounds: Ability to use multiple background images.
  *Text-Shadow: Adding shadows to text.
  * Using Border-radius, Border-Image, Box-Shadow
  * 2D and 3D Transforms: Transform elements using transform property with functions like rotate, scale, translate, and skew.
  * Transitions: Smoothly animate changes in CSS properties.
  * Flexbox: A layout model that provides a more efficient way to layout, align, and distribute space among items in a container.
  * Media Queries: A feature for applying styles based on device characteristics like screen size, resolution, etc.
  * Grid Layout: A powerful layout system for creating complex grid-based layouts.
  * CSS Variables and many more.
