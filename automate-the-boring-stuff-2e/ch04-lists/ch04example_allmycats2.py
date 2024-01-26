cat_names = []
while True:
    print('Enter name of cat ' + str(len(cat_names) + 1) +
        ' (Or enter nothing to stop.)')
    name = input()
    if name == '':
        break
    cat_names = cat_names + [name] # list concat

print('The cat names are:')
for name in cat_names:
    print(' ' + name)
