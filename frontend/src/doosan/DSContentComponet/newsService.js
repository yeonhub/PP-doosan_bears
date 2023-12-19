import axios from 'axios';

const fetchNewsItems = async (name) => {
    try {
        const response = await axios.get('http://localhost:5000/news', {
            params: {
                query: `${name}`,
            },
        });
        return response.data.items.map((item) => ({
            title: item.title.replace(/<\/?b>/g, '').replace(/&apos;/g, '').replace(/&amp;/g, '').replace(/&quot;/g, ''),
            description: item.description ? item.description.replace(/<\/?b>/g, '').replace(/&apos;/g, '').replace(/&amp;/g, '').replace(/&quot;/g, '') : "(포토기사입니다)",
            link: item.link,
        }));
    } catch (error) {
        console.error(error);
        return [];
    }
};

export { fetchNewsItems };
