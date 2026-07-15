import sqlite3, os, shutil

conn = sqlite3.connect(r'D:\claude_space\Skrolla\recommandation\data\training_v2\catalog.db')
cur = conn.cursor()

# Find Fault in Our Stars
cur.execute("SELECT isbn13, title, author, cover_file FROM catalog WHERE title LIKE '%Fault%Stars%' LIMIT 5")
rows = cur.fetchall()
print("Fault in Our Stars:", rows)

# Also find cover file directly
covers_dir = r'D:\claude_space\Skrolla\recommandation\data\training_v2\covers'
for f in os.listdir(covers_dir)[:5]:
    print("Sample cover file:", f)
    break

conn.close()
