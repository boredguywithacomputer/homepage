# HOMEPAGE (TURTLE)
A custom homepage with a searchbar and widgets. 
It is basically a better new tab page.<br>
- Uses Google as a search engine.<br>
- Includes a weather widget (of where I live) which updates every minute<br><br>
- Has an epic spinning turtle in the background
my api key is in the source code there but its probably fine
<br><br>

[here's a demo](https://boredguywithacomputer.github.io/homepage)

# Set up your own homepage

First, clone the repo.<br>
You can update the config object starting from line 7 in the script.js file, which should look like this:

```js
const config = {
  apikey: "https://api.weatherapi.com/v1/current.json?q=%22Los+Angeles%22&key=042b059e3c134377ab7171013260508",
  // searchengine: "https://google.com/search"
  searchengine: "https://duckduckgo.com/",
  model: "turtle.glb"
}
```
<br>
You can obtain your own api key (from api.weatherapi.com), and update the config object so you don't have to steal from mine.<br>
Through the same line, you can also change the weather location<br>
You can also switch to your search engine of choice.<br>
Lastly, you can upload your own glb file and turn the spinning model into whatever you want.<br><br>

# Acknowledgements
This site was built using:<br>
[three.js](https://threejs.org/) - very goated 3d rendering library, would recommend<br>
[weatherapi.com](https://weatherapi.com/) - self explanatory

<img width="1823" height="872" alt="image" src="https://github.com/user-attachments/assets/5f5e838a-5074-4b71-b0a6-bb3108c7419f" />
