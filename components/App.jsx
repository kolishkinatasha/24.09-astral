import React, {Component} from 'react';
// import ReactDOM from 'react-dom';

// import List from './List';
import Form from './Form';


import { getUser } from '../sources/list';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        getUser()
            .then(({data}) => this.setState( { list: data }));
    }

    render() {
        const { list } = this.state;
        return (
            <div>
                <Form />
                {/* <button id='button'>Сохранить данные</button> */}
                <button onClick={ this.handleSubmit } id='button'>Получить данные</button>
                {/* <button onClick={ window.location.reload() }>Очистить</button> */}
                <ul>
                    { list.map( (item,index) =>
                        <li key={index}>
                            Имя: { item.firstName }<br/>
                            Фамилия: { item.secondName }<br/>
                            Телефон: { item.phone }<br/>
                            Email: { item.email }<br/>
                            Возраст: { item.age }<br/><br/>
                        </li>
                    )}
                    </ul>
            </div>
        );
    }
}

export default App;
