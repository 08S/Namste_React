//    const heading = document.createElement("h1");
//    heading.innerHTML = "Namste React";
//    const root = document.getElementById("root");
//    root.appendChild(heading);
const heading2 = React.createElement("h2", {id: "heading2"}, "Namste EveryOne");
const heading3 = React.createElement("h3", {}, "Namste friends");
const container = React.createElement("div", {}, [heading2, heading3]);
console.log(container);
// root is the place where react is located
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing a react element inside the root
// async defer
root.render(container);
