// The object that is executing the current function 
// if a function is a part of object, we call that function a method 
// so if that function is a method in an object 
// this references that object itself
// otherwise if that function is a regular function 
// which mean it's a part of an object -> this mean the global object 
// which is the window object in the browsers and global in Node 

const video = { 
    title: 'a',
    tags: ['a', 'b', 'c'],
    // because play() is the method of video obj
    // this references - this obj itself 
    play() {
        console.log(this);
    },
    showTags(){
        // changing this
        // const self = this;
        // this is just a regular function- it's not a method in the video obj
        // the method is just only showTags
        // this references global obj

        //bind is the second solution for this problem
        // arrow function inherit this from the containing function
        this.tags.forEach(function(tag){
            console.log(this.title,tag);
        }.bind(this));
    }
}; 
video.showTags();

// add method for video obj

video.stop = function () {
    console.log(this);
}
// still get video obj
// this is because stop is a method of the obj
video.stop();
// get video object
video.play();

// function playVideo() {
//     console.log(this);
// }
// // get window obj 
// playVideo();

// function Video (title){
//     this.title = title;
//     console.log(this);
// }
// // instead get a window obj, we get a new obj
// // because when we use the new operator , this new operator creates a new empty object
// const v = new Video('b');// like this {}



// the functions are objects in Javascript
// function playVideo(){
//     console.log(this);
// }

// playVideo.call({name:'John'});
// playVideo.apply({name:'Nguyen'});
// playVideo.bind({name:'John'});

// playVideo();

// recap 
// learning 3 ways to change the value of this 

// fist solution - const self = this
// second solution - the bind method - and pass this as argument
// use arrow function