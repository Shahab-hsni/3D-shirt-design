import { proxy } from "valtio";

const state = proxy({
    intro:true, //are we in home page or not
    color: '#EFBD48', // initial shirt color
    isLogoTexture: true, // are we displaying the logo on the shirt
    isFullTexture: false, //full texture
    logoDecal: './threejs.png',
    fullDecal: './threejs.png'
})

export default state