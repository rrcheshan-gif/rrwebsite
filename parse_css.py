import re

with open('src/app/globals.css', 'r') as f:
    css = f.read()

# Find media queries
mqs = re.finditer(r'@media\s*([^{]+)\{', css)
for mq in mqs:
    start = mq.end()
    # Find matching closing brace
    braces = 1
    end = start
    while braces > 0 and end < len(css):
        if css[end] == '{': braces += 1
        elif css[end] == '}': braces -= 1
        end += 1
    
    mq_content = css[start:end-1]
    if '.nav-links' in mq_content:
        print('--- MEDIA QUERY: ' + mq.group(1).strip() + ' ---')
        lines = [line for line in mq_content.split('\n') if '.nav-links' in line]
        for l in lines: print(l)
