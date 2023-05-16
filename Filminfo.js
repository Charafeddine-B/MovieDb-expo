import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import styled from 'styled-components/native';
import {
    getNowPlayingMovies,
    getPoster,
    getLanguage,
    getVideo,
} from './api/MovieService'; // Import API functions

export default class Filminfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [], // Initialize an empty array to store movies data
        };
    }

    componentDidMount() {
        this.fetchNowPlayingMovies();
    }

    fetchNowPlayingMovies = () => {
        getNowPlayingMovies()
            .then((response) => {
                this.setState({ movies: response.data.results });
            })
            .catch((error) => {
                console.error('Error fetching now playing movies:', error);
            });
    };

    render() {
        const { movies } = this.state;

        return (
            <StyledView>
                {movies.map((movie) => (
                    <View key={movie.id} style={styles.global_container_style}>
                        <TouchableOpacity>
                            <Image
                                source={{ uri: getPoster(movie.poster_path) }}
                                style={styles.image_style}
                            />
                        </TouchableOpacity>

                        <View style={styles.container_style}>
                            <View style={styles.header_style}>
                                <Text style={styles.title_style}>{movie.title}</Text>
                                <Text style={styles.vote_style}>{movie.vote_average}</Text>
                            </View>

                            <View style={styles.overview_style}>
                                <Text>{movie.overview}</Text>
                            </View>
                            <View style={styles.date_style}>
                                <Text>{movie.release_date}</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </StyledView>
        );
    }
}

const StyledView = styled.ScrollView`
  background-color: papayawhip;
`;

const styles = StyleSheet.create({
    global_container_style: {
        flexDirection: 'row',
        height: 250,
        width: '100%',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    image_style: {
        height: 200,
        width: 120,
        marginRight: 10,
    },
    container_style: {
        flex: 1,
        marginLeft: 10,
    },
    header_style: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    title_style: {
        flex: 1,
        padding: 2,
        flexWrap: 'wrap',
        fontWeight: 'bold',
        fontSize: 20,
    },
    vote_style: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    overview_style: {
        fontStyle: 'italic',
        flex: 1,
    },
    date_style: {
        textAlign: 'right',
        fontSize: 16,
    },
});
