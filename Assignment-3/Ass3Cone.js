var gl = null;

function init() {
    var canvas = document.getElementById( "webgl-canvas" );
       
    cone = new Cone( gl, 10, "Cone-vertex-shader", "Cone-fragment-shader");

    gl = WebGLUtils.setupWebGL( canvas );

    if ( !gl ) {
        alert("Unable to setup WebGL");
        return;
    }
    
    gl.clearColor( 1.0, 0.0, 1.0, 0.0 );

    render();
}

function render() {
    gl.clear( gl.COLOR_BUFFER_BIT );
    cone.render();
    window.requestAnimationFrame(render);
}

window.onload = init;
        
