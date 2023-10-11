import React from "react";
import ReactDOM from "react-dom/client";
// const parent = React.createElement("div", {id: 'parent'}, [React.createElement("div", {id: 'child'}, [React.createElement("h1", {}, "Hello I am vamsi")]), React.createElement("h2", {}, "I am @CGI")]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);


// using JSX

const child =  /* this is a single line JSX code<h1>Hello world, I am using JSX</h1>

                for multi-line JSX code, we have encapsulate or wrap it using the ()
                */
               (<h1>
                   Hello world, I am using JSX using multi-line
               </h1>);

const Title = () => <h2> And this is a component composition</h2>

const ParentComponent = () => {
    return (
        <div>
            {child}
            <h1>Using functional Component</h1>
            <Title/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ParentComponent/>);





/* 

->Components are the reusable JSX code which has HTML like syntax. But the difference b/w a react element and component is; a component can return a JSX code but can also include the arguments. But a react element behaves like a component but doesn't carry the arguments.

->Components variables must have 1st letter as an uppercase. Then only babel considers it as a component. 

-> There are 2 ways to create a component :
    1. Class components:
        -> These are older standards for creating a component.
    2. Functional components:
        -> These are the new standards for creating a component. 
        -> Currently in this project we are using the functional components.
        -> its a normal function which returns the JSX code.

-> component composition is the nesting of components inside another component. Like if we consider Title element as a component and if 
    we include Title component inside ParentComponent then we call it as component composition.

*/