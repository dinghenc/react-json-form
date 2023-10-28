
const search = window.location.search;
const params = new URLSearchParams(search);
let param = params.get('param');
if (param == null) {
    param = ''
}

export default `This is a simple example.
This i a demo.
Ha Ha Ha.

Fuck ` + param