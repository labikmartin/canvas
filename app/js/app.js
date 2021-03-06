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
    canvas1.init(1);
    canvas1.canvas
      .addEventListener('click', function (e) {
        canvas1.makeCircles(999);
        canvas1.yoloText = "☺";
      });
    //- ### CANVAS 1 ON MOUSEMOVE
    canvas1.canvas
      .addEventListener('mousemove', function (e) {
        canvas1.e = e;
        canvas1.yoloText = "Can't catch this! Rather click the canvas...";
      });

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
