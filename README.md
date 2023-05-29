# CardsList
I created two implementations for the cards, where I've used CSS for styling in one and Material-UI (Mui) in the other.

They are split into 2 paths: the CSS implementation is in the `/home` path, while the Mui implementation is in the `/mui` path. You can navigate between the two using the provided buttons for each link.

The currently selected implementation is underlined with text decoration underline.

The design for both cards is similar, but not identical, as I wanted to showcase some differences.

I didn't spend too much time on the styling because I believed it wasn't a critical aspect in this case. However, the cards are readable and nicely positioned.

For the purpose of this task, I used the same image. In a production environment, I would upload the actual image and its corresponding "blurhash" hash to a database. The fields would be named accordingly, and I would fetch them and use them dynamically.

I implemented pagination based on the number of displayed cards. As per the task requirements, I used a 5x2, 3x3, and 2x4 card layout. Here's how I mapped them:
- For a full-width monitor window, it's a 5x2 layout (I fetch 10 cards to display on the page).
- For tablets, it's a 3x3 layout (I fetch 9 cards to display on the page).
- For mobile devices, it's a 2x4 layout (I fetch 8 cards to display on the page).

I used Blurhash for image loading. You can test it out by opening the Network tab in Google Chrome's Developer Tools and changing the network setting to "Fast 3G" instead of "No throttling." This will allow you to see the blurred image placeholder before the actual image loads, providing a better visual experience.

On each card, I implemented text truncation using separate approaches for CSS and Mui. This truncation ensures a better view of the card and enables the use of a modal for displaying additional description and more data.

