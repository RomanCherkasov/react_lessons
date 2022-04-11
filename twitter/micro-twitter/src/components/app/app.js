import React, {Component} from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';
import './app.css';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px; 
`

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[
                {label: 'Going to learn React', important: true, id: '213'},
                {label: 'That is work', important: false, id: '2sdf13'},
                {label: 'May be', important: false, id: '21233'}
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }
    
    deleteItem(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index+1);
            const newArray = [...before, ...after];
            // const newArr = [...data.slice(0, index), ...data.slice(index+1)] | Это тоже будет работать
            return {
                data: newArray
            }
        });
    }

    addItem(body) {
        console.log(body)
    }
    render(){
        return (
            <AppBlock>
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList 
                posts={this.state.data}
                onDelete={this.deleteItem}/>
                <PostAddForm
                onAdd={this.addItem}/>
            </AppBlock>
        )
    }
}
