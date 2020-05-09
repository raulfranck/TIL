# Validar idade entre 0 e 150 anos:

idade = int(input("Digite sua idade"))

while (idade > 0) and (idade < 150):
    idade = int(input("Digite sua idade"))

    if (idade < -1) and (idade > 151):
        print("idade não existe")
