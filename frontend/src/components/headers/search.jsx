import { useMemo, useState} from 'react'
import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux'
import { fetchUsers, getUsers } from '../../store/usersReducers'
import './search.css'
function Search(){
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useState('')
    const searchedUsers = useSelector(getUsers);

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
        await setSearchParams(prev => ( e.target.value))
    }

    return (
        <div className='search'>
        {/* <h3>Search</h3> */}
        <form className='search-form' onSubmit={handleSearch}>
            <input
                placeholder='search'
                value={searchParams || ''}
                onChange={handleInputChange('search')}
            />
        </form>
        <div className="search-results">
        {searchParams && Object.values(searchedUsers).length > 0 ? (
            <div className="search-dropdown">
                {Object.values(searchedUsers).map(searchedUser => (
                <div key={searchedUser.id} className="search-result">
                    {/* Display user information here */}
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
                </div>
                ))}
            </div>
            ) : null}
            </div>
        </div>
    )
}

export default Search;