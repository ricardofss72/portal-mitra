import { useEffect, useRef } from 'react';
/** Separates the original brand's gold and white pixels in-browser.
 * Source contours are preserved; only the flame layer rotates. No generated replacement logo. */
export function Brand(){
 const flame=useRef<HTMLCanvasElement>(null), fixed=useRef<HTMLCanvasElement>(null), fallback=useRef<HTMLImageElement>(null);
 useEffect(()=>{let disposed=false;const img=new Image();img.src=import.meta.env.BASE_URL+'mitra-oficial.png';img.onload=()=>{
 if(disposed)return;const size=800;const tmp=document.createElement('canvas');tmp.width=tmp.height=size;const c=tmp.getContext('2d',{willReadFrequently:true});const f=flame.current?.getContext('2d');const s=fixed.current?.getContext('2d');if(!c||!f||!s)return;
 c.drawImage(img,0,0,size,size);const source=c.getImageData(0,0,size,size);const gold=c.createImageData(size,size);const silver=c.createImageData(size,size);
 for(let i=0;i<source.data.length;i+=4){const [r,g,b]=source.data.slice(i,i+3);const a=source.data[i+3];const isGold=r>140&&g>95&&r-b>55;const isWhite=Math.min(r,g,b)>135&&Math.max(r,g,b)-Math.min(r,g,b)<45;
 if(isGold){gold.data.set([255,Math.min(202,110+(g/255)*80),0,a],i);}if(isWhite){silver.data.set([r,g,b,a],i);}}
 f.putImageData(gold,0,0);s.putImageData(silver,0,0);if(fallback.current)fallback.current.hidden=true;
 };return()=>{disposed=true;};},[]);
 return <div className="brand" role="img" aria-label="Mitra Academia, logomarca oficial"><img ref={fallback} src={import.meta.env.BASE_URL+'mitra-oficial.png'} alt=""/><canvas aria-hidden="true" className="flame" ref={flame} width="800" height="800"/><canvas aria-hidden="true" ref={fixed} width="800" height="800"/></div>;
}
