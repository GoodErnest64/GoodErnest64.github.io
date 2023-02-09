try:
    a = int(input("Please enter number 1 : "))
    b = int(input("Please enter number 2 : "))
    print(f"The result is {a + b}")
except Exception as e:
    print(f"An error occured. Error : \n{e}")
