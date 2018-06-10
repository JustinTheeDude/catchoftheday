import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore = (e) =>  {
        e.preventDefault();
        console.log(this);
        const storeName = this.myInput.value.value;
        this.props.history.push(`/store/${storeName}`)
    };

    render() {
        return (
            <form className = "store-selector" onSubmit={this.goToStore}>
            <h2>Please Enter a Store</h2>
            <input
                type="text"
                ref={this.myInput}
                requiered="true"
                placeholder="store name"
                defaultValue={getFunName()}
            />
            <button type="submit" >Visit Store ></button>
        </form>
        );
    }
}
export default StorePicker;
