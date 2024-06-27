// const heading  = React.createElement("h1",{},"hello from react!")
// const root = ReactDOM.createRoot(document.getElementById("root")) 
// root.render(heading);

const heading  = React.createElement("div",{"id":"parent"},
    [
        React.createElement("div",{"id":"child"},"hello from react!"),
    React.createElement("div",{"id":"child"},"hello from react!")
])
const root = ReactDOM.createRoot(document.getElementById("root")) 
root.render(heading);