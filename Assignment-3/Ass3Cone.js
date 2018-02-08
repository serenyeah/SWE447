var gl = null;

function init() {
    var canvas = document.getElementById( "webgl-canvas" );
       
    cone = new Cone( gl, 10, "Cone-vertex-shader", "Cone-fragment-shader");

    gl = WebGLUtils.setupWebGL( canvas );

    if ( !gl ) {
        alert("Unable to setup WebGL");
        return;
    }
    
    this.program =initShaders(gl,"Cone-vertex-shader","Cone-fragment-shader");

    this.positions.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER,this.positions.buffer);
    gl.bufferData(gl.ARRAY_BUFFER,newFloat32Array(positions), gl.STATIC_DRAW);
 
    this.indices.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER,this.indices.buffer);
    gl.bufferData(gl.ARRAY_BUFFER,newUint16Array(indices), gl.STATIC_DRAW
    this.positions.attribute = gl.getAttribLocation(this.program,"vPosition");
    
    gl.clearColor( 1.0, 1.0, 0.0, 1.0 );

    render();
}

function render() {
    gl.clear( gl.COLOR_BUFFER_BIT );
    cone.render();
    window.requestAnimationFrame(render);
}

window.onload = init;
        
