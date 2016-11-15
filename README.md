## Website Performance Optimization portfolio project

### How to Run

1. Clone the following git respository - https://github.com/eryman/eryman.github.io - or download as a zip file from [here](https://github.com/eryman/eryman.github.io/archive/master.zip).


#### Running Portfolio

1. Open index.html in top folder

#### Running pizza.html

1. Open project folder > views > pizza.html
2. If in Google Chrome, open DevTools (ctrl + shift + i for Windows, cmd + opt + i for Mac) to view timers for animation events

### Optimizations

#### Optimizations to Portfolio Page

1. Minified (using Grunt) and inlined style.css to avoid extraneous downloads
2. Added media query to print.css so that it isn't part of the CRP
3. Added "async" to calls to JavaScript files, since they weren't needed in the CRP
4. Resized large image files to reduce loading costs
5. No longer using Google Fonts, to avoid extraneous downloads

#### Optimizations to Pizza Page

1. Changes made to changePizzaSizes() - views/js/main.js - line 454
	* Removed var dx from for loop to avoid forced synchronous layout issues
	* Removed document.querySelectorAll(".randomPizzaContainer") from var dx and included it in its own variable, randomPizzas, so that the browser only has to do that work once
	* Removed var newwidth from the for loop, since that work only needs to be done once

2. Changes made to updatePositions() - views/js/main.js - line 501
	* Changed querySelectorAll to the more efficient getElementsByClassName
	* Moved document.body.scrollTop/1250 into its own variable, so it only has to be calculated once per scroll
	* Created variable j to be used in a for loop (starting on line 514) and is used to replace "i % 5," to avoid the cost of repeatedly doing that math

3. Changes made to anonymous function starting on line 534 in views/js/main.js
	* Changed for loop in line 537 so that it creates 23 pizzas, rather than the unnecessary 200 pizzas

4. Minified views/js/main.js (using Grunt) to cut down on extraneous memory used

5. Minified views/css/style.css to cut down on load times



Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository and inspect the code.

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

####Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js. 

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
