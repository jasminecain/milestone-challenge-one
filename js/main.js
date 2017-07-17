let posts = [
  {
    title: 'Post Title',
    copy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    date: '07-07-2017',
  },
  {
    title: 'Post Title 2',
    copy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    date: '07-14-2017',
  }
];

posts.forEach(function(post) {
  document.getElementById("blog-posts").innerHTML += `<h3>${post.title}</h3>
                                                      <p>${post.date}</p>
                                                      <p>${post.copy}</p>`;
});

// The page will have a linked JavaScript file for the blog posts section. Create an array to hold your posts (at least 2 posts). Each item in the array must be an object that contains at a minimum the following information: Title, Copy, Date. Use JavaScript to add each post to the DOM.
//
