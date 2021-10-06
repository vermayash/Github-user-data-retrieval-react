import React, {  useState } from 'react';
import axios from 'axios';

const GitData = () => {
    const [user, setUser] = useState('');
    const [searchUser, setSearchUser] = useState('');
    const [error, setError] = useState('');

    const fetchData = async () => {
        const res = await axios.get(`https://api.github.com/users/${searchUser}`);

        console.log(res.status);
        
        if(res.status === 200){
            setUser(res.data);
            setSearchUser('');
        }
    };

    return (
        <div>
            <div>
                <h3>Get Github User's Data</h3>

                <input type="text" value={searchUser} onChange={e => setSearchUser(e.target.value)} placeholder="Search Github Username" />
                <input type="button" value="Search" onClick={fetchData} />
            </div>
            <hr />

            {`${error === 404 ? error : ""}`}

            <div>
                <p>Username: {user.login}</p>
                <p>id: {user.id}</p>
                <p><img src={user.avatar_url} alt={user.avatar_url} /></p>
                <p>{user.name}</p>
                <p>{user.location}</p>
                <p>Twitter: {user.twitter_username}</p>
                <p>{user.hireable? "Hireable" : "Not Hireable"}</p>
                <p><a href={user.html_url}>GitHub Link</a></p>
            </div>
        </div>
    );
};

export default GitData;