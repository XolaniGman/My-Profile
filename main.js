
 const menu =document.querySelector(".menu");
 const navbar =document.querySelector(".navbar");
 menu.addEventListener("click",() =>{
      navbar.classList.toggle("active")
 })

 window.onscroll = () => {
      navbar.classList.remove('active');
 }
 const more =document.querySelector(".more");
 const prt =document.querySelector(".prt");
 more.addEventListener("click",() =>{
     prt.classList.toggle("active")
 })

 "https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js">
   
  
         function downloadImage() {
             axios({
                 url: 'Xolani CV.pdf',
                 method: 'GET',
                 responseType: 'blob'
             })
                 .then((response) => {
                     if (response.status === 200) {
                         const url = 
                             window.URL.createObjectURL
                             (new Blob([response.data]));
                         const link = document.createElement('a');
                         link.href = url;
                         link.setAttribute('download', 'Xolani CV.jpg');
                         document.body.appendChild(link);
                         link.click();
                         document.body.removeChild(link);
                         window.URL.revokeObjectURL(url);
                     } else {
                         console.error('Error: Received non-200 status code');
                     }
                 })
                 .catch((error) => {
                     console.error('Error downloading the image:', error);
                 });
         }
     