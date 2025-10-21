from tkinter import *
import turtle

screenTur = turtle.Screen()
screenTur.bgcolor("black") 
mt = turtle.Turtle()
mt.color('white')
mt.pensize(3)
mt.speed(100)

root = Toplevel()
root.geometry("250x420")
root.title("Tkinter Turtle")

########################################################################

def desenhar():
    try:
        valor_agora_Angulo = valor_Angulo.get()
        label_Angulo.config(text=f"Angulo:") # atualiza exibição
        valor_Angulo.set(valor_agora_Angulo)
        ##### ##### #####
        valor_agora_Distancia = valor_Distancia.get()
        label_Distancia.config(text=f"Distancia:") # atualiza exibição
        valor_Distancia.set(valor_agora_Distancia)
        ##### ##### #####
        valor_agora_Repeticoes = valor_Repeticoes.get()
        label_Repeticoes.config(text=f"Repeticoes:") # atualiza exibição
        valor_Repeticoes.set(valor_agora_Repeticoes)

        for i in range(valor_agora_Repeticoes):
            mt.forward(valor_agora_Distancia*i)
            mt.left(valor_agora_Angulo)

    except ValueError:
        label_Angulo.config(text="Invalid input: Please enter an integer.")

def resetar():
    mt.reset()
    mt.color("white")     # Set pen color
    mt.pensize(3)       # Set pen size
    mt.speed(100)

def definir_angulo():
        valor_virar = valor_A_Virar.get()
        label_virar.config(text=f"Definir angulo:") # atualiza exibição
        valor_A_Virar.set(valor_virar)
        mt.setheading(valor_virar)


########################################################################

label_Angulo = Label(root, text="Angulo:")
label_Angulo.pack(pady=5)

valor_Angulo = IntVar()
valor_Angulo.set(91) # valor inicial, nao implica com nada ao decorrer

entrada_Angulo = Entry(root, textvariable=valor_Angulo)
entrada_Angulo.pack(pady=10)
####################################

label_Distancia = Label(root, text="Distancia:")
label_Distancia.pack(pady=5)

valor_Distancia = IntVar()
valor_Distancia.set(5) # valor inicial, nao implica com nada ao decorrer

entrada_Distancia = Entry(root, textvariable=valor_Distancia)
entrada_Distancia.pack(pady=10)

####################################

label_Repeticoes = Label(root, text="Repetições")
label_Repeticoes.pack(pady=5)

valor_Repeticoes = IntVar()
valor_Repeticoes.set(50) # valor inicial, nao implica com nada ao decorrer

entrada_Repeticoes = Entry(root, textvariable=valor_Repeticoes)
entrada_Repeticoes.pack(pady=10)

####################################

label_virar = Label(root, text="Definir angulo")
label_virar.pack(pady=5)

valor_A_Virar = IntVar()
valor_A_Virar.set(0) # valor inicial, nao implica com nada ao decorrer

entrada_Virar = Entry(root, textvariable=valor_A_Virar)
entrada_Virar.pack(pady=10)


########################################################################

Desenhar = Button(root, text="Desenhar", command=desenhar)
Desenhar.pack(pady=5)

Desenhar = Button(root, text="Resetar", command=resetar)
Desenhar.pack(pady=5)

Desenhar = Button(root, text="definir angulo", command=definir_angulo)
Desenhar.pack(pady=5)

root.mainloop()