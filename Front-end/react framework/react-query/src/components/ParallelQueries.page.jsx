import { useQuery } from "react-query"
import axios from "axios"

const fetchSuperHeros = () => {
    return axios.get("http://localhost:4000/superheroes")
}

const fetchFriends = () => {
    return axios.get("http://localhost:4000/friends")
}


export const ParallelQueriesPage = () => {
    const { data: superHeroes, isLoading: isSuperHeroesLoading, isError: isSuperHeroesError } = useQuery('super-heroes', fetchSuperHeros);
    const { data: friends, isLoading: isFriendsLoading, isError: isFriendsError } = useQuery('friends', fetchFriends);

    if (isSuperHeroesLoading || isFriendsLoading) {
        return <div>Loading...</div>;
    }

    if (isSuperHeroesError || isFriendsError) {
        return <div>Error loading data</div>;
    }

    return (
        <div>
            <h2>Super Heroes</h2>
            {superHeroes?.data.map((hero) => (
                <div key={hero.id}>{hero.name}</div>
            ))}
            <h2>Friends</h2>
            {friends?.data.map((friend) => (
                <div key={friend.id}>{friend.name}</div>
            ))}
        </div>
    );
};