import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TrackPlayer, { Event, Track, useTrackPlayerEvents } from 'react-native-track-player';
import { playListData } from '../constant';
import SongInfo from '../components/SongInfo';
import SongSlider from '../components/SongSlider';
import ControlCenter from '../components/ControlCenter';

const { width } = Dimensions.get("window");

const MusicPlayer = () => {
    const [track, setTrack] = useState<Track | null>();

    useEffect(() => {
        (
            async () => {
                const currentTrack = await TrackPlayer.getTrack(0); // Set the first track
                setTrack(currentTrack);
            }
        )()

    }, [])

    useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async event => {
        setTrack(event.track);
    })

    const renderArtWork = ({ item }: { item: Track }) => {
        return (
            <View style={styles.listArtWrapper}>
                <View style={styles.albumContainer}>
                    {item.artwork && (
                        <Image
                            style={styles.albumArtImg}
                            source={{ uri: item.artwork?.toString() }}
                            resizeMode="center"
                        />
                    )}
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                data={playListData}
                renderItem={(song) => renderArtWork(song)}
                keyExtractor={song => song.id.toString()}
            />

            <SongInfo track={track} />
            <SongSlider />
            <ControlCenter />
        </View>
    )
}

export default MusicPlayer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#001d23',
    },
    listArtWrapper: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    albumContainer: {
        width: 300,
        height: 300,
    },
    albumArtImg: {
        height: '100%',
        borderRadius: 4,
        resizeMode: 'cover',
    },
})