const button=document.querySelector(".toggle");
const menu=document.querySelector("#menu");
if(button&&menu){
  const closeMenu=({restoreFocus=false}={})=>{
    button.setAttribute("aria-expanded","false");
    button.setAttribute("aria-label","Open navigation");
    menu.classList.remove("open");
    if(restoreFocus) button.focus();
  };
  button.addEventListener("click",()=>{
    const isOpen=button.getAttribute("aria-expanded")==="true";
    if(isOpen){closeMenu();return;}
    button.setAttribute("aria-expanded","true");
    button.setAttribute("aria-label","Close navigation");
    menu.classList.add("open");
    const firstLink=menu.querySelector("a");
    if(firstLink&&window.matchMedia("(max-width: 767px)").matches) firstLink.focus();
  });
  menu.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>closeMenu()));
  window.addEventListener("keydown",event=>{
    if(event.key==="Escape"&&button.getAttribute("aria-expanded")==="true"){
      closeMenu({restoreFocus:true});
    }
  });
  document.addEventListener("click",event=>{
    if(button.getAttribute("aria-expanded")==="true"&&!menu.contains(event.target)&&!button.contains(event.target)) closeMenu();
  });
}
const year=document.querySelector("#year");
if(year) year.textContent=new Date().getFullYear();
const copyButton=document.querySelector("[data-copy-email]");
if(copyButton){
  const status=document.querySelector(".copy-status");
  copyButton.addEventListener("click",async()=>{
    const email=copyButton.getAttribute("data-copy-email");
    try{
      await navigator.clipboard.writeText(email);
      copyButton.textContent="Copied";
      if(status) status.textContent="Copied to clipboard.";
      window.setTimeout(()=>{copyButton.textContent="Copy email";if(status)status.textContent="";},2200);
    }catch(error){
      if(status) status.textContent="Copy unavailable in this browser. Please select the email address.";
    }
  });
}
const revealItems=document.querySelectorAll(".section-heading,.preview-card,.steps>div,.founder-grid>*,.hub-copy,.hub-visual");
if("IntersectionObserver" in window&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target);}
    });
  },{threshold:.12});
  revealItems.forEach(item=>{item.classList.add("reveal");observer.observe(item);});
}