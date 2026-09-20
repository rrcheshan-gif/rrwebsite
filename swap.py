import re

with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Find start of PROJECT HIGHLIGHTS section
start_idx = content.find('{/* PROJECT HIGHLIGHTS */}')

# Find start of Major Clients
clients_idx = content.find('{/* Tightly Integrated Major Clients Section */}')

# Find end of section (the last </section> before <style jsx global>)
style_idx = content.find('<style jsx global>')
end_idx = content.rfind('</section>', 0, style_idx) + 10

project_highlights_start = content[start_idx:clients_idx]
clients_content = content[clients_idx:end_idx]

# Remove the trailing container closing tags from clients_content
clients_content = clients_content.replace('\n          </div>\n\n        </div>\n      </section>', '')

new_clients = f'''      {{/* MAJOR CLIENTS */}}
      <section className="bg-gradient-adaptive" style={{{{ padding: "50px 20px", overflow: "hidden", position: "relative" }}}}>
        <div className="container" style={{{{ position: "relative", zIndex: 2 }}}}>
          {clients_content}
        </div>
      </section>

'''

new_highlights = project_highlights_start + '\n        </div>\n      </section>'

new_clients = new_clients.replace('borderTop: "1px solid var(--border-soft)",', 'borderBottom: "1px solid var(--border-soft)",')
new_clients = new_clients.replace('marginTop: "40px",', 'marginBottom: "40px",')

new_content = content[:start_idx] + new_clients + new_highlights + content[end_idx:]

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print('Swapped!')
