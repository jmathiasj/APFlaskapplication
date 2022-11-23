// Create a new color picker instance
// https://iro.js.org/guide.html#getting-started
var colorPicker = new iro.ColorPicker(".colorPicker", {
    // color picker options
    // Option guide: https://iro.js.org/guide.html#color-picker-options
    width: 0,
    color: "rgb(255, 0, 0)",
    borderWidth: 1,
    borderColor: "#fff" });
  
    // It's all sliders
  var sliderPicker = new iro.ColorPicker("#sliderPicker", {
    width: 250,
    color: "rgb(255, 0, 0)",
    borderWidth: 1,
    borderColor: "#fff",
    layout: [
      // {
        // component: iro.ui.Slider,
        // options: {
          // sliderType: 'hue'
        // }
      // },
      // {
        // component: iro.ui.Slider,
        // options: {
          // sliderType: 'saturation'
        // }
      // },
      {
        component: iro.ui.Slider,
        options: {
          sliderType: 'value'
        }
      },
      // {
        // component: iro.ui.Slider,
        // options: {
          // sliderType: 'alpha'
        // }
      // },
    ]
  });
  var hexInput = document.getElementById("hexInput");
  
  // https://iro.js.org/guide.html#color-picker-events
  sliderPicker.on(["color:init", "color:change"], function (color) {
    // Show the current color in different formats
    // Using the selected color: https://iro.js.org/guide.html#selected-color-api
  
    var element = document.getElementById("a");
    element.style.backgroundColor = color.hexString;
  
    hexInput.value = color.hexString;
  });
  
  hexInput.addEventListener('change', function () {
    sliderPicker.color.hexString = this.value;
  });