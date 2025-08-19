import os

folder = "images" # your images folder
files = [f for f in os.listdir(folder) if os.path.isfile(os.path.join(folder, f))]

js_array = "const images = [\n"
for f in files:
    js_array += f' "{f}",\n'
js_array += "];"

with open("images_list.js", "w") as f:
    f.write(js_array)

print("images_list.js generated successfully!")
