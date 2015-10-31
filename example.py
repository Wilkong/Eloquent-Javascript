class Student:
    def __init__ (self, name, age, gender):
        self.name   = name
        self.age    = age
        self.gender = gender

Sue = Student("Susan Miller", 20, "f")
print Sue
print Sue.age


import random  # for generating random numbers
import time    # for timing each sort function with time.clock()
DEBUG = False  # set True to check results of each sort
N = 10     # number of elements in list
list1 = []   # list of integer elements
for i in range(0, N):
    list1.append(random.randint(0, N-1))
list1 = [9,8,7,1,2,3,4,5]
def selection_sort(list2):
    for i in range(0, len (list2)):
        min = i
        for j in range(i + 1, len(list2)):
            if list2[j] < list2[min]:
                min = j
        list2[i], list2[min] = list2[min], list2[i]  # swap

list2 = list(list1)

selection_sort(list2)
print(list2)
