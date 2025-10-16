export async function getYouTubeVideos(){
  try {
    const apiKey = process.env.YOUTUBE_API_KEY
    const channelId = process.env.YOUTUBE_CHANNEL_ID || '' // set in Vercel
    if(!apiKey || !channelId) return []
    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=6`)
    if(!res.ok) return []
    const data = await res.json()
    return data.items || []
  } catch(e){
    console.error('YouTube fetch error', e)
    return []
  }
}
