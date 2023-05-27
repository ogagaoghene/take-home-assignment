def check_duplicate_names(arr: list):
    for item in arr:
        if arr.count(item) > 1:
            return item
        else:
            return f'No duplicates found'
        
def main():
    fruits = ['apple', 'orange', 'banana', 'apple']
    names = ['Yoda', 'Moses', 'Joshua', 'Mark']

    print(check_duplicate_names(fruits))
    print(check_duplicate_names(names))

if __name__ == '__main__':
    main()
