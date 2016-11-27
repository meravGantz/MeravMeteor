import React from 'react';
import TodosContainer from './Containers/TodosContainer';
export default class HelloWorld extends React.Component {
    render(){
        return (
            <div>
                Hello World
                <TodosContainer />
            </div>
            )
    }
}
