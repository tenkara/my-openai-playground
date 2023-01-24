"""
1. Create a list of first names
2. Create a list of last names
3. Combine them randomly into a list of 100 full names
"""
import random

firstNames = ["John", "Jane", "Joe", "Jill", "Jack", "Jenny", "Jesse", "Jen", "Jenna", "Jasper"]
lastNames = ["Smith", "Jones", "Johnson", "Jackson", "Jenkins", "Jensen", "Johansson", "Johanson", "Johanson", "Johanson"]

fullNames = []

for i in range(100):
    fullName = random.choice(firstNames) + " " + random.choice(lastNames)
    fullNames.append(fullName)

print(fullNames)

# Path: codeCompletions\random.py
"""p
1. Create a list of 100 random numbers between 1 and 100
2. Print the list
3. Print the average of the list
4. Print the median of the list
5. Print the mode of the list
"""
import random
import statistics

numbers = []

for i in range(100):
    numbers.append(random.randint(1, 100))

print(f'Numbers: {numbers}')

print(f'Average: {sum(numbers) / len(numbers)}')

print(f'Mean: {statistics.mean(numbers)}')

print(f'Median: {statistics.median(numbers)}')

print(f'Mode: {statistics.mode(numbers)}')


