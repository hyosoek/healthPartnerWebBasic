window.onload = function() {
    function resize() {
        let scrollHeight = textarea.scrollHeight;
            let style = window.getComputedStyle(textarea);
            let borderTop = parseInt(style.borderTop);
            let borderBottom = parseInt(style.borderBottom);
            
            textarea.style.height = (scrollHeight + borderTop + borderBottom) + "px";
    }

    let textarea = document.getElementById("message-box");
    textarea.addEventListener("input", resize);
}