function togglemode(){
    const html = document.documentElement
  html.classList.toggle('light')
  //pegar a tag img
  const img = document.querySelector("#profile img")
    
        //subdtituir a imagem
 if(html.classList.contains('light')){
    img.setAttribute("src","avatar-light.png") 
    img.setAttribute("alt", "maike brito com fundo branco")
           //se tiver ligth mode, adicionar a imagem light
 }else{
    
        // se tiver sem light mode, manter imagem normal 
img.setAttribute("src","avatar.png")
img.setAttribute("alt", "maike brito com fundo preto")
 }
 
 



  /*  if(html.classList.contains('ligth')){
       html.classList.remove('ligth')
    }else{
        html.classList.add('light')
    }*/

      




    }