#%%
from pybtex.database import parse_file

# Cargar y parsear el archivo .bib
bib_data = parse_file('ScienceDirect_citations_1708492747777.bib')

# Extraer palabras clave de cada entrada y contar su frecuencia
keywords_freq = {}

for entry in bib_data.entries.values():
    if 'keywords' in entry.fields:
        keywords_list = entry.fields['keywords'].split(', ')
        for keyword in keywords_list:
            if keyword in keywords_freq:
                keywords_freq[keyword] += 1
            else:
                keywords_freq[keyword] = 1

# Ordenar las palabras clave por frecuencia de mayor a menor
sorted_keywords_freq = sorted(keywords_freq.items(), key=lambda x: x[1], reverse=True)

sorted_keywords_freq  # Mostrar las 10 palabras clave más frecuentes


#%%
bib_data = parse_file('IEEE Xplore Citation BibTeX Download 2024.2.21.0.30.2.bib')
keywords_freq = {}
for entry in bib_data.entries.values():
    keywords_list=entry.fields["keywords"].split(';')
    for keyword in keywords_list:
        if keyword in keywords_freq:
            keywords_freq[keyword] += 1
        else:
            keywords_freq[keyword] = 1

sorted(keywords_freq.items(), key=lambda x: x[1], reverse=True)

#%%
bib_data = parse_file('scopus.bib')
keywords_freq = {}
for entry in bib_data.entries.values():
    keywords_list=entry.fields["author_keywords"].split('; ')
    for keyword in keywords_list:
        if keyword in keywords_freq:
            keywords_freq[keyword] += 1
        else:
            keywords_freq[keyword] = 1

sorted(keywords_freq.items(), key=lambda x: x[1], reverse=True)