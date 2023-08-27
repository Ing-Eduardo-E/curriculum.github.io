document.addEventListener('DOMContentLoaded', (event) => {
  setTimeout(() => {
  document.querySelector("#load-iframe-map").innerHTML = `
  <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.919514019671!2d-77.26972780099214!3d1.2161923940857184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2ed5509da0ff41%3A0xecddc2c809abab16!2s3E-Asesorias!5e0!3m2!1ses-419!2sco!4v1691632400816!5m2!1ses-419!2sco" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  `;
  }, 500);
})