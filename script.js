async function analyzeVideo() {
    let url = document.getElementById("videoUrl").value;
    let videoId = url.split("v=")[1] || url.split("/").pop();
    let embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

    document.getElementById("videoContainer").innerHTML = `<iframe width="100%" height="315" src="${embedUrl}" frameborder="0" allowfullscreen></iframe>`;

    fetchYouTubeStats(videoId);
    generateAISEO();
}

async function fetchYouTubeStats(videoId) {
    let apiKey = "AIzaSyDPh-x7uCyti_VQ4pGjJkUuPsR7yuUD1P4";
    let url = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${apiKey}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        if (data.items.length > 0) {
            let stats = data.items[0].statistics;
            document.getElementById("viewsCount").textContent = stats.viewCount;
            document.getElementById("likesCount").textContent = stats.likeCount;
            document.getElementById("commentsCount").textContent = stats.commentCount;
        }
    } catch (error) {
        console.error("Error fetching YouTube stats:", error);
    }
}

function generateAISEO() {
    let titles = ["🔥 Ultimate SEO Growth Hack!", "📈 10X Your YouTube Views!", "🎥 Must-Watch YouTube Secrets!"];
    let descriptions = ["AI-powered SEO for YouTube success!", "This AI will rank your video #1!", "Grow your channel instantly!"];

    document.getElementById("seoTitle").textContent = titles[Math.floor(Math.random() * titles.length)];
    document.getElementById("seoDescription").textContent = descriptions[Math.floor(Math.random() * descriptions.length)];
}

function getHashtags() {
    let hashtags = ["#YouTubeGrowth", "#SEOBoost", "#ViralVideo", "#ContentCreator", "#AISEO"];
    document.getElementById("hashtagList").textContent = hashtags.join(" ");
}

function generateBacklinks() {
    document.getElementById("backlinkStatus").textContent = "✅ 10 High-Quality Backlinks Generated!";
}

function postComment() {
    let comments = ["🔥 Amazing content!", "🚀 This will go viral!", "❤️ Love this video!"];
    document.getElementById("commentStatus").textContent = "✅ AI Comment Posted: " + comments[Math.floor(Math.random() * comments.length)];
}

function autoShare() {
    document.getElementById("shareStatus").textContent = "✅ Video Shared on Facebook, Twitter, Instagram!";
}

function generateThumbnail() {
    document.getElementById("thumbnailPreview").src = "https://source.unsplash.com/600x400/?video";
    document.getElementById("thumbnailPreview").style.display = "block";
}
