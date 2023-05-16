import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native'

export default class MovieDetails extends React.Component {
    render() {
        const { Movie } = this.props;
        const displayDetailFilm=this.props.displayDetailFilm;
        return (
            <StyledView style={styles.global_container_style}>
                <View style={styles.container_style}>
                    <Image source={{ uri: poster }} style={styles.image_style} />
                </View>

                <View style={styles.container_style}>
                    <View style={styles.header_style}>
                        <Text style={styles.title_style}> {title}</Text>
                        <Text style={styles.vote_style}> {rating}</Text>
                    </View>

                    <View style={styles.overview_style}>
                        <Text > {overview}
                        </Text>
                    </View>
                    <View style={styles.date_style}>
                        <Text>Release Date: {releaseDate}</Text>
                    </View>
                </View>
            </StyledView>
        );
    }
}

const StyledView = styled.View`
  background-color: papayawhip;
`

const StyledText = styled.Text`
  color: palevioletred;
`

const styles = StyleSheet.create({

    global_container_style: {
        flexDirection: 'row',

        height: 250,

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
        height:200,
        width: 120,
        marginRight: 4,
    },
    container_style: {
        flex: 1,

    },
    header_style: {
        flex: 2,

        flexDirection: 'row',
        justifyContent: 'space-between',

        marginBottom: 5,

    },
    title_style: {
        flex: 1,
        padding: 2,
        flexWrap: "wrap",
        fontWeight: "bold",
        fontSize: 20,


    },
    vote_style: {
        fontSize: 20,
        fontWeight: 'bold',

    },

    overview_style: {
        fontStyle: 'italic',

        flex: 7,
    },
    date_style: {
        textAlign: 'right',
        fontSize: 16,
        flex: 1,
    },


})
