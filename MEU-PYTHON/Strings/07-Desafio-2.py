urls = [
    "  https://www.google.com/search?q=python  ",
    "http://MYSITE.ORG/about-us",
    "HTTPS://github.com/profile/repo",
    "  ftp://servidor.com/arquivos  "
]

for url in urls:
	url = url.strip().lower()
	if url.startswith('https'):
		minha_url = url.split('/')[2]
		print(minha_url)
	else:
		print(f"⚠️ URL insegura ou inválida ignorada: {url}")



site = "http://MYSITE.ORG/about-us"
site_limpo = site.split("/")[2]
print(site_limpo)