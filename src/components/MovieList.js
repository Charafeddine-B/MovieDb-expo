import React from 'react';
import { FlatList } from 'react-native';
import MovieDetails from './MovieDetails';

export default class MovieList extends React.Component {
    render() {
        const movies = [
            {
                id: 1,
                title: 'The Shawshank Redemption',
                rating: 9.3,
                overview: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
                releaseDate: '14 October 1994',
                poster: 'https://www.example.com/shawshank-redemption-poster.jpg',
            },
            {
                id: 2,
                title: 'The Godfather',
                rating: 9.2,
                overview: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
                releaseDate: '24 March 1972',
                poster: 'https://www.example.com/godfather-poster.jpg',
            },
            // Add more movies here
        ];

        return (
            <FlatList
                data={movies}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <MovieDetails movie={item} />}
            />
        );
    }
}
