const button=document.querySelector(".toggle");
const menu=document.querySelector("#menu");
if(button&&menu){
  button.addEventListener("click",()=>{
    const open=button.getAttribute("aria-expanded")==="true";
    button.setAttribute("aria-expanded",String(!open));
    button.setAttribute("aria-label",open?"Open navigation":"Close navigation");
    menu.classList.toggle("open",!open);
  });
  menu.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
    button.setAttribute("aria-expanded","false");
    button.setAttribute("aria-label","Open navigation");
    menu.classList.remove("open");
  }));
}
const year=document.querySelector("#year");
if(year) year.textContent=new Date().getFullYear();
// The PDF link is intentionally a placeholder until the approved checklist file is added.
const download=document.querySelector("[data-placeholder-download]");
if(download){
  download.addEventListener("click",event=>{
    if(download.getAttribute("href")==="downloads/Patient-Intake-Checklist.pdf"){
      event.preventDefault();
      alert("The Patient Intake Checklist PDF is being prepared. Please check back soon.");
    }
  });
}