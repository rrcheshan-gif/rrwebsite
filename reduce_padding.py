
import os
import re

for root, dirs, files in os.walk("src/app"):
    for file in files:
        if file.endswith("page.tsx"):
            filepath = os.path.join(root, file)
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()

            new_content = content
            # Reduce wrapper paddingTop
            new_content = new_content.replace("\"120px\", minHeight:", "\"100px\", minHeight:")
            new_content = new_content.replace("\"140px\", minHeight:", "\"110px\", minHeight:")
            new_content = new_content.replace("paddingTop: isMobile ? \"90px\" : \"140px\"", "paddingTop: isMobile ? \"70px\" : \"110px\"")
            
            # Reduce .page-header padding
            new_content = new_content.replace("padding: \"100px 20px\"", "padding: \"60px 20px\"")
            new_content = new_content.replace("padding: \"120px 20px\"", "padding: \"70px 20px\"")
            new_content = new_content.replace("padding: \"80px 20px\"", "padding: \"50px 20px\"")
            new_content = new_content.replace("padding: isMobile ? \"70px 20px\" : \"120px 20px\"", "padding: isMobile ? \"40px 20px\" : \"70px 20px\"")
            new_content = new_content.replace("padding: isMobile ? \"60px 20px\" : \"100px 20px\"", "padding: isMobile ? \"40px 20px\" : \"60px 20px\"")

            if new_content != content:
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Updated {filepath}")

