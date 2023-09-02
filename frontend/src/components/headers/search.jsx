import { useMemo, useState} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux'
import { fetchUsers, getUsers } from '../../store/usersReducers'
import './search.css'
function Search(){
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useState('')
    const searchedUsers = useSelector(getUsers);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleSearch = e => {
        e.preventDefault()
    }

    const defineDebounceBehavior = () => {
        let timeout
        return function fn(params) {
            if (params !== ''){
            if (timeout) { clearTimeout(timeout) }
                timeout = setTimeout(() => {
                // console.log('actually searching now')
                dispatch(fetchUsers(params))
            }, 260)}
            return fn
        }
    }

    const debouncedSearch = useMemo(() => defineDebounceBehavior(), [])
    
    const handleInputChange = field => async e => {
        const newParams =  e.target.value 
        debouncedSearch(newParams)
        await setSearchParams(prev => ( e.target.value));
        setDropdownVisible(true);
    }

    const closeDropdown = () => {
        setDropdownVisible(false);
    };

    return (
        <div className='search'>
        <form className='search-form' onSubmit={handleSearch}>
            <input
                placeholder='search'
                value={searchParams || ''}
                onChange={handleInputChange('search')}
            />
        </form>
        {dropdownVisible && (
        <div className="search-results">
        {searchParams && Object.values(searchedUsers).length > 0 ? (
            <div className="search-dropdown">
                <button className="close-dropdown-button" onClick={closeDropdown}> X </button>
                {Object.values(searchedUsers).map(searchedUser => (
                <Link key={searchedUser.id} className="search-result" to={`/profile/${searchedUser.id}`}>
                    <img
                    className="user-avatar"
                    src={
                        searchedUser.profilePicture
                        ? searchedUser.profilePicture
                        : 'https://insta-hosting.s3.us-west-2.amazonaws.com/ProfilePicture.JPG'
                    }
                    alt={`${searchedUser.username}'s Profile`}
                    />
                    <span>{searchedUser.username}</span>
                </Link>
                ))}
            </div>
            ) : null}
            </div>
            )}
        </div>
    )
}

export default Search;