export function changeTool(target1, target2) {
    return function(event) {
        event.preventDefault();
        if (target1.style.display !== 'none') {
            target1.style.display = 'none';
            target2.style.display = '';
        } else {
            target2.style.display = 'none';
            target1.style.display = '';
        }
    }
};