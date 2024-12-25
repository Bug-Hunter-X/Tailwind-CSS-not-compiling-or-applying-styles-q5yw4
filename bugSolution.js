```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other configurations ...
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/@my-ui-library/**/*.js'], // Added missing files
  theme: {
    extend: {
      colors: {
        'custom-blue': '#007bff', // Example custom color
      },
    },
  },
  plugins: [],
};
```
The solution includes all necessary files in the `content` array.  Make sure to adjust file paths to match your project's structure.