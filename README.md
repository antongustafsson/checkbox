# Checkbox
A simple and sleek checkbox, controlled with JavaScript

## Usage
Create a instance of the checkbox using the ```Checkbox``` class, passing a label as the first argument, and a callback as the second argument.
The single argument for the callback is a boolean-value for the current state.
```javascript
var myCheckbox = new Checkbox('Check me!', (state) => {
	console.log(state)
})
```

Then spawn it to any parent of choice.
```javascript
myCheckbox.spawn(document.body)
```
