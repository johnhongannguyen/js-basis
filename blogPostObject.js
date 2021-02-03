// title
// body
// author 
// views 
// comments
// (author, body)
// isLive

const blog = new BlogPost('First Post','Message','John Nguyen');
console.log(blog);

// use constructor function to create a post object 
// views = 0 
// comments = []
// isLive = false
// because it's not published yet 

function BlogPost(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
    
}