# Code Structure

1. Statements are syntax constructs and commands that perform actions.
    `alert("popup");`

2. Recommend putting semicolons between statements even if they are separated by newlines. 

3. It becomes necessary to add comments which describe WHAT the CODE does and WHY.
    - One-line comments start with //.
      - `Ctrl+/` 
    - Multiline comments start with /* and end with */.
      - `Ctrl+Shift+/`

4. There are many tools which minify code before publishing to a production server. They remove comments, so they don’t appear in the working scripts. Therefore, comments do not have negative effects on production at all. 


# "use strict"

1. To keep the old code working, most such modifications are off by default. You need to explicitly enable them with a special directive: "use strict".
2. "use strict" or 'use strict'. It should be located at top of the script, the whole script works the "modern" way.
3. Once we enter strict mode, there’s no going back.
4. Modern JavaScript supports “classes” and “modules”, that enable use strict automatically. 