# NataliaRylPortfolio

### Name: Natalia Ryl
### Student Number: C00294480
### Submission Date: 02 May 2025

# 🧾 Project Title and Summary
## 1. Project Name:
Natalia Ryl Portfolio


## 2. What is it:
Web Portfolio


## 3. Who is it for: 
Future interested employers/anyone interested in my work


## 4. Live Site: 
https://nataliaryl.github.io/NataliaRylPortfolio/


# 🧠 Design Rationale
## 5. Design Inspiration:
I wanted the portfolio to feel clean and personal, with a simple layout that makes my work easy to explore. The soft green and white palette reflects my style—green’s my favourite colour and really feels like part of my personality. It creates a calm, welcoming vibe, giving the site a relaxed and creative feel.


## 6. Design Goals:
- **Clean and Organized Layout:** I wanted the layout to be simple and easy to navigate, so it showcases my work without feeling too cluttered.
- **Personal and Approachable Feel:** The design is meant to reflect me and my personality, giving the portfolio a more personal, welcoming vibe.
- **Balanced Aesthetics and Functionality:** I aimed for a look that's visually appealing but still functional, with things like filters for my art pieces and easy access to each section.
- **Use of Colour to Reflect Personality:** Green is my favourite colour, so I chose it to give the site a calm, welcoming feel that reflects a bit of who I am.


## 7. Research & Planning:
To start, I researched various websites to gather inspiration. I focused on five main categories: colour, navigation, typography, layout, and mode of address. I then created a board to organize the websites we liked the most within each category.

After the research, I moved on to sketching a low-fidelity paper prototype to visualize the layout and flow. I then transitioned to a medium-fidelity prototype in Penpot, where I refined the design further. Finally, I polished it into a high-fidelity prototype, bringing everything together with the final details and functionality.


# 🔧 Key Features
## 8. List core pages:
- Home page
- About Me
- CV
- Art
- Animation
- Games
- Other Projects : Web Development; Web Design; Logo Design


## 9. Highlight dynamic or interactive elements:
- Image slideshow
- Filter options
- Hover effects
- Responsive design
- Interactive navigation


## 10. Note responsiveness and accessibility efforts:
- All images are responsive and adjust to screen size, ensuring they scale correctly without overflowing.
- The navigation bar transforms into a collapsible burger menu on smaller screens to save space.
- Buttons that are stacked horizontally on larger screens rearrange vertically on smaller screens for easier access.
- Content layout switches from a two-column to a single-column format for better readability on mobile devices.
- Typography scales based on screen size, ensuring text remains legible across devices.
- The footer adjusts its layout, stacking elements vertically on smaller screens for a more streamlined look.
- Interactive elements, like buttons and links, are sized appropriately for mobile, ensuring they're easy to tap.
- All images include alt text.


# 🛠️ Technologies Used
## 11. Languages/Frameworks:
Svelte; HTML; Javascript; CSS


## 12. Design Tools or extras
Penpot - design structure graph & wireframes

GitHub - store repository

Warp - assisted with buger menu positioning


# 👥 Team Contributions
## 13. Short Reflection:
**Name (GitHub Username):**
Natalia Ryl (NataliaRyl)

**Challenges faced and how they were solved:**

The filter system was tricky at first, but I eventually figured it out by using JavaScript to show the right content based on what was selected.

The slideshow gave me some headaches, mainly because the images were all different sizes, and the page kept jumping around when transitioning. I fixed that by setting a fixed size for the slideshow container and ensuring all images fit neatly within it, so it flowed smoothly.

Making the design responsive was another challenge. The textboxes kept misaligning with the images, especially on different screen sizes. I used media queries and flexible layouts to make sure everything adjusted properly and looked good no matter the screen size.

I also had to tweak the placement of textboxes a few times to make sure the layout stayed balanced and neat across the whole page.

**What was learned or improved during the process:**

I learned a lot about dynamically filtering content using JavaScript, which I hadn't done much before.

I also got much better at handling responsive design and working with flexible layouts and media queries to make sure everything adapts well to different screens.

My skills with interactive elements, like slideshows and modals, improved a lot too. I learned how to make them smooth and visually consistent using Svelte.

Overall, I got better at tweaking layouts and making sure everything aligned and looked good across devices.


# 🚀 Deployment Notes
## 14. GitHub Pages URL:
https://nataliaryl.github.io/NataliaRylPortfolio/


## 15. Any deployment issues and how they were resolved:

One of the first issues I ran into was figuring out where the { base } attribute needed to go, especially when working with an array of images. I also made the mistake of adding that attribute to external links by accident. Once I realized this, I corrected it, and the issue was fixed.

Another hiccup happened when I forgot to push all the added attributes to the repo. When I had to rebuild the site to fix an image error, I had to go back and re-add those base elements, which was a bit frustrating.

The biggest issue I faced was with the cp -r portfolio/build/* ./ command. It wasn’t working, and after some troubleshooting, I figured out that I had the folder structure wrong. The correct command was cp -r Portfolio/portfolio/build/* ./, since the build folder was in a folder called "Portfolio." Once I corrected that, everything worked smoothly.


# 🔄 Reflections & Next Steps
## 16. What went well in the project:
The overall design and layout turned out to be clean and user-friendly, aligning with my vision for a simple and functional portfolio.

The responsiveness across devices worked well, especially after resolving issues with the navigation and layout adjustments.

The integration of interactive features like filters and modals added a great dynamic element to the site, and I’m pleased with how they came together.

The project taught me a lot about web development, especially with SvelteKit, and I was able to improve my understanding of responsive design and accessibility practices.


## 17. What could be improved:
There are still some minor layout inconsistencies, especially in the placement of textboxes next to images on certain pages, which I’d like to refine further.

The filters, while functional, could be optimized for better performance, particularly when dealing with a large number of items.

Some images in the slideshow didn’t align as well as I’d hoped due to size differences. This could be fixed with better image sizing or more careful handling of dynamic elements.


## 18. One suggestion for future development:
I’d like to explore adding animations and transitions for the interactive elements, like hover effects and page transitions, to make the experience more engaging. I think these would complement the clean aesthetic of the site while adding a touch of personality.
