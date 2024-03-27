const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
export const YOUTUBE_POPULAR_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`;

export const YOUTUBE_SEARCH_API = "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const formatNumber = (number) => {
    const absNumber = Math.abs(number);
    const million = 1000000;
    const thousand = 1000;

    if (absNumber >= million) {
        return (number / million).toFixed(1) + 'M';
    } else if (absNumber >= thousand) {
        return (number / thousand).toFixed(0) + 'K';
    } else {
        return number.toString();
    }
}

//comments data

export const commentsData = [
    {
        name: "John Doe",
        comment: "This is a sample comment.",
        replies: [
            {
                name: "Emily Parker",
                comment: "This is a reply to the sample comment.",
                replies: [
                    {
                        name: "Michael Johnson",
                        comment: "This is a reply to Emily Parker's comment.",
                    },
                    {
                        name: "Sophia Garcia",
                        comment: "This is another reply to Emily Parker's comment.",
                    },
                ],
            },
            {
                name: "Sophia Garcia",
                comment: "This is another reply to the sample comment.",
            },
        ],
    },
    {
        name: "Jane Smith",
        comment: "This is a second sample comment.",
        replies: [
            {
                name: "Michael Johnson",
                comment: "This is a reply to the second sample comment.",
            },
            {
                name: "Emily Parker",
                comment: "This is another reply to the second sample comment.",
                replies: [
                    {
                        name: "Sophia Garcia",
                        comment: "This is a reply to Emily Parker's second comment.",
                    },
                ],
            },
        ],
    },
];



export const live_Chat_Count = 15;
