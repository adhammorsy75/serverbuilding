

document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById('snap')
  const hosturl = "http://localhost:3009/post"
  async function viewPosts() {
    try { 
        const host = await axios.get(`${hosturl}`)
        if (host.data.length > 0) {
            display.innerHTML = ""
            host.data.forEach(x => {
                display.innerHTML += 
                `
                <h3>${x.username}</h3>
                <p>${x.post}</p>
                
                
                `
            });
        } else {
            const postsContent = document.getElementById('snap')
            postsContent.innerHTML = "No posts found"
        }

    } catch (e) {

        const postsContent = document.getElementById('snap')
        console.error("Error:", e);
        postsContent.innerHTML = "Error"; e
    }
}

viewPosts()





})