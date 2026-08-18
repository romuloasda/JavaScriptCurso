frutas = ["Maçã", "Banana", "Uva"]
n = 1

for fruta in frutas:
	print(f"{n}. {fruta}")
	n += 1

for num in range(1,5):
	print(num)

for num in range(1, 6):
	if num == 3:
		continue
	print(num)
	