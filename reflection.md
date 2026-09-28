# Reflection Report

## Refactoring the Shopping Cart

The main challenge during this exercise was keeping the shopping cart functionality the same while changing the way the code was organized. The procedural version was straightforward because it used a global cart variable and separate functions to manage the cart. However, the cart data was directly accessible, which can make larger applications harder to maintain.

During the refactor, I used the Module Pattern to group the cart data and related operations into a single module. The cart data became private, while functions such as `addItem`, `viewCart`, `removeItem`, and `clearCart` were exposed as the public interface.

Using the Module Pattern improved the organization of the code by keeping related functionality together and reducing the use of global variables. It also provided better encapsulation because other parts of the application could only interact with the cart through the exposed operations. This makes the code easier to maintain and reduces the possibility of accidentally changing the cart data directly.

I would choose a design pattern over procedural programming when a project becomes more complex and requires better organization, encapsulation, maintainability, or reuse. For a very small script, procedural programming can be simple and sufficient. For a larger application, a suitable design pattern can provide a clearer structure and make future changes easier.