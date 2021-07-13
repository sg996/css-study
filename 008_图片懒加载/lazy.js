const images = document.querySelectorAll('img');

// scroll  响应密集
// window.addEventListener('scroll', (e) => {
//     images.forEach((image) => {
//         const imageTop = image.getBoundingClientRect().top;
//         if (imageTop < window.innerHeight) {
//             const img_src = image.getAttribute('data-src');
//             image.setAttribute('src', img_src);
//         }
//     })
// })

callback = (entries) => {
    console.log(entries);
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const image = entry.target;
            const image_src = image.getAttribute('data-src');
            image.setAttribute('src', image_src);
            observer.unobserve(image);
        }
    })
}
const observer = new IntersectionObserver(callback);
images.forEach((image) => {
    observer.observe(image);
})

// IntersectionObserver API 使用教程
// https://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html