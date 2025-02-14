import axios from 'axios';

export async function getPosts() {
  try {
    const res = await axios.get('https://dev-git-test-site007.pantheonsite.io/wp-json/wp/v2/posts');
    return res.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}
