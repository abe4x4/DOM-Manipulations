//03.17.06. abe Highlight Active
function focus() {
    let theSections = document.getElementsByTagName('input');
    for(let i = 0; i < theSections.length; i++){
        theSections[i].addEventListener('focus', function() {
            console.log('focused!');
            theSections[i].parentNode.className = 'focused';
            console.log('node name is ' + theSections[i].parentNode.nodeName);
        });
        theSections[i].addEventListener('blur', function() {
            console.log('Not focused!');
            theSections[i].parentNode.className = '';
        });
    }
}