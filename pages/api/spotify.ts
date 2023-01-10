import querystring from 'querystring'
import fetch from 'isomorphic-unfetch'

const CLIENTID = process.env.ClientID
const CLIENTSECRET = process.env.ClientSecret

const basic = Buffer.from(`${CLIENTID}:${CLIENTSECRET}`).toString('base64');
const NOW_PLAYING = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;




const getAccessToken = async () => {

    const response = await fetch(TOKEN_ENDPOINT, {
        method: "POST",
        headers: {
            'Authorization': `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
            "Accept": "application/json"
        },
        body: querystring.stringify({
            grant_type: "refresh_token",
            refresh_token: process.env.ClientRToken,
        })
    })



    return await response.json();
}

export const getNowPlaying = async () => {
    const { access_token } = await getAccessToken();

    return fetch(NOW_PLAYING, {
        headers: {
            Authorization: `Bearer  ${access_token}`
        }
    })
}


// eslint-disable-next-line import/no-anonymous-default-export
export default async (_: any, res: any) => {
    const response = await getNowPlaying();

    if (response.status === 204 || response.status > 400) {
        return res.status(200).json({ isPlaying: false });
    }

    const song = await response.json();


    const ispPlaying = song.is_playing;
    const title = song.item.name;

    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[ 0 ].url;
    const songURL = song.item.external_urls.spotify;
    const previewURL = song.item.album.images[ 1 ].url
    const artist = song.item.artists[ 0 ].name

    return res.status(200).json({
        album, title, ispPlaying, albumImageUrl, songURL, previewURL, song, artist
    })
}

