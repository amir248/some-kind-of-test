
  const wrapper = document.querySelector('.img');
const layers = document.querySelectorAll('.img');
const SPEED = 0.02;

const handleParallax = (evt) => {
 //размер области просмотра
  const parallaxLeftOffset = wrapper.getBoundingClientRect().left;
  const parallaxTopOffset = wrapper.getBoundingClientRect().top;

  // координаты центра экрана
  const coordX = evt.clientX - parallaxLeftOffset - 0.5 * wrapper.offsetWidth;
  const coordY = evt.clientY - parallaxTopOffset - 0.5 *  wrapper.offsetHeight;
    
  layers.forEach((layer)=>{
    const layerSpeed = layer.dataset.speed;
    const x = coordX.toFixed(2);
    const y = coordY.toFixed(2);
    layer.setAttribute('style', `transform: translate(${x}px, ${y}px);`)
  });
};

const reset = () => {
  layers.forEach((layer)=>{
      layer.removeAttribute('style');
  });
}
 
wrapper.addEventListener('mousemove', handleParallax);
wrapper.addEventListener('mouseout', reset);

window.addEventListener('scroll',()=>{
    if(scrollY < 300){
        console.log(`${scrollY}`);
        let scrolloK='1'+scrollY+'px';
        document.querySelector('.img').style.cssText=`
            width: ${scrolloK};
            height: ${scrolloK};
            display:block;
             background: linear-gradient(0.25turn,#015172,#FF603D);
        border-radius: 50%;
        filter: blur(15px);
        position: relative;
        transition: all 0.5s ease-out;
        `; 
    }else{
        console.log('SCROLL OFF');
    }
    
});
let texts=document.querySelector('#textWrite').value;
texts='qq';
let textInput=' ok';
function typewriter(){
    document.querySelector('#inp').addEventListener('keyup',(event)=>{
        console.log(event);
        if(event.key == 'Shift'){
            texts.slice(0,-1);
            // document.querySelector('#textWrite').innerHTML=`${textInput}`+`${event.key}`;
        }else if(event.key == "Backspace"){
            console.log('BackesSPACE');
           texts=texts.slice(0,-1);
            console.log(texts);
            document.querySelector('#textWrite').innerHTML=`${texts}`.slice(0,-1);
        }else{
            if(event.key == "Backspace"){
            console.log('BackesSPACE');
            texts=texts.slice(0,-1);
            console.log(texts);
            document.querySelector('#textWrite').innerHTML=`${texts}`.slice(0,-1);
            }else{
                texts=texts+event.key;
                document.querySelector('#textWrite').innerHTML=`${texts}`+`${event.key}`;
            }
            
        }
        
        
    });
    
}
function dellSumbol(){
    window.addEventListener('keydown',(event)=>{
 if(event.key == "Backspace"){
            console.log('BackesSPACE');
        //    textInput.substring(0, textInput.length -1);
            console.log(textInput);
            // document.querySelector('#textWrite').innerHTML=`${textInput}`.slice(0,-1);
            textInput.slice(0,-1);
        }
    });
   

}
// dellSumbol();
typewriter();    