import {  useState } from "react";
import './Searchbar.css'

const Searchbar = ({ onSubmit }) => {
    const [searchText, setIsSearchText] = useState ('')

    const handleNameChange = event => {
        setIsSearchText( event.currentTarget.value.toLowerCase());
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (searchText.trim() === '') {
            alert('Заповніть поле пошуку');
            return
        }
        onSubmit(searchText);
        setIsSearchText('')
    }

        return (<header className="Searchbar">
            <form onSubmit={handleSubmit} className="SearchForm">
                <button type="submit" className="button">
                    <span className="button-label">Search</span>
                </button>

                <input
                    className="input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={searchText}
                    onChange={handleNameChange}
                />
            </form>
        </header>)
    }


export default Searchbar;