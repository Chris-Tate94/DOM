const allLinks = document.querySelectorAll("a");

// for (let link of allLinks) {
//   link.innerText = "I AM A LINK!!!!";
// }

for (let link of allLinks) {
  link.style.color = "rgb(0, 108, 134)";
  link.style.textDecorationColor = "magenta";
  link.style.textDecorationStyle = "wavy";
}

const allImages = document.getElementsByTagName("img");

// for (const image of allImages) {
//   console.log(image.src);
//   image.src =
//     "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80";
// }

const squareImages = document.getElementsByClassName("square");
// for (const image of squareImages) {
//   image.src =
//     "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80";
// }

const links = document.querySelectorAll("p a");

// for (const link of links) {
//   console.log(link.href);
// }

const doneTodos = document.querySelectorAll(".done");
