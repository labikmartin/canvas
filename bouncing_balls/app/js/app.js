//- ### ### ### ### ### ### ### ###
//- BUILD
//- ### ### ### ### ### ### ###

//- ### CSS BUILD
import scss from '../sass/styles.scss';
 
//- ### TEMPLATES BUILD
function requireAll (r) { r.keys().forEach(r); }
requireAll(require.context('../templates/', false, /\.pug$/));


//- ### ### ### COMPONENTS
import canvas1 from './components/com_canvas1';

//- ### ### ### ### ### ### ### ### 
//- APP
//- ### ### ### ### ### ### ###

const win = window;

const app = {  
  binder() {
    let winWidth =  win.innerWidth,
        winHeight = win.innerHeight;

    //- ### ### ### CANVAS 1
    canvas1.init();
    //- ### CANVAS 1 ON MOUSEMOVE
    // cnv1
    //   .addEventListener('mousemove', function (e) {
    //     let evt = e,
    //         ths = this;
    //     canvas1.draw(e);
    //   });

    // cnv1
    //   .addEventListener('mouseout', function (e) {
    //     canvas1.clear();
    //   });

  },
  inicialize() {
    //- ### ### ### CALLING EVENTS
    this.binder();
  }
}

app.inicialize();
