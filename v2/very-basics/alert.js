alert("I'm JS")

// Notes

/*

1. JavaScript programs can be inserted almost anywhere into an HTML document using the <script> tag.

2. The <script> tag contains JavaScript code which is automatically executed when the browser processes the tag.

3. External Scripts
    - If we have lot of JS code, we can put in separate files.
        <script src="/path/to/script.js"></script>
            - The /path/to/script.js is absolute path, we can also use relative path -> <script src="script.js"></script> or ./script.js
    
    - To attach multiple script files:
        <script src="/js/script1.js"></script>
        <script src="/js/script2.js"></script>
    
    - Only the simplest scripts are put into HTML. More complex ones reside in separate files.

    - Separate file is been downloaded and cached in the browser, and other pages can take refference the scripts which in cached, so they don't need 
        to download again, this reduces traffic and makes pages faster.
    
4. A single <script> tag can’t have both the src attribute and code inside.
    - We should split into two scripts to work:

        <scriptsrc="file.js"></script>

        <script>
            alert(1);
        </script>

*/