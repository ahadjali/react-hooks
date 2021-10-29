import './SearchMovie.css'
import { RiSearch2Line } from 'react-icons/ri'
import { Component } from 'react';

class SearchMovie extends Component {
    //console.log(allData)
    render() {
        return (

            <div className="input-container">
                <input
                    placeholder="Searching movie..."
                    className="search"
                    // name="allData"
                    // value={this.props.allData}
                    onChange={this.props.handleChange}
                />
                <button>
                    <RiSearch2Line />
                </button>
            </div>
        );
    }

};
export default SearchMovie;