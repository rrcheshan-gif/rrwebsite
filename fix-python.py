import re

with open('src/app/about/company-overview/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# We need to swap the MD block and the Intro blocks.
# Let's find them precisely.

intro_pattern = r'(<p style=\{\{ color: "var\(--text-light\)", fontSize: "1\.1rem", lineHeight: 1\.8, marginBottom: "20px", textAlign: "justify" \}\}>.*?adherence to international quality protocols\.\s*</p>)'
md_pattern = r'(<div style=\{\{ background: "rgba\(229, 57, 53, 0\.05\)", padding: "35px 30px", borderRadius: "20px", borderLeft: "4px solid var\(--primary-red\)", position: "relative", marginBottom: "30px" \}\}>.*?Managing Director, RR Construction \(Pvt\) Ltd</p>\s*</div>\s*</div>\s*</div>)'

import sys

intro_match = re.search(intro_pattern, content, re.DOTALL)
md_match = re.search(md_pattern, content, re.DOTALL)

if intro_match and md_match:
    intro_block = intro_match.group(1)
    md_block = md_match.group(1)
    
    # Remove both blocks
    content = content.replace(intro_block, '')
    content = content.replace(md_block, '')
    
    # We want to insert MD block, then Intro block right after the heading
    heading_end = r'A Legacy of Engineering <span style={{ color: "var(--primary-red)" }}>Excellence.</span>\s*</h3>'
    
    heading_match = re.search(heading_end, content)
    if heading_match:
        insert_pos = heading_match.end()
        new_content = content[:insert_pos] + "\n              \n              " + md_block + "\n\n              " + intro_block + content[insert_pos:]
        
        with open('src/app/about/company-overview/page.tsx', 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Successfully swapped with Python!")
    else:
        print("Could not find heading end.")
else:
    print("Could not find intro or md block.")
